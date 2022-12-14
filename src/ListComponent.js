import React from "react";

const listItem = ["A", "B", "C", "D"];

function ListComponent() {
    const [updatedList, setUpdatedList] = React.useState(listItem);

    const listClicked = (e, item, index) => {
        e.preventDefault();
        console.log(item);
        setUpdatedList(item);
    };
    return (
        <div className="App">
            {updatedList.map((item, index) => (
                <ul>
                    <li onClick={(e) => listClicked(e, item, index)}>{item}</li>
                </ul>
            ))}
        </div>
    );
}
export default ListComponent;

