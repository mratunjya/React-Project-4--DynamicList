import React from 'react'
import './App.css';
import DynamicList from './Components/DynamicList';
import DataAdditionForm from './Components/DataAdditionForm';

function App() {
  const [usersData, setUsersData] = React.useState([]);

  const addUseData = (newData) => {
    setUsersData((prevState) => {
      return [...prevState, newData];
    });
  }
  return (
    <div>
      <DataAdditionForm onAddUser={addUseData}></DataAdditionForm>
      <DynamicList usersData={usersData}></DynamicList>
    </div>
  );
}

export default App;