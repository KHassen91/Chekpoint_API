import React from 'react'
import { Table } from 'react-bootstrap';

const UsersList = ({ list }) => {
    return (
        <div>
        
            <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>UserName</th>
            <th>Email</th>
          </tr>
        </thead>
                <tbody>
                    <tr>
                        <td>{list.id}</td>
                        <td>{list.name}</td>
                        <td>{list.username}</td>
                        <td>{list.email}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default UsersList
