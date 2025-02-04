import { Box, Button, Modal, TextField } from "@mui/material";
import { FormEvent, useContext, useRef, useState } from "react";
import { UserContext } from "./MyUserContext";
import axios from "axios";
import { Action } from "../Types";
import { styleForm } from "./Style";

const Update = ({ url }: { url: string }) => {

    const fNameRef = useRef<HTMLInputElement>(null)
    const lNameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)

    const { user, dispatch } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const Jsondata = localStorage.getItem("formData");
    let data = { email: "", password: "" };
    if (Jsondata) {
        data = JSON.parse(Jsondata);
    } 


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(user);

        const action: Action = {
            type: 'UPDATE',
            data: {
                id: localStorage.getItem('userId')?.toString(),
                firstName: fNameRef.current?.value || user.firstName,
                lastName: lNameRef.current?.value || user.lastName,
                email: emailRef.current?.value || data.email,
                password: passwordRef.current?.value || data.password,
                phone: phoneRef.current?.value || user.phone
            }
        };
        dispatch(action);
        console.log(user);
        console.log(data)
        console.log(action.data)

        try {
            const response = await axios.put(`${url}`, action.data, { headers: { 'user-id': action.data.id } }
            )
            //(`${url}`, action.data, {
            //   headers: {
            //      "Content-Type": "application/json",
            //      "Authorization": `Bearer ${data}` // 🔥 הוספת הטוקן
            //   }
            //});
        }
        catch (e) {
            if (axios.isAxiosError(e)) {
                if (e.response?.status === 404)
                    alert(`${e.response?.data.message}`)
            }
        }
        setOpen(false);
    }

    return (

        <>
            <Button onClick={() => { setOpen(true) }}>update</Button>
            <Modal open={open} onClose={() => { setOpen(false) }}>
                <Box sx={styleForm}>
                    <form onSubmit={handleSubmit}>
                        <TextField label="firstName" inputRef={fNameRef} />
                        <TextField label="lastName" inputRef={lNameRef} />
                        <TextField type="email" label="email" value={data.email} inputRef={emailRef} />
                        <TextField type="password" label="password" value={user.password} inputRef={passwordRef} />
                        <TextField label="phone" inputRef={phoneRef} />
                        <Button type="submit">send</Button>
                    </form>
                </Box>
            </Modal >
        </>
    )
}
export default Update;