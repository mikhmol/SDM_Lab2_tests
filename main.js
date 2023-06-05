const List = require('./List');

// Create a list
const list = new List();

// Append elements to the list
list.append('A');
list.append('B');
list.append('C');
list.append('D');

// Insert an element at index 2
list.insert('X', 2);

// Delete an element at index 1
const deletedElement = list.delete(1);

// Delete all occurrences of 'C'
list.deleteAll('C');

// Get the element at index 0
const element = list.get(0);

// Create a copy of the list
const clonedList = list.clone();

// Reverse the list
list.reverse();

// Find the index of the first occurrence of 'X'
const firstIndex = list.findFirst('X');

// Find the index of the last occurrence of 'X'
const lastIndex = list.findLast('X');

// Clear the list
list.clear();

// Extend the list with elements from another list
const otherList = new List();
otherList.append('E');
otherList.append('F');
//list.extend(otherList);

// Display the results
console.log('List:', list);
console.log('Deleted Element:', deletedElement);
console.log('Element at Index 0:', element);
console.log('Cloned List:', clonedList);
console.log('First Index of "X":', firstIndex);
console.log('Last Index of "X":', lastIndex);
