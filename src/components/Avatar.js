import React from "react";
import { Form, Button } from "react-bootstrap";
import {useForm} from "react-hook-form";
import {uploadAvatarApi} from "../services/ListApi";

const Avatar = ()=>{
    const initialValues = {username: '', file : ''}
    const {handleSubmit, register, reset} = useForm({defaultValues : initialValues});

    //uploads avatar
    const uploadAvatar = async(values)=>{
        const result = await uploadAvatarApi(values);
        if(result.status && result.status === 200) {
            alert("sucessfully uploaded pictures")
        }else{
            alert("Couldn't upload pictures.")
        }
        reset();
    }

    return(
        <div className="avatar">
            <Form onSubmit={handleSubmit(uploadAvatar)} className="form">
            <Form.Group className="mb-3">
                <h1>Upload Avatar</h1>
                    <Form.Label>Username</Form.Label>
                    <Form.Control {...register("username")} type="text"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Avatar picture</Form.Label>
                    <Form.Control {...register("file")} type="file"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Upload
                </Button>
            </Form>
        </div>
    )
}

export default Avatar;