class Raffle {
    constructor(ticketPrice, totalTickets) {
        this.ticketPrice = ticketPrice;
        this.totalTickets = totalTickets;
        this.ticketsPurchased = 0;
        this.participants = [];
    }

    buyTicket(participant) {
        if (this.ticketsPurchased < this.totalTickets) {
            this.participants.push(participant);
            this.ticketsPurchased++;
            return true;
        }
        return false;
    }

    selectWinner() {
        if (this.participants.length === 0) {
            return null;
        }
        const winnerIndex = Math.floor(Math.random() * this.participants.length);
        return this.participants[winnerIndex];
    }
}

module.exports = Raffle;

const mongoose = require('mongoose');

const RaffleEntrySchema = new mongoose.Schema({
    name: String,
    email: String,
    ticketNumber: Number,
    purchaseDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('RaffleEntry', RaffleEntrySchema);