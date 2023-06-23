import React, { useState } from "react";

const AddUserForm = ({ addUser }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form inputs
        if (name === "" || email === "" || phone === "") {
            alert("Please fill in all fields");
            return;
        }
        // Call the addUser function to add the user
        addUser({ name, email, phone });
        // Reset form inputs
        setName("");
        setEmail("");
        setPhone("");
    };

    return ( <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value) }
        />{" "} <
        input type = "email"
        placeholder = "Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        />{" "} <
        input type = "tel"
        placeholder = "Phone"
        value = { phone }
        onChange = {
            (e) => setPhone(e.target.value) }
        />{" "} <
        button type = "submit" > Add User < /button>{" "} <
        /form>
    );
};

export default AddUserForm;