$(document).ready(function() {
  $("#emailInput").keypress(function(event) {
    if(event.which == 13) {
      addSubscriber();
    }
  });
  let addSubscriber = () => {
    console.log($("#emailInput").val())
    let subscriber = $("#emailInput").val();
    let url = "https://abcd:76d973227b606169d07988df248a69d8-us15@us15.api.mailchimp.com/3.0/lists/24de07a845/members"
    let body = 
      {
          "email_address": subscriber,
          "status": "subscribed",
          "merge_fields": {
            "FNAME": "Test",
            "LNAME": "Test"
          }
    }
    $.post(url, body)
      .then(function(newTodo) {
      $("#emailInput").val("Thank you for subscribing!");
    })
    .catch(function(err) {
            $("#emailInput").val("Thank's for trying!");
           alert("Apparently Mailchimp doesn't accept API posts from Codepen, whatevs...");
           })
  }
  });