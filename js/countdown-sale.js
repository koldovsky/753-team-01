(function (){
    const countDownDate = new Date("Apr 20, 2023 23:59:59").getTime();

    const updateSeconds = setInterval(function() {

        const now = Date.now();
        const distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h : " + minutes + "m : " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-timer").innerHTML = "Sale Ended";
        }
    }, 1000);
})();