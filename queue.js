import util from "util";

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
	}
	enqueue(value) {
		let newNode = new Node(value);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
	}
	dequeue() {
		if (!this.first) {
			throw new Error("Can't remove from empty queue");
		}
		if (this.first === this.last) {
			this.last = null;
		}
		let temp = this.first;
		this.first = this.first.next;
		return temp.data;
	}
	isEmpty() {
		return this.first === null;
	}
}

let myQueue = new Queue();
myQueue.enqueue("No");
myQueue.enqueue("Sleep");
myQueue.enqueue("Til");
myQueue.enqueue("Brooklyn");

while (!myQueue.isEmpty()) {
	let removedValue = myQueue.dequeue();
	console.log(removedValue);
}

console.log(util.inspect(myQueue, true, 10));
