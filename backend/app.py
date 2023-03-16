from flask import Flask, request

app = Flask(__name__)

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # Insert your email handling code here
        # ...
        return 'Thank you for contacting me!'
    else:
        return 'This is the contact page. Use a POST request to submit a message.'

if __name__ == '__main__':
    app.run()