import React from "react";
import "./UserList.css";

const UserList = ({ users, deleteUser, editUser }) => {
    return ( <
        div className = "user-list" > { " " } {
            users.map((user) => ( <
                div key = { user.id }
                className = "user-card" >
                <
                h3 className = "user-name" > { user.name } < /h3>{" "} <
                p className = "user-info" >
                <
                span className = "label" > Email: < /span> {user.email}{" "} < /
                p > { " " } <
                p className = "user-info" >
                <
                span className = "label" > Phone: < /span> {user.phone}{" "} < /
                p > { " " } <
                button className = "delete-button"
                onClick = {
                    () => deleteUser(user.id)
                } > Delete < /button> <button className="edit-button" onClick={() => editUser(user)}>
                Edit <
                /button>  < /
                div >
            ))
        } { " " } <
        /div>
    );
};

export default UserList;