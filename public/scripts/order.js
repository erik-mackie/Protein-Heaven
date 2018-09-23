$( document ).ready(function() {

  const order = 
      {
        id: "1",
        username: "Alice",
        phoneNum: 123456,
        status: "in process",
        subTime: "12:55 PM",
        estTime: "13:30 PM",
        items: [
          {
            chicken: 1,
            fish: 2
          }
        ],
        itemCount: 3
      }
  },




  function renderOrder(order) {
    $('order_ind').empty();
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
      let $order = createOrder(order);
      $('order_ind').append($order);
  },

  function createOrderElement(orderData){

    var $order = $("<section>").addClass("order_kitchen");

    var $header = $("<header>")

    var $userbox = $("<div>").addClass("user_box");
    var $client = $("<span>").text("Client: ");
    var $username = $("<span>").addClass("user_name").text(order.username);
    $userbox.append($client).append($username);
    
    var $phonebox = $("<div>").addClass("phone_box");
    var $phone = $("<span>").text("Phone: ");
    var $phoneNum = $("<span>").addClass("phone_number").text(order.phoneNum);
    $phonebox.append($phone).append($phoneNum);

    var $orderbox = $("<div>").addClass("order_number_box");
    var $ind_order = $("<span>").text("Order #");
    var $orderNum = $("<span>").addClass("order_number").text(order.id);
    $orderbox.append($ind_order).append($orderNum);
    
    var $container = $("<div>").addClass("container");
    var $items = $("<div>").addClass("items");
    var $par = $("<p>").text("Items: ");
    var $list = $("<ol>") //listing items through loop?
    //append items to container 

    var $actions = $("<div>").addClass("actions");
    var $deletebox = $("<div>").addClass("deletion_box");
    var $btn = $("<button>").addClass("delete").text("DELETE");
    $deletebox.append($btn);

    var $timing = $("<div>").addClass("timing");
    var $submit = $("<form>").addClass("submitEstimatedTime"); //how to include a form
    
    var $footer = $("<footer>");
    var $total = $("<span>").text("Total Items: ");
    var $itemsTotal = $("<span>").addClass("items_total").text(order.itemCount);

    return $order;
    })

  // //loads the tweets in the page
  // function loadOrder(){
  //   //need to specify order id
  //   $.ajax('order', { method: 'GET' })
  //     .then(function (theOrder) {
  //       renderOrder(theOrder);
  //   });
