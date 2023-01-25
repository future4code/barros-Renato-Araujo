API REST
GETGet List
http://localhost:3003/user


Example Request
Get List
curl --location --request GET 'http://localhost:3003/user'
GETGet User
http://localhost:3003/user?name=alice
PARAMS
name
alice


Example Request
Get User
curl --location --request GET 'http://localhost:3003/user?name=alice'
GETGet User by ID
http://localhost:3003/users/:id
PATH VARIABLES
id


Example Request
Get User by ID
curl --location --request GET 'http://localhost:3003/users/'
POSTCreate User
http://localhost:3003/users
BODYraw
{
            "userName" : "Renato", 
            "userEmail": "nartain@gmail.com", 
            "userType": "ADMIN",
            "userAge": 37
}


Example Request
Create User
curl --location --request POST 'http://localhost:3003/users' \
--data-raw '{
            "userName" : "Renato", 
            "userEmail": "nartain@gmail.com", 
            "userType": "ADMIN",
            "userAge": 37
}'
PATCHEdit User
http://localhost:3003/users/:id
PATH VARIABLES
id
1
BODYraw
{
    "newName": "Sofia",
    "newEmail": "harry@potter.com"
}


Example Request
Edit User
curl --location --request PATCH 'http://localhost:3003/users/1' \
--data-raw '{
    "newName": "Sofia",
    "newEmail": "harry@potter.com"
}'