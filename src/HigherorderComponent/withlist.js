import React from "react";
import ListItem from "./ListItemComponent";


const WithList = () => {

    const Data = [
        { href: "https://www.google.com", text: "Google" },
        { href: "https://www.bing.com", text: "Bing" }
    ]

    return (
        <div>
            <ListItem Data={Data} />
        </div>
    )
}

export default WithList;
