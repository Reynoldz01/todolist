document.addEventListener("DOMContentLoaded", function() {
    updateProgressBar();
    updateProgressBar2();
});

function updateProgressBar() {
    var today = new Date();
    var startOfYear = new Date(today.getFullYear(), 0, 0);
    var diff = today - startOfYear;
    var oneDay = 1000 * 60 * 60 * 24;
    var dayOfYear = Math.floor(diff / oneDay);
    var percentOfYear = (dayOfYear / 365) * 100;

    var progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentOfYear + "%";

    var progressText = document.getElementById("progressText");
    progressText.textContent = dayOfYear + "/365";
}

function updateProgressBar2() {
    var today = new Date();
    var startOfYear = new Date(today.getFullYear(), 0, 0);
    var diff = today - startOfYear;
    var oneWeek = 1000 * 60 * 60 * 24 * 7;
    var weekOfYear = Math.floor(diff / oneWeek);
    var percentOfYear = (weekOfYear / 52) * 100;

    var progressBar = document.getElementById("progressBar2");
    progressBar.style.width = percentOfYear + "%";

    var progressText = document.getElementById("progressText2");
    progressText.textContent = weekOfYear + "/52";
}


