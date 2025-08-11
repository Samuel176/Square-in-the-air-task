const countDownDate = new Date("Aug 10, 2025 10:00:00").getTime();
// "Aug 20, 2025 10:00:00"
const time = setInterval(function(){

    let currentTime = new Date().getTime();

    let timeDifferance = countDownDate - currentTime;

    let days = Math.floor(timeDifferance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDifferance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDifferance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDifferance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";


  if(timeDifferance <= 0 ){
    document.getElementById("timer").style.display = "none";
    document.getElementById("play").style.display = "block";
    document.getElementById("form-finished").style.display = "none";
  }
}, 100)

