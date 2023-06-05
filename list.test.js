"use strict"

const List = require('./List');

describe('List', () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  test('length returns the correct length of the list', () => {
    expect(list.length()).toBe(0);

    list.append('A');
    list.append('B');
    list.append('C');

    expect(list.length()).toBe(3);
  });

  test('append adds an element to the end of the list', () => {
    list.append('A');
    list.append('B');

    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe('A');
    expect(list.get(1)).toBe('B');
  });

  test('insert inserts an element at the specified index', () => {
    list.append('A');
    list.append('B');
    list.insert('X', 1);

    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe('A');
    expect(list.get(1)).toBe('X');
    expect(list.get(2)).toBe('B');
  });

  test('insert throws an error for an invalid index', () => {
    expect(() => list.insert('X', -1)).toThrow(Error);
    expect(() => list.insert('X', 10)).toThrow(Error);
  });

  test('delete removes the element at the specified index', () => {
    list.append('A');
    list.append('B');
    const deletedElement = list.delete(1);

    expect(list.length()).toBe(1);
    expect(deletedElement).toBe('B');
    expect(list.get(0)).toBe('A');
  });

  test('delete throws an error for an invalid index', () => {
    expect(() => list.delete(-1)).toThrow(Error);
    expect(() => list.delete(0)).toThrow(Error);
  });

  test('deleteAll removes all occurrences of an element from the list', () => {
    list.append('A');
    list.append('B');
    list.append('A');
    list.append('C');
    list.append('A');
    list.deleteAll('A');

    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe('B');
    expect(list.get(1)).toBe('C');
  });

  test('get returns the element at the specified index', () => {
    list.append('A');
    list.append('B');
    list.append('C');

    expect(list.get(1)).toBe('B');
  });

  test('get throws an error for an invalid index', () => {
    expect(() => list.get(-1)).toThrow(Error);
    expect(() => list.get(3)).toThrow(Error);
  });

  test('clone creates a new list with the same elements', () => {
    list.append('A');
    list.append('B');
    const clonedList = list.clone();

    expect(clonedList.length()).toBe(2);
    expect(clonedList.get(0)).toBe('A');
    expect(clonedList.get(1)).toBe('B');
  });

  test('reverse reverses the order of elements in the list', () => {
    list.append('A');
    list.append('B');
    list.append('C');
    list.reverse();

    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe('C');
    expect(list.get(1)).toBe('B');
    expect(list.get(2)).toBe('A');
  });

  test('findFirst returns the index of the first occurrence of an element', () => {
    list.append('A');
    list.append('B');
    list.append('A');
    list.append('C');
    const index = list.findFirst('A');

    expect(index).toBe(0);
  });

  test('findFirst returns -1 if the element is not found', () => {
    list.append('A');
    list.append('B');
    const index = list.findFirst('C');

    expect(index).toBe(-1);
  });

  test('findLast returns the index of the last occurrence of an element', () => {
    list.append('A');
    list.append('B');
    list.append('A');
    list.append('C');
    const index = list.findLast('A');

    expect(index).toBe(2);
  });

  test('findLast returns -1 if the element is not found', () => {
    list.append('A');
    list.append('B');
    const index = list.findLast('C');

    expect(index).toBe(-1);
  });

  test('clear removes all elements from the list', () => {
    list.append('A');
    list.append('B');
    list.clear();

    expect(list.length()).toBe(0);
  });

  test('extend appends elements from another list to the current list', () => {
    const otherList = new List();
    otherList.append('X');
    otherList.append('Y');

    list.append('A');
    list.extend(otherList);

    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe('A');
    expect(list.get(1)).toBe('X');
    expect(list.get(2)).toBe('Y');
  });
});
