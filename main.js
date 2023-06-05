const List = require('./List');

// Створення об'єкту списку
const myList = new List();

// Додавання елементів до списку
myList.append('A');
myList.append('B');
myList.append('C');
console.log('Список:', myList);

// Визначення довжини списку
console.log('Довжина списку:', myList.length());

// Вставка елементу на позицію
myList.insert('D', 1);
console.log('Список після вставки:', myList);

// Видалення елементу зі списку на позиції
const deletedElement = myList.delete(2);
console.log('Видалений елемент:', deletedElement);
console.log('Список після видалення:', myList);

// Видалення елементів зі списку за значенням
myList.deleteAll('B');
console.log('Список після видалення всіх B:', myList);

// Отримання елементу списку на позиції
const element = myList.get(0);
console.log('Елемент на позиції 0:', element);

// Копіювання списку
const clonedList = myList.clone();
console.log('Копія списку:', clonedList);

// Обернення списку
myList.reverse();
console.log('Обернутий список:', myList);

// Пошук першого елемента за значенням
const firstIndex = myList.findFirst('C');
console.log('Перший елемент C знаходиться на позиції:', firstIndex);

// Пошук останнього елемента за значенням
const lastIndex = myList.findLast('C');
console.log('Останній елемент C знаходиться на позиції:', lastIndex);

// Очищення списку
myList.clear();
console.log('Список після очищення:', myList);

// Розширення списку
const otherList = new List();
otherList.append('X');
otherList.append('Y');
myList.extend(otherList);
console.log('Список після розширення:', myList);
