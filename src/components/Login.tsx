import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "./MyUserContext";
import NameAvatar from "./NameAvatar";
import { Box, Button, Modal, TextField } from '@mui/material';
import axios from 'axios';
import { styleForm } from "./Style";

const Login = () => {

  const url = 'http://localhost:3000/api/user'
  const { user, dispatch } = useContext(UserContext)
  const [open, setOpen] = useState(false);
  const [connected, setConnected] = useState(false);
  const [entryState, setEntryState] = useState('');

  const userPassword = useRef<HTMLInputElement>(null);
  const userEmail = useRef<HTMLInputElement>(null);

  const openForm = (state: string) => { setOpen(true); setConnected(false); setEntryState(state) }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    let response: any = null
    if (entryState == 'login') {
      try {
        response = await axios.post(`${url}/login`, {
          email: userEmail.current?.value,
          password: userPassword.current?.value,
        });
        console.log('Response from server:', response.data);
        dispatch({ type: 'UPDATE', data: response.data.user })
      }
      catch (e) {
        console.error("error with connecting to server");
      }
    }
    else {
      try {
        response = await axios.post(`${url}/register`, {
          email: userEmail.current?.value,
          password: userPassword.current?.value,
        });
        dispatch({
          type: 'CREATE', data: {
            id: response.data.userId,
            email: userEmail.current?.value,
            password: userPassword.current?.value
          }
        })
        console.log('Response from server:', response.data);
      }
      catch (e) {
        console.error("error with connecting to server");
      }
    }
    if (response.data.user || response.data.user.id) {
      localStorage.setItem('userId', response.data.user.id); // שמירת ה-userId
    } else {
      alert("שגיאה בזיהוי המשתמש.");
    }
    localStorage.setItem('formData', JSON.stringify({
      email: userEmail.current?.value || "undefined",
      password: userPassword.current?.value || "undefined"
    }));
    setConnected(true);
    setOpen(false)
  }
  return (
    <>
      {!connected && (<Button onClick={() => openForm('login')}>login</Button>)}
      {!connected && <Button onClick={() => openForm('register')}>register</Button>}
      <Modal open={open} onClose={() => { setOpen(false) }}>
        <Box sx={styleForm}>
          <form onSubmit={handleSubmit}>
            <TextField label="Email" type="email" required={true} inputRef={userEmail} />
            <TextField label="Password" type="password" required={true} inputRef={userPassword} />
            <Button variant="outlined" color='primary' type="submit">send</Button>
          </form>
        </Box>
      </Modal>
      {connected && <NameAvatar url={url} />}
    </>
  );
};
export default Login;