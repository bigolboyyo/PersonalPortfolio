import os
import time
from dotenv import load_dotenv
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

load_dotenv()
SENDGRID_API_KEY = os.getenv("SENDGRID_API_KEY")
EMAIL_CONFIG = os.getenv("EMAIL_CONFIG")

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")
CORS(app)

@app.route('/contact', methods=['POST', 'OPTIONS'])
@cross_origin(origin='*', headers=['Content-Type', 'Authorization'])
def contact():
    try:
        data = request.get_json()
        
        if data is None:
            return jsonify({'message': 'No JSON data received'}), 400
        
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
            time.sleep(3)
            return jsonify({'message': 'Email sent successfully.'}), 200
        except Exception as e:
            error_msg = {'An error occurred while sending the email. Please try again later.'}
            return jsonify({'message': list(error_msg)}), 500
    except Exception as e:
        error_msg = {'An error occurred during email composition. Please try again later.'}
        return jsonify({'message': list(error_msg)}), 500


if __name__ == '__main__':
    app.run()
