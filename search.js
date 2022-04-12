// Linear - Unsorted lists

// Input - Array of values
// Output - Index of where it is in the Array
// let students = [
// 	"Christina Loiacono",
// 	"Mukayila Alao",
// 	"David Vidals",
// 	"Deborah Campos",
// 	"Hannah Inkabi",
// 	"Hector Ilarraza",
// 	"James Russell",
// 	"Jenna Qian",
// 	"Jerry De Jesus",
// 	"Joshuel Marte",
// 	"Laiba Sajid",
// 	"Larisa Shapkina",
// 	"Lili Huang",
// 	"Milton Clark",
// 	"Name Ping Louie",
// 	"Nima Sherpa",
// 	"Oliver Chuzan",
// 	"Rae Charles",
// 	"Rob Walker",
// 	"Ronnie Garcia",
// 	"Sara D'Arce",
// 	"Stephanie Reyes",
// 	"Theodore Frazier",
// 	"Xiaoming Yang",
// ];

const linearSearch = (arr, valueToFind) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === valueToFind) {
			return i;
		}
	}
	return -1;
};

// let result = linearSearch(students, "Mukayila Alao");
// console.log(result);

// Binary - Sorted lists

let numArr = [3, 4, 5, 7, 10, 16, 20, 45, 100, 350]; // Length: 10, MidIndex: 4

// let numArr2 = [3, 7, 10, 100, 350]; // Length: 5, MidIndex: 2

// let numArr3 = [3, 7]; // Length: 2, MidIndex: 0

// CurrentArr: []

const binarySearch = (arr, valueToFind) => {
	let startIndex = 0;
	let endIndex = arr.length - 1;
	// console.log(startIndex, endIndex);

	while (startIndex <= endIndex) {
		// Find the middle index, Choose smaller if there are two // 0
		let midIndex = Math.floor((startIndex + endIndex) / 2);
		// Is the value at the middle equal to valueToFind
		if (valueToFind === arr[midIndex]) {
			// return index
			return midIndex;
			// Is it greater than?
		} else if (valueToFind > arr[midIndex]) {
			//grab the right
			startIndex = midIndex + 1;
			// Is it less than?
		} else if (valueToFind < arr[midIndex]) {
			// grab the left
			endIndex = midIndex - 1;
		}
	}
	// Array is empty, return -1
	return -1;
};

let result = binarySearch(numArr, 20);
console.log(result);
// Jump - Large Size Datasets

// Exponential - Very Large Size Datasets
