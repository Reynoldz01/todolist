        function updateDayNightCycle() {
            const currentTime = new Date();
            const hours = currentTime.getHours();

            // Change background color based on time
            document.body.style.backgroundColor = hours >= 6 && hours < 18 ? '#87CEEB' : '#000033';

            // Show/hide sun and moon based on time
            const sun = document.getElementById('sun');
            const moon = document.getElementById('moon');

            if (hours >= 6 && hours < 18) {
                sun.style.display = 'block';
                moon.style.display = 'none';
                var parapgraph = document.createElement("p");
                paragraph.textContent = "Night";
                documment.body.appendChild(parapgraph);
            } else {
                sun.style.display = 'none';
                moon.style.display = 'block';
                var parapgraph = document.createElement("p");
                paragraph.textContent = "Night";
                documment.body.appendChild(parapgraph);
            }
        }

        // Initial update
        updateDayNightCycle();

        // Update every minute
        setInterval(updateDayNightCycle, 60000);