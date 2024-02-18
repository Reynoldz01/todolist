document.addEventListener("DOMContentLoaded", function () {
    updateTime(); // Initial call to set the time and day immediately
    setInterval(updateTime, 1000); // Update the time every 1000 milliseconds (1 second)
});

function updateTime() {
    var currentDate = new Date();

    // Get current time
    var currentTime = currentDate.toLocaleTimeString();

    // Get current day of the week
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDayOfWeek = daysOfWeek[currentDate.getDay()];

    // Display time and day with styles
    var timeDisplayElement = document.getElementById("timeDisplay");
    if (timeDisplayElement) {
        timeDisplayElement.innerHTML = "<span class='time'>" + currentTime + "</span><br><span class='day'>" + currentDayOfWeek + "</span>";
    }
}
