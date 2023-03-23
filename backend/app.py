from flask import Flask, render_template, request, jsonify
from flask_mail import Mail, Message
from flask_wtf import CSRFProtect, FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Email
# from flask_limiter import Limiter
# from flask_limiter.util import get_remote_address

app = Flask(__name__)
app.debug = True

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'youremail@gmail.com'
app.config['MAIL_PASSWORD'] = 'yourpassword'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_DEFAULT_SENDER'] = 'youremail@gmail.com'
app.config['SECRET_KEY'] = 'secretkey'

# Initialize CSRF protection
# csrf = CSRFProtect(app)

# Initialize Flask-Mail
mail = Mail(app)

# Initialize Flask-Limiter
# limiter = Limiter(app, key_func=lambda: request.headers.get('X-Real-IP', request.remote_addr))


# Define the contact form
class ContactForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    email = StringField('Email', validators=[DataRequired(), Email()])
    message = TextAreaField('Message', validators=[DataRequired()])

# Define the route for the contact form
@app.route('/contact', methods=['POST'])
# @limiter.limit("1/minute")
def contact():
    form = ContactForm()

    # Check if the CSRF token is valid
    # if not form.validate_on_submit():
    #     return 'Invalid CSRF token'

    # Process the form if it is valid
    try:
        name = form.name.data
        email = form.email.data
        message = form.message.data
        msg = Message('New Message from Contact Page',
                      recipients=['wesgrant.dev@gmail.com'])
        msg.body = f"Name: {name}\nEmail: {email}\nMessage: {message}"
        mail.send(msg)
        return 'Thank you for contacting me!'
    except Exception as e:
        print(e)
        return 'An error occurred while sending the email. Please try again later.'

# Generate a new CSRF token
@app.route('/get_csrf_token', methods=['GET'])
def get_csrf_token():
    token = csrf.generate_csrf()
    return jsonify({'csrf_token': token})

# Render the React app with the CSRF token
@app.route('/', methods=['GET'])
def index():
    csrf_token = csrf.generate_csrf()
    return render_template('index.html', csrf_token=csrf_token)

if __name__ == '__main__':
    app.run()