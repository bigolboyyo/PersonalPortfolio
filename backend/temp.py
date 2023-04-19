# from google.auth.transport.requests import Request
# from google_auth_oauthlib.flow import InstalledAppFlow
# from google_auth_oauthlib.flow import Flow

# This flow would be used for a "Sign in with Google" button. User interaction.
# CLIENT_SECRET_FILE = 'client_secret.json'
# flow = Flow.from_client_secrets_file(
#     CLIENT_SECRET_FILE, scopes=SCOPES, redirect_uri='http://localhost:5000/oauth2callback')

        # Get credentials from user's session or initiate flow
        # credentials = None
        # if 'google_auth' in session:
        #     credentials = Credentials.from_authorized_user_info(session['google_auth'])

       # Revoke the token if it's invalid or expired
        # if not credentials or not credentials.valid:
        #     revoke_token(credentials)
        #     flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_FILE, SCOPES)
        #     flow.redirect_uri = 'http://localhost:5000/oauth2callback'
        #     authorization_url, state = flow.authorization_url(access_type='offline', include_granted_scopes='true')
        #     session['oauth_state'] = state
            # return redirect(authorization_url)
            
# @app.route('/oauth2callback')
# def oauth2callback():
#     state = session['oauth_state']
#     flow = InstalledAppFlow.from_client_secrets_file(CLIENT_SECRET_FILE, SCOPES, state=state)
#     flow.redirect_uri = 'http://localhost:5000/oauth2callback'
#     authorization_response = request.url
#     flow.fetch_token(authorization_response=authorization_response)
#     session['google_auth'] = flow.credentials.to_authorized_user_info()
#     return redirect('/contact')

# def revoke_token(credentials):
#     if credentials:
#         credentials.revoke(Request())

# Get credentials from user's session or initiate flow
        # credentials = None
        # if 'google_auth' in session:
        #     credentials = Credentials.from_authorized_user_info(session.get('google_auth'))
        # else:
        #     flow = InstalledAppFlow.from_client_secrets_file(
        #         SERVICE_ACCOUNT_FILE, scopes=SCOPES)
        #     credentials = flow.run_local_server(port=0)
        
        
        
                 # Set up the email message
        # sender = email
        # recipient = 'wesgrant.dev@gmail.com'
        # subject = f'New Message from {name} via Contact Page'
        # body = f"Name: {name}\nEmail: {email}\nMessage: {encoded_message}"
        # message = f"Subject: {subject}\n\n{body}"
             
      # Send the email using Gmail 
        # service = build('gmail', 'v1', credentials=credentials)
        # message = {'raw': base64.urlsafe_b64encode(message.encode()).decode()}
        # send_message = (service.users().messages().send(userId="me", body=message).execute())
        # print(F'sent message to {recipient} Message Id: {send_message["id"]}')
        
                # encoded_message = base64.b64encode(message.encode('utf-8')).decode('utf-8')

# SCOPES = ["https://www.googleapis.com/auth/gmail.send"] 
# SERVICE_ACCOUNT_FILE = "connection_service.json"
# os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = SERVICE_ACCOUNT_FILE

# creds = service_account.Credentials.from_service_account_file(SERVICE_ACCOUNT_FILE, scopes=SCOPES)
# creds.refresh(Request())

# def create_message(name, email_address, message_content):
#     message = EmailMessage()
    
#     message.set_content(message_content)
    
#     message['to'] = 'wesgrant.dev@gmail.com'
#     message['from'] = email_address
#     message['subject'] = f'New Message from {name} via Contact Page'
#     return message

    
# def send_message(message, creds):
#     creds.refresh(Request())
#     try:
#         service = build('gmail', 'v1', credentials=creds)
#         encoded_message = base64.urlsafe_b64encode(message.as_bytes()).decode()
#         create_message = {
#             'raw': encoded_message
#         }
        
#         send_message = service.users().messages().send(userId="me", body=create_message).execute()
#         print(F'Message Id: {send_message["id"]}')
        
#     except HttpError as error:
#         app.logger.error('Error during send_message: %s', str(error))
#         print(F'Error: {error.content}')
#         print(F'Error: {error.content}')
#         send_message = None
        
#     return send_message

# OAuth
# import google.auth
# from google.oauth2.credentials import Credentials
# from google.oauth2 import service_account
# from googleapiclient.discovery import build
# from google.auth.transport.requests import Request
# from googleapiclient.errors import HttpError
# from email.message import EmailMessage

# app.config['MAIL_SERVER'] = 'smtp.gmail.com'
# app.config['MAIL_PORT'] = 465
# app.config['MAIL_USE_TLS'] = False
# app.config['MAIL_USE_SSL'] = True

        # # Create the message
        # email_message = create_message(name, email, message)
        
        # # Send the message
        # send_message(email_message, creds)