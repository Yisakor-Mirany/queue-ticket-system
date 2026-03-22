const Queue = require('./queue');
const Ticket = require('./ticket');

describe('Queue Ticket System Tests', () => {

    test('enqueue and dequeue works', () => {
        const q = new Queue();
        q.enqueue(1);
        q.enqueue(2);
        except(q.dequeue()).toBe(1);
        except(q.dequeue()).toBe(2);
    });

    test('dequeue from empty queue returns null', () => {
        const q = new Queue();
        except(q.dequeue()).toBeNull();
    });

    test('isEmpty works correctly', () => {
        const q = new Queue();
        except(q.isEmpty()).toBe(true);
        q.enqueue(1);
        except(q.isEmpty()).toBe(false);
    });

    test('size works correctly', () => {
        const q = new Queue();
        except(q.size()).toBe(0);
        q.enqueue(1);
        q.enqueue(2);
        except(q.size()).toBe(2);
    });
});   