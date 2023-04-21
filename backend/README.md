# Backend - Wesley Grant's Personal Portfolio Site

This is the backend part of my personal portfolio site, built using Flask and the SendGrid API. The backend features a contact endpoint that sends an email to wesgrant.dev@gmail.com upon form submission.

## Features

- Flask web framework for handling HTTP requests
- SendGrid API integration for email sending
- Error handling and response management
- Environment variable configuration for security and flexibility
- PythonAnywhere deployment

## Getting Started

To set up and run the backend locally, please follow these steps:

1. Navigate to the `backend` folder.
2. Create a `.env` file with your SendGrid API key and email configuration. Follow the SendGrid integration guide: https://app.sendgrid.com/guide/integrate
3. If you encounter any issues with your Flask secret key, refer to the Flask documentation: https://flask.palletsprojects.com/en/1.1.x/config/#SECRET_KEY
4. Run `pip install -r requirements.txt` to install the required dependencies.
5. Run `flask run` to start the development server.
6. The backend should now be running on your local machine, and you can send emails using the contact endpoint.

**Note**: If you are running the backend locally, make sure to update the frontend fetch to point to your localhost.

If you'd like to experiment with the email form or make any other changes, feel free to branch off and get creative.

If you encounter any issues or have suggestions, please don't hesitate to reach out or open an issue on the repository.
