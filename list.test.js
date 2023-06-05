const List = require('./List');

describe('List', () => {
  let myList;

  beforeEach(() => {
    myList = new List();
  });

  test('length should return 0 for an empty list', () => {
    expect(myList.length()).toBe(0);
  });

  test('append should add an element to the end of the list', () => {
    myList.append('A');
    myList.append('B');
    expect(myList.length()).toBe(2);
    expect(myList.get(0)).toBe('A');
    expect(myList.get(1)).toBe('B');
  });

  test('insert should insert an element at the specified index', () => {
    myList.append('A');
    myList.append('C');
    myList.insert('B', 1);
    expect(myList.length()).toBe(3);
    expect(myList.get(0)).toBe('A');
    expect(myList.get(1)).toBe('B');
    expect(myList.get(2)).toBe('C');
  });

  test('insert should throw an error for an invalid index', () => {
    expect(() => myList.insert('A', -1)).toThrowError('Invalid index');
    expect(() => myList.insert('A', 1)).toThrowError('Invalid index');
    expect(() => myList.insert('A', 2)).toThrowError('Invalid index');
  });

  test('delete should remove the element at the specified index', () => {
    myList.append('A');
    myList.append('B');
    myList.append('C');
    const deletedElement = myList.delete(1);
    expect(myList.length()).toBe(2);
    expect(deletedElement).toBe('B');
    expect(myList.get(0)).toBe('A');
    expect(myList.get(1)).toBe('C');
  });

  test('delete should throw an error for an invalid index', () => {
    expect(() => myList.delete(-1)).toThrowError('Invalid index');
    expect(() => myList.delete(0)).toThrowError('Invalid index');
    expect(() => myList.delete(1)).toThrowError('Invalid index');
  });

  test('deleteAll should remove all elements with the specified value', () => {
    myList.append('A');
    myList.append('B');
    myList.append('A');
    myList.deleteAll('A');
    expect(myList.length()).toBe(1);
    expect(myList.get(0)).toBe('B');
  });

  test('get should return the element at the specified index', () => {
    myList.append('A');
    myList.append('B');
    myList.append('C');
    expect(myList.get(0)).toBe('A');
    expect(myList.get(1)).toBe('B');
    expect(myList.get(2)).toBe('C');
  });

  test('get should throw an error for an invalid index', () => {
    expect(() => myList.get(-1)).toThrowError('Invalid index');
    expect(() => myList.get(0)).toThrowError('Invalid index');
    expect(() => myList.get(1)).toThrowError('Invalid index');
  });

  test('clone should create a copy of the list', () => {
    myList.append('A');
    myList.append('B');
    const newList = myList.clone();
    expect(newList.length()).toBe(2);
    expect(newList.get(0)).toBe('A');
    expect(newList.get(1)).toBe('B');
    newList.delete(0);
    expect(myList.length()).toBe(2);
    expect(newList.length()).toBe(1);
  });

  test('reverse should reverse the order of elements in the list', () => {
    myList.append('A');
    myList.append('B');
    myList.append('C');
    myList.reverse();
    expect(myList.length()).toBe(3);
    expect(myList.get(0)).toBe('C');
    expect(myList.get(1)).toBe('B');
    expect(myList.get(2)).toBe('A');
  });

  test('findFirst should return the index of the first occurrence of an element', () => {
    myList.append('A');
    myList.append('B');
    myList.append('C');
    myList.append('B');
    expect(myList.findFirst('B')).toBe(1);
    expect(myList.findFirst('D')).toBe(-1);
  });

  test('findLast should return the index of the last occurrence of an element', () => {
    myList.append('A');
    myList.append('B');
    myList.append('C');
    myList.append('B');
    expect(myList.findLast('B')).toBe(3);
    expect(myList.findLast('D')).toBe(-1);
  });

  test('clear should remove all elements from the list', () => {
    myList.append('A');
    myList.append('B');
    myList.clear();
    expect(myList.length()).toBe(0);
  });

  test('extend should add all elements from another list to the current list', () => {
    const otherList = new List();
    otherList.append('D');
    otherList.append('E');
    myList.append('A');
    myList.extend(otherList);
    expect(myList.length()).toBe(3);
    expect(myList.get(0)).toBe('A');
    expect(myList.get(1)).toBe('D');
    expect(myList.get(2)).toBe('E');
  });
});
