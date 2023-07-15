import "./index.css";
import React,{ useState } from "react";
import UsersListing from "./Page/Users";
import { BrowserRouter as Router, Routes, Route}  from "react-router-dom";
import NavBar from "./Page/NavBar";
import Home from "./Page/Home";


export default function App() {

  let [users, setUsers] = useState();

  return (
    <Router>
    <div className="App">
    <NavBar />
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route
            path="/Userslist"
            element={<UsersListing users={users} setUsers={setUsers} />}
          />
          <Route path="/addusers" element={<UsersListing users={users} setUsers={setUsers} />} />
          <Route path="/edit-users/:id" element={<UsersListing users={users} setUsers={setUsers} />} />
        </Routes>
      </div>
    </Router>
  );
}

