/** @odoo-module */

import { Component } from "@odoo/owl";

export class Card extends Component {
    static template = "owl_playground.Card";
    static props = {
        title: String,
        content: String,
    };
}
