// Listing 2.31 Adding file extensions in the index.ts file in the src folder

import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new TodoCollection("Adam", todos);

console.clear();
// console.log(`${collection.userName}'s Todo List`);
console.log(`${collection.userName}'s Todo List ` +
    `(${collection.getItemCounts().incomplete} items to do)`);

// collection.removeComplete();
collection.getTodoItems(true).forEach(item => item.printDetails());

// output
// Adam's Todo List (3 items to do)
// 1       Buy Flowers
// 2       Get Shoes
// 3       Collect Tickets
// 4       Call Joe        (complete)