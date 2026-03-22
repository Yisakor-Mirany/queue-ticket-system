class Ticket {
    constructor(number) {
        this.number = number;
        this.timestamp = new Date();
    }
}

module.exports = Ticket;