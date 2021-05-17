from flask import Flask,request,flash,jsonify,make_response
import json
import sys
sys.path.insert(0,"..//..//")

def read_data(filePath):
    with open(filePath,'r',encoding='UTF-8') as f:
        return json.load(f)

app = Flask(__name__)
@app.route('/get_datasets',methods=['GET','POST'])
def get_datasets():
    datainfo = read_data("questionnare.json")
    explanation_data = read_data("explaination.json")

    data = {
        "datainfo":datainfo,
        "explanation":explanation_data,
    }
    rst = jsonify(data)   
    rst.headers.add('Access-Control-Allow-Origin', '*')
    return rst,200

if __name__ == "__main__":
    app.run(debug=True,port=5000)

