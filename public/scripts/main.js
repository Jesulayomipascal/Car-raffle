// Handle ticket purchase
document.getElementById('ticket-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (!name || !email) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate ticket purchase (replace with API call later)
    alert(`Thank you, ${name}! Your ticket has been purchased.`);

    // Clear form
    document.getElementById('ticket-form').reset();
});

// Simulate winner announcement
setTimeout(() => {
    const winnerName = 'John Doe'; // Replace with API call to fetch winner
    document.getElementById('winner-name').textContent = winnerName;
    document.getElementById('winner-announcement').style.display = 'block';
}, 10000); // Show winner after 10 seconds

function initializeCountdown(endTime) {
    console.log('Initializing countdown with endTime:', endTime); // Debug log
    const countdownElement = document.getElementById('countdown-timer');
    const endDate = new Date(endTime).getTime();

    if (isNaN(endDate)) {
        countdownElement.textContent = 'Invalid end time!';
        return;
    }

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endDate - now;

        if (timeLeft <= 0) {
            countdownElement.textContent = 'Raffle has ended!';
            clearInterval(timerInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const timerInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
}

function startCountdown(durationInSeconds) {
    const countdownElement = document.getElementById("countdown-timer");

    function updateCountdown() {
        const days = Math.floor(durationInSeconds / (60 * 60 * 24));
        const hours = Math.floor((durationInSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
        const seconds = durationInSeconds % 60;

        countdownElement.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

        if (durationInSeconds > 0) {
            durationInSeconds--;
            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.textContent = "Time's up!";
        }
    }

    updateCountdown();
}

function startCountdown(durationInSeconds) {
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    function updateCountdown() {
        const days = Math.floor(durationInSeconds / (60 * 60 * 24));
        const hours = Math.floor((durationInSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((durationInSeconds % (60 * 60)) / 60);
        const seconds = durationInSeconds % 60;

        daysElement.textContent = days.toString().padStart(2, "0");
        hoursElement.textContent = hours.toString().padStart(2, "0");
        minutesElement.textContent = minutes.toString().padStart(2, "0");
        secondsElement.textContent = seconds.toString().padStart(2, "0");

        if (durationInSeconds > 0) {
            durationInSeconds--;
            setTimeout(updateCountdown, 1000);
        } else {
            document.querySelector(".countdown-box").innerHTML = "<div class='countdown-header'>The Raffle has ended!</div>";
        }
    }

    updateCountdown();
}

// Start a 30-day countdown (in seconds)
startCountdown(30 * 24 * 60 * 60);