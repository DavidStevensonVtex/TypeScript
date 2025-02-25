// Listing 2.47 Using the persistent collection in the index.ts file in the src folder

import { TodoItem } from "./todoItem.js";
import { TodoCollection } from "./todoCollection.js";
import inquirer from "inquirer";
import { JsonTodoCollection } from "./JsonTodoCollection.js";

let todos: TodoItem[] = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true)
];

let collection: TodoCollection = new JsonTodoCollection("Adam", todos);
let showCompleted: boolean = true;

function displayToDoList(): void {
    console.log(`${collection.userName}'s Todo List ` +
        `(${collection.getItemCounts().incomplete} items to do)`);
    collection.getTodoItems(showCompleted).forEach(item => item.printDetails());
}

enum Commands {
    Add = "Add New Task",
    Complete = "Complete Task",
    Toggle = "Show/Hide Completed",
    Purge = "Remove Completed Tasks",
    Quit = "Quit"
}

async function promptAdd(): Promise<void> {
    console.clear();
    // console.log("promptAdd");
    await inquirer.prompt({ type: "input", name: "add", message: "\nEnter task: ", prefix: "" })
        .then(answers => {
            console.log("\n\npromptAdd", "response", answers["add"], answers);
            if (answers["add"] !== "") {
                collection.addTodo(answers["add"]);
            }
        });
    promptUser();
}

async function promptComplete(): Promise<void> {
    console.clear();
    await inquirer.prompt({
        type: "checkbox",
        name: "complete",
        message: "Mark Tasks Complete",
        choices: collection.getTodoItems(showCompleted).map(item => (
            { name: item.task, value: item.id, checked: item.complete }))
    }).then(answers => {
        let completedTasks = answers["complete"] as number[];
        collection.getTodoItems(true).forEach(item =>
            collection.markComplete(item.id,
                completedTasks.find(id => id === item.id) != undefined));
        promptUser();
    });
}

function promptUser(): void {
    console.clear();
    displayToDoList();
    inquirer.prompt({
        type: "list",
        name: "command",
        message: "Choose option",
        choices: Object.values(Commands)
    }).then(answers => {
        console.log("promptUser", "response", answers["command"]);
        switch (answers["command"]) {
            case Commands.Toggle:
                showCompleted = !showCompleted;
                promptUser();
                break;
            case Commands.Add:
                // console.log("Commands.Add");
                promptAdd();
                break;
            case Commands.Complete:
                if (collection.getItemCounts().incomplete > 0) {
                    promptComplete();
                } else {
                    promptUser();
                }
                break;
            case Commands.Purge:
                collection.removeComplete();
                promptUser();
                break;
            case Commands.Quit:
                process.exit();
        }
    });
}

promptUser();