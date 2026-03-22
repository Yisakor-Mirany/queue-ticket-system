const Queue = require('./queue');
const Ticket = require('./ticket');

const queue = new Queue();

for (let i = 1; i <= 5; i++) {
    const ticket = new Ticket(i);
    queue.enqueue(ticket);
    console.log('Generated Ticket #${ticket.number}');
}

console.log("\nProcessing Tickets...\n");

while (!queue.isEmpty()) {
    const ticket = queue.dequeue();
    console.log('Serveing Ticket #${ticket.number} generated at ${ticket.timestamp}');
}