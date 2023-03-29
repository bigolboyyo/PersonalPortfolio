# Tools
import os
from dotenv import load_dotenv
import pdb

# Flask
from flask import Flask, request, jsonify, redirect, session
from flask_cors import CORS

# SendGrid
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()
SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")
EMAIL_CONFIG = os.getenv("EMAIL_CONFIG")

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")
CORS(app)

app.debug = True

# Define the route for the contact form
@app.route('/contact', methods=['POST', 'OPTIONS'])
def contact():
    try:
        print(f"request: {request}")
        data = request.get_json()
      
        if data is None:
        # handle error here
            return jsonify({'error': 'No JSON data received'})
        
        name = data['name']
        email = data['email']
        message = data['message']
        
        if message is None or message.strip() == "":
            raise ValueError("Message is empty or missing")
        
        composed_email = Mail(
            from_email=EMAIL_CONFIG,
            to_emails=EMAIL_CONFIG,
            subject=f'New portfolio message from {name}',
            plain_text_content=f'{name}\n{email}\n\n{message}'
            )
        
        try:
            sg = SendGridAPIClient(SENDGRID_API_KEY)
            response = sg.send(composed_email)
            print(f'Email sent successfully: {response.status_code}')
            pdb.set_trace()    
            return jsonify({'message': 'Email sent successfully.'}), 200
        except Exception as e:
            error_msg = {'An error occurred while sending the email. Please try again later.'}
            return jsonify({'error': list(error_msg)})
    except Exception as e:
        error_msg = {'An error occurred during email composition. Please try again later.'}
        return jsonify({'error': list(error_msg)}) 

if __name__ == '__main__':
    app.run()
