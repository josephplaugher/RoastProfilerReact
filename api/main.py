from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
   return 'Hello Tutorialspoint'

@app.route('/another')
def yo():
   return 'another route'
   
if __name__ == '__main__':
   app.run()