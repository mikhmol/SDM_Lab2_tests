"use strict"

const List = require('./List');

// Length method test
test('Length method should return the number of elements in the list', () => {
  const list = new List();
  list.append('A');
  list.append('B');
  list.append('C');
  expect(list.length()).toBe(3);
});

// Append method test
test('Append method should add an element to the end of the list', () => {
  const list = new List();
  list.append('A');
  list.append('B');
  expect(list.length()).toBe(2);
  expect(list.get(1)).toBe('B');
});

// Insert method test
test('Insert method should insert an element at the specified position in the list', () => {
  const list = new List();
  list.append('A');
  list.append('C');
  list.insert('B', 1);
  expect(list.length()).toBe(3);
  expect(list.get(1)).toBe('B');
});

// Delete method test
test('Delete method should remove and return the element at the specified position in the list', () => {
  const list = new List();
  list.append('A');
  list.append('B');
  list.append('C');
  const deletedElement = list.delete(1);
  expect(list.length()).toBe(2);
  expect(deletedElement).toBe('B');
});

// DeleteAll method test
test('DeleteAll method should remove all elements from the list that match the given value', () => {
  const list = new List();
  list.append('A');
  list.append('B');
  list.append('A');
  list.append('C');
  list.deleteAll('A');
  expect(list.length()).toBe(2);
  expect(list.get(0)).toBe('B');
  expect(list.get(1)).toBe('C');
});

// Get method test
test('Get method should return the element at the specified position in the list', () => {
  const list = new List();
  list.append('A');
  list.append('B');
  list.append('C');
  expect(list.get(1)).toBe('B');
});

// Clone method test
test('Clone method should return a copy of the list', () => {
  const list = new List();
  list.append('A');
  list.append('B');
  const clone = list.clone();
  expect(clone.length()).toBe(list.length());
  expect(clone.get(0)).toBe(list.get(0));
  expect(clone.get(1)).toBe(list.get(1));
});

// Reverse method test
test('Reverse method should reverse the order of elements in the list', () => {
  const list = new List();
  list.append('A');
  list.append('B');
  list.append('C');
  list.reverse();
  expect(list.get(0)).toBe('C');
  expect(list.get(1)).toBe('B');
  expect(list.get(2)).toBe('A');
});

// FindFirst method test
test('FindFirst method should return the position of the first occurrence of the specified element in the list', () => {
  const list = new List();
  list.append('A');
  list.append('B');
  list.append('C');
  list.append('A');
  expect(list.findFirst('A')).toBe(0);
  expect(list.findFirst('B')).toBe(1);
  expect(list.findFirst('C')).toBe(2);
  expect(list.findFirst('D')).toBe(-1);
});
