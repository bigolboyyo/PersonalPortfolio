# Flask
from flask import Flask, request, jsonify, redirect, session
from flask_cors import CORS

# OAuth
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import Flow
from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

# Tools
from dotenv import load_dotenv
import os
import base64
import smtplib
import pdb
import json

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True, expose_headers=['Access-Control-Allow-Origin', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers'])

app.secret_key = os.getenv("SECRET_KEY")
app.debug = True

load_dotenv()

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True


# Google OAuth setup
SCOPES = ['https://www.googleapis.com/auth/gmail.send']
SERVICE_ACCOUNT_FILE = "backend/email_service.json"

# This flow would be used for a "Sign in with Google" button. User interaction.
# CLIENT_SECRET_FILE = 'client_secret.json'
# flow = Flow.from_client_secrets_file(
#     CLIENT_SECRET_FILE, scopes=SCOPES, redirect_uri='http://localhost:5000/oauth2callback')

# Define the function to revoke the token
def revoke_token(credentials):
    if credentials:
        credentials.revoke(Request())

# Define the route for the contact form
@app.route('/contact', methods=['POST', 'OPTIONS'])
def contact():
    if request.method == 'OPTIONS':
        headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin'
        }
        return ('', 204, headers)
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
        
        encoded_message = base64.b64encode(message.encode('utf-8')).decode('utf-8')
        
         # Set up the email message
        sender = email
        recipient = 'wesgrant.dev@gmail.com'
        subject = f'New Message from {name} via Contact Page'
        body = f"Name: {name}\nEmail: {email}\nMessage: {encoded_message}"
        message = f"Subject: {subject}\n\n{body}"
        
        # Get credentials from user's session or initiate flow
        credentials = None
        if 'google_auth' in session:
            credentials = Credentials.from_authorized_user_info(session['google_auth'])

       # Revoke the token if it's invalid or expired
        # if not credentials or not credentials.valid:
        #     revoke_token(credentials)
        #     flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_FILE, SCOPES)
        #     flow.redirect_uri = 'http://localhost:5000/oauth2callback'
        #     authorization_url, state = flow.authorization_url(access_type='offline', include_granted_scopes='true')
        #     session['oauth_state'] = state
            # return redirect(authorization_url)
        
      # Send the email using Gmail API
        service = build('gmail', 'v1', credentials=credentials)
        message = {'raw': base64.urlsafe_b64encode(message.encode()).decode()}
        send_message = (service.users().messages().send(userId="me", body=message).execute())
        print(F'sent message to {recipient} Message Id: {send_message["id"]}')

        response = jsonify({'Thanks for contacting me!': True})
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response
    except Exception as e:
        print(e)
        error_msg = {'An error occurred while sending the email. Please try again later.'}
        return jsonify({'error': list(error_msg)}) # Converts set to list

# @app.route('/oauth2callback')
# def oauth2callback():
#     state = session['oauth_state']
#     flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_FILE, SCOPES, state=state)
#     flow.redirect_uri = 'http://localhost:5000/oauth2callback'
#     authorization_response = request.url
#     flow.fetch_token(authorization_response=authorization_response)
#     session['google_auth'] = flow.credentials.to_authorized_user_info()
#     return redirect('/contact')

if __name__ == '__main__':
    app.run()
