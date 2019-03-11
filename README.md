# rgCode

### Heroku Deployment - ([Link](https://whispering-ocean-89314.herokuapp.com/))
https://<i></i>whispering-ocean-89314.herokuapp.<i></i>com/

### Run Locally
1) Run "npm install" (with out "") in the CLI at the root dir of app

2) Run MAMP to set up servers for SQL

3) Open config.json and change the development information to match yours
    - username, password, host, port

4) Open create_db.js and change the var con = mysql.createConnection information to match yours
    - user, password, host, port

5) Do either A or B

    A) Open MYSWLworkbench or similar app
        - Copy and Paste the lines of code in schema.sql
        - Execute the two lines
    
    B) Run "npm install mysql" (with out "") in the CLI at the root dir of app
        - Run "node create_db.js" (with out "") in the CLI at the root dir of app

6) Run "node server.js" (with out "") in the CLI at the root dir of app

7) Do either A or B

    A) Click on link in CLI http://<i></i>localhost<i></i>:PORT/ (PORT will be a  number i.e 8080)

    B) Open Browser
        - type: localhost:PORT (PORT will be a number i.e 8080) into browser search bar 

### Function
Home page - search function, search receipt database for specific records

Search Receipts Button - loads search page, same as home page

Add New Receipts Button - loads add receipt page, enter information in text boxes, add receipt button adds the information to the database

All Receipts - loads all receipt page, loads all receipts from database and displays it

Greater than $50 Button - loads all receipts from database that are greater than or equal to $50.00

Less than $50 Button - loads all receipts from database that are less than or equal to $50.00

Delete Button - removes receipt from the database, found on multiple pages

### Future Development
Add login system (i.e passport)
    -Join receipt database to a unique user

Add a date picker

Add drop down selection for categories
    -Add ability to create new categories for drop down

Build repeatable code as components 

Refine Greater than and less than button's
    - Ability to determine the values you are searching for

