import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';
import UsersList from './Components/UsersList';
import { Table } from 'react-bootstrap';

function App() {

  const [listOfUsers, setListOfUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await Axios.get(`https://jsonplaceholder.typicode.com/users`);
        setListOfUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);


  return (
    <div className="App">
      

        {listOfUsers.map((list) =><Table striped bordered hover size="sm"> <UsersList list={list} key={list.id} /> </Table>)}
     
    </div>
  );
}

export default App;
