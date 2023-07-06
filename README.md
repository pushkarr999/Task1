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
    The server is deployed on the link : https://assignment-utopia-deployment.onrender.com/
    GET request for fetching all users - https://assignment-utopia-deployment.onrender.com/api/auth/
    POST request for register - https://assignment-utopia-deployment.onrender.com/api/auth/register
      JSON Body - {
                      "email" : "test@123.com",
                      "fullName" : "Demo User",
                      "password" : "pwd@##123"
                  }
    POST request for login - https://assignment-utopia-deployment.onrender.com/api/auth/
      JSON Body - {
                      "email" : "test@123.com",
                      "password" : "pwd@##123"
                  }
    POST request for refreshing acces token - 
