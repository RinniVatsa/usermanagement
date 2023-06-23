import React, { useState } from 'react';

const EditUserModal = ({ user, updateUser, closeModal }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form inputs
        if (name === '' || email === '' || phone === '') {
            alert('Please fill in all fields');
            return;
        }
        // Call the updateUser function to update the user
        updateUser({...user, name, email, phone });
        // Close the modal
        closeModal();
    };

    return ( <
        div >
        <
        form onSubmit = { handleSubmit } >
        <
        input type = "text"
        placeholder = "Name"
        value = { name }
        onChange = {
            (e) => setName(e.target.value)
        }
        /> <
        input type = "email"
        placeholder = "Email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value)
        }
        /> <
        input type = "tel"
        placeholder = "Phone"
        value = { phone }
        onChange = {
            (e) => setPhone(e.target.value)
        }
        /> <
        button type = "submit" > Save < /button> <
        button onClick = { closeModal } > Cancel < /button> < /
        form > <
        /div>
    );
};
export default EditUserModal;