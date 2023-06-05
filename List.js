class List {
    constructor() {
      this.elements = [];
    }
  
    // Operation: Get the length of the list
    length() {
      return this.elements.length;
    }
  
    // Operation: Append an element to the end of the list
    append(element) {
      this.elements.push(element);
    }
  
    // Operation: Insert an element at a specified index
    insert(element, index) {
      if (index < 0 || index > this.length()) {
        throw new Error('Invalid index');
      }
      this.elements.splice(index, 0, element);
    }
  
    // Operation: Delete an element at a specified index
    delete(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error('Invalid index');
      }
      return this.elements.splice(index, 1)[0];
    }
  
    // Operation: Delete all occurrences of an element from the list
    deleteAll(element) {
      this.elements = this.elements.filter((el) => el !== element);
    }
  
    // Operation: Get an element at a specified index
    get(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error('Invalid index');
      }
      return this.elements[index];
    }
  
    // Operation: Create a copy of the list
    clone() {
      const newList = new List();
      newList.elements = [...this.elements];
      return newList;
    }
  
    // Operation: Reverse the list
    reverse() {
      this.elements.reverse();
    }
  
    // Operation: Find the index of the first occurrence of an element from the head of the list
    findFirst(element) {
      return this.elements.indexOf(element);
    }
  
    // Operation: Find the index of the last occurrence of an element from the tail of the list
    findLast(element) {
      return this.elements.lastIndexOf(element);
    }
  
    // Operation: Clear the list
    clear() {
      this.elements = [];
    }
  
    // Operation: Extend the list with elements from another list
    // extend(elements) {
    //     this.elements.push(...elements);
    //   }
  }
  
  module.exports = List;
  