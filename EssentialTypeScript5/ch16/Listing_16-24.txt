// Listing 16.24 The contents of the htmlDisplay.tsx file in the src folder

import { Product, Order } from "./data/entities" ;

export class HtmlDisplay { 
    props: {
        products: Product[],
        order: Order
    }

    getContent() : HTMLElement {
        return <h3 className="bg-secondary textcenter text-white p-2">
            {this.getElementText() }
        </h3>
    }

    getElementText() {
        return `${this.props.products.length} Products, ` +
            `Order total: $${ this.props.order.total }` ;
    }
}