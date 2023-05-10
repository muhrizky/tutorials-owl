/** @odoo-module */

import { Component, useState, useRef } from "@odoo/owl";
import { TodoItem } from "./todo_item";
import { useAutofocus } from "../utils";

export class TodoList extends Component {
    static template = "owl_playground.TodoList";
    static components = { TodoItem };

    setup() {
        this.nextId = 0;
        this.todos = useState([]);
        useAutofocus("input")
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
