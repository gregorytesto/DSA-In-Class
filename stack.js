class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class Stack {
	constructor(top = null) {
		this.top = top;
	}
	push(value) {
		const newNode = new Node(value);
		newNode.next = this.top;
		this.top = newNode;
	}
	pop() {
		if (this.top === null) return null;
		let temp = this.top;
		this.top = temp.next;
		return temp.data;
	}
	peek() {
		return this.top.data;
	}
	isEmpty() {
		return this.top === null;
	}
	size() {
		let count = 0;
		let temp = this.top;
		while (temp) {
			count++;
			temp = temp.next;
		}
		return count;
	}
	read() {
		let temp = this.top;
		while (temp) {
			console.log(temp.data);
			temp = temp.next;
		}
	}
}

let myStack = new Stack();
myStack.push("Oh my...");
myStack.push("Bears");
myStack.push("Tigers");
myStack.push("Lions");

myStack.read();
