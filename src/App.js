import React, { useState } from "react";
import AddUserForm from "./AddUserForm";
import UserList from "./UserList";
import EditUserModal from "./EditUserModal";

const App = () => {
    const [users, setUsers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    const addUser = (user) => {
        // Generate a unique ID for the user
        user.id = Date.now().toString();
        setUsers([...users, user]);
    };

    const deleteUser = (userId) => {
        setUsers(users.filter((user) => user.id !== userId));
    };

    const updateUser = (updatedUser) => {
        setUsers(
            users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
    };

    const openModal = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };

    const closeModal = () => {
        setSelectedUser(null);
        setShowModal(false);
    };
    const editUser = (user) => {
        setSelectedUser(user);
        setShowModal(true);
    };
    return ( <
            div >
            <
            h1 > User Management App < /h1> <AddUserForm addUser={addUser} / > { " " } <
            UserList users = { users }
            deleteUser = { deleteUser }
            editUser = { editUser }
            openModal = { openModal }
            />{" "} {
            showModal && ( <
                EditUserModal user = { selectedUser }
                updateUser = { updateUser }
                closeModal = { closeModal }
                />
            )
        } { " " } <
        /div>
);
};

export default App;