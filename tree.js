import util from "util";

class Node {
	constructor(data) {
		this.data = data;
		this.children = [];
	}
}

class Tree {
	constructor(root = null) {
		this.root = root;
	}
}

let nodeOne = new Node(1);
let nodeTwo = new Node(2);
let nodeThree = new Node(3);
let nodeFour = new Node(4);

nodeOne.children.push(nodeTwo, nodeThree);
nodeTwo.children.push(nodeFour);

let myTree = new Tree(nodeOne);

console.log(util.inspect(myTree, true, 10));
