import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import brain from '../images/brain.jpg';
import {getAvatarApi} from '../services/UserApi';
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useState } from "react";

const NavigationBar =()=>{
    const [avatarUrl, setAvatarUrl] = useState(null)
    const initialValues = {profile: ''};
    const {reset, register, handleSubmit} = useForm({defaultValues: initialValues});
    //makes a db call to get avatar url in AWS S3 bucket. If none, its set no null
    //a null value puts a default avatar from the project images folder.
    const getAvatar = async(values)=>{
        const result = await getAvatarApi(values);
        if(result !== null){
            setAvatarUrl(result);
        }else{
            setAvatarUrl(brain)
        }
        reset();
    }

    return(
        <div className="">
            <Navbar className="navigationBar" variant="dark" >
                <Container>
                    <Nav className="me-auto">
                        <Navbar.Brand href="/">Tasks</Navbar.Brand>
                        <Navbar.Brand href="/add">Add To List</Navbar.Brand>
                        <Navbar.Brand href="/avatar">Upload Avatar</Navbar.Brand>
                        {
                            //if the avatar url is null, it loads the form to get avatar.
                            avatarUrl===null?
                            <Form onSubmit={handleSubmit(getAvatar)}>
                                <input type='text' {...register('profile')} />
                                <Button type="submit">Get avatar</Button>
                            </Form>
                            :
                            <>
                            <Image roundedCircle src= {avatarUrl} className="img" />
                            <Button  onClick={()=>setAvatarUrl(null)}>Reset Avatar</Button>
                            </>
                        }
                      


                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar;