import json
import urllib.parse
import boto3
from bs4 import BeautifulSoup as BS
import dateparser
import requests


print('Loading function')

s3 = boto3.client('s3')
def to_dict(page):
 soup=BS(page,'html5lib')
 rows=soup.select('#docs_body > tr') 
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
 return docs_recorded

 
def lambda_handler(event, context):
    #print("Received event: " + json.dumps(event, indent=2))

    # Get the object from the event and show its content type
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = urllib.parse.unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
    try:
        obj=s3.get_object(Bucket=bucket,Key=key)
        body=obj['Body'].read()
        res=to_dict(body)
        print(res)
    except Exception as e:
        print(e)
        print('Error getting object {} from bucket {}. Make sure they exist and your bucket is in the same region as this function.'.format(key, bucket))
        raise e