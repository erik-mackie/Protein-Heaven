"use strict";

require('dotenv').config();

const moment = require('moment');


const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const itemsRoutes =  require("./routes/items");
//const {getOrders} =     require("./routes/orders")(knex);


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));

app.use(express.static("public"));

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));
app.use("/api/orders", ordersRoutes(knex)); //CHECK IF THIS IS RIGHT
app.use("/api/items", itemsRoutes(knex));   //CHECK IF THIS IS RIGHT


const createOrderRow = function(items, userId) {
  console.log("log from order Row")
  const date = new Date();
  const getTime = date.getTime();

   return knex('orders')
      .returning('id')
      .insert({
        status: true,
        submit_date: getTime,
        estimated_time: null,
        user_id: 1 /*user*/ // change to cookie_session user equivlent
      })
      .then((orderId)=>{

        items.forEach(item => {
        knex('orders_items')
          .insert({
            order_id: orderId[0],
            item_id: item.id,
            quantity: item.quantity
          }).then()
      })
      })

};


const getUser = function () {
  return /*const userPromise =*/ knex.select('*').from('users')
    .where('users').where('id', 2 /*session cookie*/)
}


//Menu page
app.get("/menu", (req, res) => {
  getMenuItems()
  .then((menuItems) => {
    console.log("menu items: " + menuItems);
    res.render("menu", {menuItems});
  });
});


//submit order and go to confirmation page
app.post("/menu", (req, res) => {
  if(data){
  //?? how to send this to database? ?????????
  let id = req.session.order_id;
  res.render("orderlist/::id/confirmation");
  }else{
    res.status(400).send("Error: ");
  }
});


//Confirmation/status page
app.get("/confirmation/::id", (req, res) => {
  res.render("confirmation", order_id);
});


//Order list page
app.get("/orderlist", (req, res) => {
    res.render("orderlist");
 });
//make a query every second or so to update the page// set interval *******

app.post('/orderlist',  (req, res) => {
  res.render("orderlist");
});

// upon checkout, create now order and
app.post('/checkout_confirmation', (req, res) => {

  const items = [
    {id: 1, quantity: 1},
    {id: 2, quantity: 1},
    {id:3, quantity: 2}
    ];

  console.log("post request made");

//on checkout confirmation, create new order row
  const orderPromise = createOrderRow(items);
  const ordersItemsPromise = orderPromise
    .then( (order) => {
      //////////// undefined
      console.log(order, "post 2")
      res.status(201).json(order);
      //re direct to confirmation page
    })
    .catch(function(error) {
      console.error(error)
    })
})



app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});

