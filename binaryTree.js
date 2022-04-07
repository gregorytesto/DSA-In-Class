import util from "util";

class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinaryTree {
	constructor(root = null) {
		this.root = root;
	}
}

let nodeOne = new Node(1);
let nodeTwo = new Node(2);
let nodeThree = new Node(3);
let nodeFour = new Node(4);

nodeOne.left = nodeTwo;
nodeOne.right = nodeThree;

nodeTwo.left = nodeFour;

let myTree = new BinaryTree(nodeOne);

console.log(util.inspect(myTree, true, 10));
