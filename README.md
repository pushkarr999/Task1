# Task-1
## Features
  Following are the system design principles taken into consideration while building the authentication backend.
  - No duplication of email allowed.
  - Email validation, email should contain '@' and have valid domain extension like '.com'.
  - Password Validation -
    * Atleast 1 capital letter
    * Atleast 1 small letter
    * Atleast 1 number
    * Atleast 1 special character
    * Minimum 8 character length.
  - Cannot delete a user from database without valid password.
  - Refresh token after acces token expires in 120s.

## Usage
### Using deployed backend
The server is deployed on the link : https://task1-utopia.onrender.com/ <br>
    GET request for fetching all users - https://task1-utopia.onrender.com/api/auth/ <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/get.PNG"> <br><br>
POST request for register - https://assignment-utopia-deployment.onrender.com/api/auth/register <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/register.PNG"> <br>
Email Validation - <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/invalidEmail.PNG"> <br>
Password Strength Validation - <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/pwdValidation.PNG"> <br>
User already exists - <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/userExists.PNG"> <br><br>
    
POST request for login - https://assignment-utopia-deployment.onrender.com/api/auth/ <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/login.PNG"> <br>
Wrong Password - <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/wrongPassword.PNG"> <br>
User doesn't exists - <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/userNotFound.PNG"> <br><br>
      
POST request for refreshing acces token - https://task1-utopia.onrender.com/api/auth/refresh <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/Refresh.PNG"> <br>
Incorrect refresh token - <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/incorrectRefresh.PNG"> <br><br>
POST request for deleting user - https://task1-utopia.onrender.com/api/auth/delete <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/deleted.PNG"> <br>
Incorrect password - <br>
<img src="https://github.com/pushkarr999/Task1/blob/main/output-screenshots/deleteWrong.PNG"> <br>

### For locally running the backend
  After cloning the project. <br>
  run following commands - <br>
  npm install <br>
  npm run server <br>
  The server will run on PORT 5000
