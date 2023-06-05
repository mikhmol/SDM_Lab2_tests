const List = require('./List');

test('Testing append method', () => {
  const myList = new List();
  myList.append('A');
  expect(myList.length()).toBe(1);
  expect(myList.get(0)).toBe('A');
});

test('Testing insert method', () => {
  const myList = new List();
  myList.append('A');
  myList.append('C');
  myList.insert('B', 1);
  expect(myList.length()).toBe(3);
  expect(myList.get(1)).toBe('B');
});

test('Testing delete method', () => {
  const myList = new List();
  myList.append('A');
  myList.append('B');
  myList.append('C');
  const deletedElement = myList.delete(1);
  expect(myList.length()).toBe(2);
  expect(deletedElement).toBe('B');
  expect(myList.get(1)).toBe('C');
});

test('Testing reverse method', () => {
  const myList = new List();
  myList.append('A');
  myList.append('B');
  myList.append('C');
  myList.reverse();
  expect(myList.get(0)).toBe('C');
  expect(myList.get(1)).toBe('B');
  expect(myList.get(2)).toBe('A');
});

test('Testing clear method', () => {
  const myList = new List();
  myList.append('A');
  myList.append('B');
  myList.append('C');
  myList.clear();
  expect(myList.length()).toBe(0);
});

