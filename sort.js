// Sorting algos

// qbhism

// quick
// bubble
// heap
// insert
// selection
// merge

// tim- merge sort, insertion sort
// intro- quick/heap

// numArr: [10, 3, 10, 8, 10, 11, 7, 10, 9, 6, 5, 2, 4];

// numArr: [3, 10, 10, 8, 10, 11, 7, 10, 9, 6, 5, 2, 4]; // Swap

// numArr: [3, 10, 10, 8, 10, 11, 7, 10, 9, 6, 5, 2, 4];

// numArr: [3, 10, 8, 10, 10, 11, 7, 10, 9, 6, 5, 2, 4]; // Swap

// numArr: [3, 10, 8, 10, 10, 11, 7, 10, 9, 6, 5, 2, 4];

// numArr: [3, 10, 8, 10, 10, 11, 7, 10, 9, 6, 5, 2, 4];

// numArr: [3, 10, 8, 10, 10, 7, 11, 10, 9, 6, 5, 2, 4]; // Swap

// numArr: [3, 10, 8, 10, 10, 7, 10, 11, 9, 6, 5, 2, 4]; // Swap

// numArr: [3, 10, 8, 10, 10, 7, 10, 9, 11, 6, 5, 2, 4]; // Swap

// numArr: [3, 10, 8, 10, 10, 7, 10, 9, 6, 11, 5, 2, 4]; // Swap

// numArr: [3, 10, 8, 10, 10, 7, 10, 9, 6, 5, 11, 2, 4]; // Swap

// numArr: [3, 10, 8, 10, 10, 7, 10, 9, 6, 5, 2, 11, 4]; // Swap

// numArr: [3, 10, 8, 10, 10, 7, 10, 9, 6, 5, 2, 4, 11]; // Swap

// const numArr = [10, 3, 10, 8, 10, 11, 7, 10, 9, 6, 5, 2, 4];

// // const sortedArr = [1, 2, 3, 4, 5, 6];

// const bubbleSort = (arr) => {
// 	// Optimization, stop when sorted
// 	let wasSwapped;
// 	do {
// 		wasSwapped = false;
// 		// Go through the arr in a loop
// 		for (let j = 0; j < arr.length; j++) {
// 			// Compare current with the next and if(larger)
// 			// console.log("trigger");
// 			if (arr[j] > arr[j + 1]) {
// 				// Swap
// 				let tempVal = arr[j + 1];
// 				arr[j + 1] = arr[j];
// 				arr[j] = tempVal;
// 				wasSwapped = true;
// 			}
// 		}
// 	} while (wasSwapped);

// 	// Unoptimized bubbleSort
// 	// for (let i = 0; i < arr.length; i++) {
// 	// 	// Go through the arr in a loop
// 	// 	for (let j = 0; j < arr.length; j++) {
// 	// 		// Compare current with the next and if(larger)
// 	// 		console.log("trigger");
// 	// 		if (arr[j] > arr[j + 1]) {
// 	// 			// Swap
// 	// 			let tempVal = arr[j + 1];
// 	// 			arr[j + 1] = arr[j];
// 	// 			arr[j] = tempVal;
// 	// 		}
// 	// 	}
// 	// }
// };
// bubbleSort(numArr);
// console.log(numArr);

const mergeSortRecursive = (arr) => {
	const midIndex = Math.floor((arr.length - 1) / 2);

	if (arr.length < 2) {
		return arr;
	}

	const leftArr = arr.slice(0, midIndex + 1);
	const rightArr = arr.slice(midIndex + 1);

	const newLeftArr = mergeSortRecursive(leftArr);
	const newRightArr = mergeSortRecursive(rightArr);
	// Split Stops, Join begins
	return merge(newLeftArr, newRightArr);

	function merge(left, right) {
		let arr = [];
		while (left.length && right.length) {
			if (left[0] < right[0]) {
				arr.push(left.shift());
			} else if (right[0] <= left[0]) {
				arr.push(right.shift());
			}
		}
		return [...arr, ...left, ...right];
	}
};

let initialArr = [4, 8, 7, 2, 11, 1, 3];
let sortedResult = mergeSortRecursive(initialArr);
console.log(sortedResult);
