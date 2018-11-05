function clock() {
    var date = new Date();
  
   var options = {
        hour: "numeric",
        minute: "numeric", 
        second: "numeric",
        timeZoneName: "short",
        weekday: "long",
        year: 'numeric',
        month: "numeric", 
        day: "numeric"
    };




    document.querySelector(".date").innerHTML = date.toLocaleString('ru', options);   
    setTimeout("clock()", 1000);
}
clock();
function setDate() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    
    var secondHand = document.querySelector(".second-hand");
    var minHand = document.querySelector(".min-hand");
    var hourHand = document.querySelector(".hour-hand");
    
    var secondDeg = seconds * 6 + 90;
    var minDeg = minutes * 6 + 90;
    var hourDeg = (hours + minutes / 60) * 30 + 90;
    
    secondHand.style.transform = `rotate(${secondDeg}deg)`; 
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    
    setTimeout("setDate()", 1000);
}

setDate()  
