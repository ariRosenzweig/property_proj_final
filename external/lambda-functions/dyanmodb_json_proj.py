import ssl; ssl._create_default_https_context = ssl._create_stdlib_context

 q=(line for line in  open('cookjsonlines.json', "r") )
 data=[json.loads(next(q)) for i in range(100)]
 pins=[i['PIN14'] for i in data]
 
 def get_ccrd(pin):
       url='{}{}'.format('https://www.ccrecorder.org/recordings/get_docs_by_pin/', pin)
       #res=requests.get(url, 'html5lib', verify=False)
       res = urllib.request.urlopen(url)
       page=res.read()
       return page

 CONNECTIONS = 20
 out=[]
 with concurrent.futures.ThreadPoolExecutor(max_workers=CONNECTIONS) as executor:
  future_to_url = (executor.submit(get_ccrd,pin) for pin in pins)
  for future in concurrent.futures.as_completed(future_to_url):
   try:
    data = future.result()
   except Exception as exc:
    data = str(type(exc))
   finally:
    out.append(data)


def to_dict(page):
 soup=BS(page,'html5lib')
 rows=soup.select('#docs_body > tr') 
 pin=soup.select('div.card-header > strong')[0].text.split(':')[-1].strip()
 url='{}{}'.format('https://www.ccrecorder.org/recordings/get_docs_by_pin/', pin)
 def datef(ymd): 
      date=dateparser.parse(ymd).date()  
      year=date.year  
      if date.year <= 2016:  
         date=date.strftime("%m")  
      else:  
         date=date.strftime("%Y%m%d")  
      return date 
 def extract_row(dd): 
     ymd=dd.select('td:nth-child(2)')[0].text 
     year=ymd[:4] 
     date=datef(ymd)        
     docno=dd.select('td:nth-child(3)')[0].text  
     doctype=dd.select('td:nth-child(4)')[0].text   
     parties=[i.text for i in dd.select('#docs1_body td')]      
     prior_docs=[i.text for i in dd.select('#docs3_body td')]  
     partial_dic={'Date_Recorded':ymd,'Doc_Num':docno,'Doc_Type':doctype} 
     parties={'Parties':[{'Name':parties[i],'Party_Type': parties[i+1]} for i in range(0,len(parties),2)]}                                                                                
     priors={'Prior_Docs':[{'Doc_Num':doc} for doc in prior_docs]}  
     base='https://www.ccrecorder.org/CCRD-WM/'  
     url={'Doc_Url':'{}{}/{}wm/{}.pdf'.format(base,year,date,docno)}  
     out_dict={**partial_dic, **parties, **priors, **url}  
     return out_dict
 docs_recorded=[extract_row(i) for i in rows] 
 recorded={"Recorded_Documents": docs_recorded, "href":url}
 return recorded

cc_arr=[to_dict(i) for i in out]

for i in cc_arr:
         pin=i['href'].split('/')[-1]
         i['pin']=pin
for i in cc_arr:
      num=len(i['Recorded_Documents'])
     #
      i['Num_Records']=num


for i in data:
        for y in cc_arr:
            if i['PIN14'] == y['pin']:
                i['Recorder'] = y

