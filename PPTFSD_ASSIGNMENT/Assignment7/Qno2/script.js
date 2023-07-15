function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zeros if the values are less than 10
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    // Format the time as HH:MM:SS
    var formattedTime = hours + ":" + minutes + ":" + seconds;

    // Update the time element
    document.getElementById("time").textContent = formattedTime;
}

// Update the time every second
setInterval(updateTime, 1000);
