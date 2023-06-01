

document.addEventListener("DOMContentLoaded", function() {
        let circle = document.getElementById("circle");
    
        function changeColor(alertType) {

            switch(alertType) {
                case "warning":
                    circle.style.backgroundColor = "yellow";
                    break;
                case "alarm":
                    circle.style.backgroundColor = "red";
                    break;
                case "ok":
                    circle.style.backgroundColor = "green";
                    break;
                default:
                    circle.style.backgroundColor = "gray";
                    break;
            }
        }

        
  // Example alerts
  setTimeout(function() {
    changeColor("warning");
    alert("Warning!");
}, 2000);

setTimeout(function() {
    changeColor("alarm");
    alert("Alarm!");
}, 4000);

setTimeout(function() {
    changeColor("ok");
    alert("OK!");
}, 6000);
});
        
    