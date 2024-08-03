// Listing 17.10 The contents of the header.tsx file in the src folder

import { createElement } from "./tools/jsxFactory";
import { Order } from "./data/entities";

export class Header {

    props: {
        order: Order,
        submitCallback: () => void
    }

    getContent(): HTMLElement {
        let count = this.props.order.productCount;
        return (
            <div className="p-1 bg-secondary text-white text-end">
                {count === 0 ? "(No Selection)" :
                    `${count} product(s), $` +
                    `${this.props.order.total.toFixed(2)}`}
                <button className="btn btn-sm btn-primary m-1" onclick={this.props.submitCallback}>
                    Submit Order
                </button>
            </div>
        );
    }
}