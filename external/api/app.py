from chalice import Chalice
import boto3
from boto3.dynamodb.conditions import Key



app = Chalice(app_name='project_api')
app.debug = True
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Properties')


@app.route('/', methods=['GET'], cors=True)
def index():
    response = table.scan()
    data = response.get('Items', None)

    return {'data': data}


@app.route('/properties/{pin}', methods=['GET'], cors=True)
def item_get(pin):
    response = table.query(
        IndexName='pin_index',
        KeyConditionExpression=Key("PIN14").eq(pin)
    )
    data = response.get('Items', None)

    return {'data': data}

@app.route('/types/{type}', methods=['GET'], cors=True)
def property_type(type,city=None):
   if city==None:
    response = table.query(
        IndexName='type_index',
        KeyConditionExpression=Key("TYPE_RES").eq(type)
    )
    data = response.get('Items', None)
   else:
    response = table.query(
        IndexName='type_index',
        KeyConditionExpression=Key("TYPE_RES").eq(type) & Key('CITY').eq(city)
    )

    data = response.get('Items', None)

   return {'data': data}

@app.route('/cities/{city}', methods=['GET'], cors=True)
def cities(city, value=None):
   if value == None:
    response = table.query(
        IndexName='CITY-TOTAL_VALUE-index',
        KeyConditionExpression=Key('CITY').eq(city)
    )
    data = response.get('Items', None)
   else:
     response = table.query(
        IndexName='CITY-TOTAL_VALUE-index',
        KeyConditionExpression=Key('CITY').eq(city) & Key('TOTAL_VALUE').gt(value)
    )
     data = response.get('Items', None)

   return {'data': data}


