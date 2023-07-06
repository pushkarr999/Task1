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
GET request for fetching all users - https://task1-utopia.onrender.com/api/auth/
![Screenshot of get](https://github.com/pushkarr999/Task1/blob/main/output-screenshots/get.PNG)
    POST request for register - https://assignment-utopia-deployment.onrender.com/api/auth/register
      JSON Body - {
                      "email" : "test1@123.com",
                      "fullName" : "Demo User",
                      "password" : "pwd@##123"
                  }
    
    POST request for login - https://assignment-utopia-deployment.onrender.com/api/auth/
      JSON Body - {
                      "email" : "test1@123.com",
                      "password" : "pwd@##123"
                  }
    POST request for refreshing acces token - https://task1-utopia.onrender.com/api/auth/refresh
      JSON Body - {
                      "refreshToken" : "//a valid token"
                  }
    POST request for deleting user - https://task1-utopia.onrender.com/api/auth/delete
      JSON Body - {
                      "email" : "test1@123.com",
                      "password" : "pwd@##123"
                  }

### For locally running the backend
  After cloning the project. <br>
  run following commands - <br>
  npm install <br>
  npm run server <br>
  The server will run on PORT 5000
