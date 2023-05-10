/** @odoo-module **/

import { Component, markup, useState } from "@odoo/owl";
import { Counter } from "./counter/counter";
import { Card } from "./card/card";

export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = { Counter, Card };

    setup() {
        this.str1 = "<div>some content</div>";
        this.str2 = markup("<div>some content</div>");
        this.sum = useState({ value: 2 });
    }

    incrementSum() {
        this.sum.value++;
    }
}
