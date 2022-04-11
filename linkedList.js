class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}
	insert(value) {
		let newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
	}
	delete() {
		if (this.head === null) throw new Error("Error: The current linked list is empty");
		let temp = this.head;
		this.head = this.head.next;
		return temp.data;
	}
}

let list = new LinkedList();
// list.insert(1);
// list.insert(2);
// list.insert(3);
let removedValue = list.delete();
console.log(removedValue);
console.log(list);

// let nodeOne = new Node(1);
// let nodeTwo = new Node(2);
// let nodeThree = new Node(3);

// nodeOne.next = nodeTwo;
// nodeTwo.next = nodeThree;
