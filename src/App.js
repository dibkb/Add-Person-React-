import React,{ useState } from 'react';
import AddUser from './components/Users/AddUser.component';
import UserList from './components/Users/UserList';

function App() {
  const [userList,setUserList] = useState([]);
  const addUserHandler = (uName,uAge) =>{
    setUserList((prevState) =>{
      return [...prevState, {name : uName, age : uAge, id : Math.random().toString()}]
    })
  }

  return (
    <div>
      <AddUser addUser = {addUserHandler}></AddUser>
      <UserList users ={userList}/>
    </div>
  );
}

export default App;
