# Queue Ticketing System

## Objective
Simulate a ticketing system using a queue.

## Approach
- Implement a Queue class
- Create Ticket objects with number and timestamp
- Enqueue tickets (customers arrive)
- Dequeue tickets (customers served)

## Features
- FIFO (First In First Out)
- Tracks ticket order
- Displays service sequence

## Time Complexity
- Enqueue: O(1)
- Dequeue: O(n)

## Space Complexity
O(n)

## Test Cases

### Normal Cases
- Enqueue and dequeue operations
- Queue size tracking
- Ticket creation

### Edge Cases
- Dequeue empty queue
- Empty queue state
- Multiple operations
