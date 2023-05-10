/** @odoo-module */

import { Component, useState } from "@odoo/owl";

export class Counter extends Component {
    static template = "owl_playground.Counter";
    static props = {
        onChange: { type: Function, optional: true }
    };

    setup() {
        this.state = useState({ value: 1 });
    }

    increment() {
        this.state.value = this.state.value + 1;
        if (this.props.onChange) {
            this.props.onChange();
        }
    }
}
