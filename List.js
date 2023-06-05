class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class List {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    length() {
      return this.size;
    }
  
    append(element) {
      const newNode = new Node(element);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode;
      } else {
        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    }
  
    insert(element, index) {
      if (index < 0 || index > this.size) {
        throw new Error('Invalid index');
      }
      const newNode = new Node(element);
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        this.tail.next = newNode;
      } else if (index === this.size) {
        newNode.next = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
      } else {
        let current = this.head;
        let prev = null;
        let i = 0;
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }
        prev.next = newNode;
        newNode.next = current;
      }
      this.size++;
    }
  
    delete(index) {
      if (index < 0 || index >= this.size) {
        throw new Error('Invalid index');
      }
      let deletedNode;
      if (index === 0) {
        deletedNode = this.head;
        this.head = this.head.next;
        this.tail.next = this.head;
      } else {
        let current = this.head;
        let prev = null;
        let i = 1;
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }
        deletedNode = current;
        prev.next = current.next;
        if (current === this.tail) {
          this.tail = prev;
        }
      }
      this.size--;
      return deletedNode.value;
    }
  
    deleteAll(element) {
      let current = this.head;
      let prev = null;
      while (current !== null) {
        if (current.value === element) {
          if (prev === null) {
            this.head = current.next;
            this.tail.next = this.head;
          } else {
            prev.next = current.next;
            if (current === this.tail) {
              this.tail = prev;
            }
          }
          this.size--;
        } else {
          prev = current;
        }
        current = current.next;
      }
    }
  
    get(index) {
      if (index < 0 || index >= this.size) {
        throw new Error('Invalid index');
      }
      let current = this.head;
      let i = 0;
      while (i < index) {
        current = current.next;
        i++;
      }
      return current.value;
    }
  
    clone() {
      const newList = new List();
      let current = this.head;
      while (current !== null) {
        newList.append(current.value);
        current = current.next;
      }
      return newList;
    }
  
    reverse() {
      if (this.head === null) {
        return;
      }
      let prev = null;
      let current = this.head;
      let next = null;
      this.tail = current;
      do {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      } while (current !== this.head);
      this.head = prev;
      this.tail.next = this.head;
    }
  
    findFirst(element) {
      let current = this.head;
      let i = 0;
      while (current !== null) {
        if (current.value === element) {
          return i;
        }
        current = current.next;
        i++;
      }
      return -1;
    }
  
    findLast(element) {
      let current = this.head;
      let i = 0;
      let lastIndex = -1;
      while (current !== null) {
        if (current.value === element) {
          lastIndex = i;
        }
        current = current.next;
        i++;
      }
      return lastIndex;
    }
  
    clear() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }
  
    extend(elements) {
      let current = elements.head;
      while (current !== null) {
        this.append(current.value);
        current = current.next;
      }
    }
  }
  
  module.exports = List;
  