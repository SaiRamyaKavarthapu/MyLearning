import React from "react";

const ListItem = (props) => {
    console.log("props", props)
    return (
        <div>
            {props.Data.map((item) => <ul>
                <li><a href={item.href}>{item.text} </a></li>
            </ul>)}
        </div>
    )
}

export default ListItem;
