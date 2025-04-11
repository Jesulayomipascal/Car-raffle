// Function to load participants from localStorage
function loadParticipants() {
    return JSON.parse(localStorage.getItem('participants')) || [];
}

// Function to select a random winner
function selectRandomWinner() {
    const participants = loadParticipants();
    if (participants.length === 0) {
        alert("No participants available for the raffle.");
        return;
    }

    const randomIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[randomIndex];

    alert(`The winner is ${winner.name} (${winner.email}, ${winner.phone}) for the raffle: ${winner.raffleName}`);
}

// Attach event listener to the "Select Winner" button
document.addEventListener('DOMContentLoaded', () => {
    const selectWinnerButton = document.getElementById('select-winner-btn');
    if (selectWinnerButton) {
        selectWinnerButton.addEventListener('click', selectRandomWinner);
    }
});
