import React, { useState, useEffect } from "react";
import Axios from "axios";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


const API = "https://jsonplaceholder.typicode.com/users";

function UsersListing() {
  const [users, setUsers] = useState(null);
  const [editedUser, setEditedUser] = useState(null);

  useEffect(() => {
    Axios.get(API)
      .then((response) => {
        if (response && response.status === 200) {
          setUsers(response.data);
        }
      })
      .catch((err) => console.log("ERR: FETCHING TODO FAILED", err));
  }, []);

  const handleEdit = (user) => {
    setEditedUser(user);
  };

  const handleSave = () => {
    Axios.put(`${API}/${editedUser.id}`, editedUser)
      .then((response) => {
        if (response && response.status === 200) {
          setEditedUser(null);
          const updatedUsers = users.map((user) => {
            if (user.id === editedUser.id) {
              return editedUser;
            }
            return user;
          });
          setUsers(updatedUsers);
        }
      })
      .catch((err) => console.log("ERR: UPDATING USER FAILED", err));
  };

  const handleDelete = (id) => {
    Axios.delete(`${API}/${id}`)
      .then((response) => {
        if (response && response.status === 200) {
          const updatedUsers = users.filter((user) => user.id !== id);
          setUsers(updatedUsers);
        }
      })
      .catch((err) => console.log("ERR: DELETING USER FAILED", err));
  };

  const handleAddUser = () => {
    Axios.post(API, {
      name: "Prakash L",
      phone: "9988776655",
      email: "prakashlohanathan@rediff.co.in",
      username: "micky"
    })
      .then((result) => {
        const newUser = result.data;
        setUsers([newUser, ...users]);
      })
      .catch((err) => console.log(err));
  };

  const handleChangeUsername = (e) => {
    setEditedUser({ ...editedUser, username: e.target.value });
  };

  return (
    <div>
      <div className="d-flex justify-content-center mb-3">
        <Button variant="primary" onClick={handleAddUser} className="add-user-button">
          Add New User
        </Button>
      </div>
      <Table bordered>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>
                {editedUser && editedUser.id === user.id ? (
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editedUser && editedUser.id === user.id ? (
                  <input
                    type="text"
                    value={editedUser.email}
                    onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                  />
                ) : (
                  user.email
                )}
              </td>
              <td>
                {editedUser && editedUser.id === user.id ? (
                  <input
                    type="text"
                    value={editedUser.phone}
                    onChange={(e) => setEditedUser({ ...editedUser, phone: e.target.value })}
                  />
                ) : (
                  user.phone
                )}
              </td>
              <td>
                {editedUser && editedUser.id === user.id ? (
                  <input
                    type="text"
                    value={editedUser.username}
                    onChange={handleChangeUsername}
                  />
                ) : (
                  user.username
                )}
              </td>
              <td>
                {editedUser && editedUser.id === user.id ? (
                  <div className="d-flex justify-content-center mt-3">
                    <Button variant="success" className="me-2" onClick={handleSave}>
                      Save
                    </Button>
                    <Button variant="secondary" onClick={() => setEditedUser(null)}>
                      Cancel
                    </Button>
                  </div>
                ) : (
                  <div className="d-flex justify-content-center mt-3">
                    <Button variant="primary" className="me-2" onClick={() => handleEdit(user)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(user.id)}>
                      Delete
                    </Button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UsersListing;
