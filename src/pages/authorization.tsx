import React, {useState} from 'react';
import {Button, TextField} from "@mui/material";
import {checkUser, createUser} from "../api/api";
import {Link} from "react-router-dom";
import { redirect } from "react-router-dom";


const Authorization = () => {
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')

    function onChangeName(e: React.ChangeEvent<HTMLTextAreaElement>){
        setName(e.target.value)
    }
    function onChangeUserName(e: React.ChangeEvent<HTMLTextAreaElement>){
        setUserName(e.target.value)
    }
    function onChangeUserEmail(e:React.ChangeEvent<HTMLTextAreaElement>){
        setUserEmail(e.target.value)
    }
    return (
        <div className='auth'>
            <div className='authForm'>
                <TextField id="outlined-basic" label="Name" variant="outlined" onChange={onChangeName}/>
                <TextField id="outlined-basic" label="Username" variant="outlined" onChange={onChangeUserName}/>
                <TextField id="outlined-basic" label="Email" variant="outlined" onChange={onChangeUserEmail}/>
            </div>
            <div className='authButton'>
                <Button variant="outlined" onClick={async () => {
                    const check = await checkUser(name, userName, userEmail);
                    if(check){
                        window.location.href = 'http://localhost:3000/posts';
                    }
                    else{
                        alert('Users not found!');
                    }
                    //return check? redirect('/posts'): alert('Users not found!');
                }}>Enter</Button>
                <Button variant="outlined" onClick={async () => {
                    const create = await createUser(name, userName, userEmail);
                    return create? alert('User created!'): alert('Error');
                }}>Create User</Button>
            </div>
        </div>
    );
};

export default Authorization;