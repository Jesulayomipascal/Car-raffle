const express = require('express');
const router = express.Router();
const RaffleController = require('../controllers/raffleController');

const raffleController = new RaffleController();

router.post('/create', raffleController.createRaffle.bind(raffleController));
router.post('/buy-ticket', raffleController.buyTicket.bind(raffleController));
router.get('/select-winner', raffleController.selectWinner.bind(raffleController));

module.exports = router;