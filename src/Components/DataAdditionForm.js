import React from 'react'
import "./DataAdditionForm.css"

function DataAdditionForm(props) {
    const [name, setName] = React.useState();
    const [age, setAge] = React.useState();

    const addName = (event) => {
        setName(event.target.value);
    }

    const addAge = (event) => {
        setAge(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newData = {
            name: name,
            age: age
        }

        props.onAddUser(newData);

        setName("");
        setAge("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>User Form</h1>
            <div className="all-input">
                <input type="text" placeholder="Name" required value={name} onChange={addName}></input>
                <input type="number" placeholder="Age" required  min="0" max="200" value={age} onChange={addAge}></input>
            </div>
            <button type="submit">+ Add User</button>
        </form>
    )
}

export default DataAdditionForm
