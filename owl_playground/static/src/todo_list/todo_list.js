/** @odoo-module */

import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";

export class TodoList extends Component {
    static template = "owl_playground.TodoList";
    static components = { TodoItem };

    setup() {
        this.nextId = 0;
        this.todos = useState([]);
    }

    addTodo(ev) {
        if (ev.keyCode === 13 && ev.target.value != "") {
            this.todos.push({
                id: this.nextId++,
                description: ev.target.value,
                isCompleted: false
            });
            ev.target.value = "";
        }
    }
}
