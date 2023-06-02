

// Function to change the color of the circle based on the alert status
function changeColor(alertStatus) {
    let circle = document.getElementById("circle");
  
    if (alertStatus === "alarm") {
      circle.style.backgroundColor = "red";
    } else if (alertStatus === "warning") {
      circle.style.backgroundColor = "yellow";
    } else {
      circle.style.backgroundColor = "green"; //
    }
  }
  
  /** calling out function */
   changeColor("warning");
   changeColor("alarm"); 



 