const List = require('./List');

// Створення списку
const myList = new List();

// Додавання елементів до списку
myList.append('A');
myList.append('B');
myList.append('C');

// Виведення довжини списку
console.log('Length:', myList.length()); // Виведе: Length: 3

// Вставка елемента на певну позицію
myList.insert('D', 1);

// Виведення всіх елементів списку
for (let i = 0; i < myList.length(); i++) {
  console.log(myList.get(i));
}
// Виведе:
// A
// D
// B
// C

// Видалення елемента за певною позицією
const deletedElement = myList.delete(2);
console.log('Deleted element:', deletedElement); // Виведе: Deleted element: B

// Пошук елемента у списку
const index = myList.findFirst('C');
console.log('Index of C:', index); // Виведе: Index of C: 2

// Очищення списку
myList.clear();
console.log('Length after clearing:', myList.length()); // Виведе: Length after clearing: 0
