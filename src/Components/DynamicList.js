import React from 'react'
import "./DynamicList.css";

function DynamicList(props) {
    let usersData = props.usersData.map((item, index) => {
        return (
            <li key={index} className="task">{item.name} is {item.age} {parseInt(item.age) !== 1 ? "years" : "year"} old</li>
        );
    });

    usersData.reverse();

    return (
        <ul className="all-task">
            {usersData.length > 0 ? <div><h2>Added Users</h2>{usersData}</div> : <h2>No data</h2>}
        </ul>
    )
}

export default DynamicList
