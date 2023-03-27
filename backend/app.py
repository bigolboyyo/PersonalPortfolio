from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import os
import base64
import smtplib

import pdb


app = Flask(__name__)
app.debug = True
CORS(app)

load_dotenv()

DEV_EMAIL = os.getenv("DEV_EMAIL")
DEV_PASSWORD = os.getenv("DEV_PASSWORD")



app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = DEV_EMAIL
app.config['MAIL_PASSWORD'] = DEV_PASSWORD
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEFAULT_SENDER'] = "Personal Portfolio Response"

# Define the route for the contact form
@app.route('/contact', methods=['POST'])
def contact():
    try:
        data = request.json
        name = data['name']
        email = data['email']
        message = data['message']
        
        if message is None or message.strip() == "":
            raise ValueError("Message is empty or missing")
        
        encoded_message = base64.b64encode(message.encode('utf-8')).decode('utf-8')
        
         # Set up the email message
        sender = email
        recipient = 'wesgrant.dev@gmail.com'
        subject = 'New Message from Contact Page'
        body = f"Name: {name}\nEmail: {email}\nMessage: {encoded_message}"
        message = f"Subject: {subject}\n\n{body}"
        
       # Send the email using SMTP
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
            pdb.set_trace()
            smtp.login(DEV_EMAIL, DEV_PASSWORD)
            smtp.sendmail(email, DEV_EMAIL, message)

        return jsonify({'Thank you for contacting me!'})
    except Exception as e:
        print(e)
        error_msg = {'An error occurred while sending the email. Please try again later.'}
        return jsonify({'error': list(error_msg)}) # Converts set to list

if __name__ == '__main__':
    app.run()
