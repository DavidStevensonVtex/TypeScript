// Listing 20.13 The contents of the categoryList.tsx file in the src folder

import React, { FunctionComponent } from "react";

interface Props {
    selected: string,
    categories: string[],
    selectCategory: (category: string) => void
}

export const CategoryList: FunctionComponent<Props> = (props => {
    // console.log("CatoryList: props.categories: ", props.categories, "props.selected: ", props.selected);
    return <div className="d-grid gap-2">
        {["All", ...props.categories].map(c => {
            let btnClass = props.selected === c ? "btn-primary" : "btn-secondary";
            return <button key={c}
                className={`btn btn-block ${btnClass}`}
                onClick={() => props.selectCategory(c)}>
                {c}
            </button>
        })}
    </div>
})