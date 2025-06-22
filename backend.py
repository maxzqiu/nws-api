import requests
import json

# GET:
#r = requests.get("http://ericchanlee.com")
#print(r.text)  # Gets value of response, in this the website HTML

# POST:
payload = {"myURL":"https://www.google.com"}
header = { "Content-type": "application/json" }
r = requests.post("http://localhost:8000/api", data=json.dumps(payload), headers=header)
r = requests.delete("http://localhost:8000/api", data=json.dumps(payload), headers=header)
print(r)  # Should be a response of 200
print(r.text)


