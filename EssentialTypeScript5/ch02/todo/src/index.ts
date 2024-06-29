// Listing 2.14 Adding a statement in the index.ts file in the src folder

import { TodoItem } from "./todoItem" ;
import { TodoCollection } from "./todoCollection" ;

let todos = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true)
];

let collection = new TodoCollection("Adam", todos);

console.clear();
console.log(`${collection.userName}'s Todo List`);

let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
todoItem.printDetails();
collection.addTodo(todoItem);