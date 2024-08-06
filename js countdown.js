let btnTimer = document.getElementById("setTime");



function beginCountDown(seconds){
    let remainingTime = seconds;
    const timerElement = document.getElementById("finalCount");

    function toUpdateTimer(){
        const hrs = Math.floor(remainingTime / 3600);
        const mins = Math.floor((remainingTime % 3600) / 60);
        const sec = remainingTime % 60;

        timerElement.textcontent = `${String(hrs).padStart(2,'0')} : ${String(mins).padStart(2,'0')}: ${String(sec).padStart(2, '0')}`;

        if (remainingTime > 0) {
            remainingTime --
        }

        else{
            clearInterval(countdownTimer);
            const timeup = document.createElement("h2");
            timeup.style.color = "red";
            timeup.textContent = "TIME UP"
            timerElement.appendChild(timeup);
        }
    }

toUpdateTimer();
const countdownTimer = setInterval(toUpdateTimer, 1000);


}

