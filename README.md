
## Protein-Heaven
A food pick-up service project for web dev bootcamp midterm.  Customers select their items, and receive a SMS with the confirmation that the order was received.
Restaurant admins will also receive a SMS to alert that a new order is in the system. In the admin portal, orders can be set with an estimated time for pickup, which will send another message to the customer. 

## To Run
-Run npm install
-Create a new Database 
-Run Migrations
-Run Seeds
-Setup .env:

    DB_HOST=localhost
    DB_USER=labber
    DB_PASS=labber
    DB_NAME=midterm
    DB_SSL=true if heroku
    DB_PORT=5432
    
-Start Server, Npm start


## Screen-shots

### Main page
!["Screenshot of main page"](https://github.com/erik-mackie/Protein-Heaven/blob/master/media/main_page.png)
### Menu
!["Screenshot of menu page"](https://github.com/erik-mackie/Protein-Heaven/blob/master/media/menu.png)
### Admin page - orders list
!["Screenshot of admin page - orders list"](https://github.com/erik-mackie/Protein-Heaven/blob/master/media/admin_page.png)

## Dependencies

-body-parser: 1.15.2
-dotenv: 2.0.0
-ejs:2.4.1
-express: 4.13.4
-knex: 0.11.7
-knex-logger: 0.1.0
-moment: 2.22.2
-morgan: 1.7.0
-node-sass-middleware: 0.9.8
-pg: 6.0.2
-startbootstrap-shop-homepage: 4.1.1
-twilio: 3.20.


## Team Members

- Erik Mackie https://github.com/erik-mackie
- Silvia Bon https://github.com/silviabon
- Mandy Fung https://github.com/maanderz
=======

