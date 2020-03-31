# node-mysql-login-registration
simple login and save contact details with mysql


```js
cd contact-details
npm install
node app.js

install xampp
enable mysql with xaamp control panel
````
need to create database in mysql  database-name = users

To create table for admin login 
TABLE-NAME = login_detail 
Attributes(id(AI, primary-key), username, password)

To create table for contact form 
TABLE-NAME = user_detail
Attributes (id(AI, primary-key), username, email, contact, message)


Disclaimer:
This is not production ready. Needs bcrypt and jwt tokens for login. You can use this code to build small projects for fun. 
