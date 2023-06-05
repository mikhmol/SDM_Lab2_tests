class List {
    constructor() {
      this.items = [];
    }
  
    length() {
      return this.items.length;
    }
  
    append(element) {
      this.items.push(element);
    }
  
    insert(element, index) {
      if (index < 0 || index > this.length()) {
        throw new Error('Invalid index');
      }
  
      this.items.splice(index, 0, element);
    }
  
    delete(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error('Invalid index');
      }
  
      return this.items.splice(index, 1)[0];
    }
  
    deleteAll(element) {
      this.items = this.items.filter((item) => item !== element);
    }
  
    get(index) {
      if (index < 0 || index >= this.length()) {
        throw new Error('Invalid index');
      }
  
      return this.items[index];
    }
  
    clone() {
      const newList = new List();
      newList.items = this.items.slice();
      return newList;
    }
  
    reverse() {
      this.items.reverse();
    }
  
    findFirst(element) {
      return this.items.findIndex((item) => item === element);
    }
  
    findLast(element) {
      for (let i = this.length() - 1; i >= 0; i--) {
        if (this.items[i] === element) {
          return i;
        }
      }
      return -1;
    }
  
    clear() {
      this.items = [];
    }
  
    extend(elements) {
      this.items.push(...elements.items);
    }
  }
  
  module.exports = List;