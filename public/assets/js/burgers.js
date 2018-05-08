$(function(){
    $(".devourBurger").on("click", function(event) {
        var id = $(this).data("id");
        var newState = $(this).data("devour");
        
        var newDevourState = {
          devoured: (newState ? 0 : 1)
        };
    
        // Send the PUT request.
        $.ajax("/burgers/" + id, {
          type: "PUT",
          data: newDevourState
        }).then(
          function() {
            console.log("changed devour to", newDevourState);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });


      $("#addBurger").on("submit", function(event){
          event.preventDefault();
          var newBurger = {
              burger_name: $("#burgerName").val().trim()
          };

        //   send the post request
        $.ajax("/burgers",{
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Added new Burger : ", newBurger);
                // Reload  the page to get the updated list
                location.reload();
                $("#burgerName").val("");
            }
        )
      });

    });