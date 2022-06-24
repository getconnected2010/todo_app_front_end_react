import react from 'react';
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {Form, Button, Modal } from 'react-bootstrap';
import {UpdateApi} from '../services/ListApi';

const Update =()=>{
    const navigate = useNavigate();
    const location = useLocation();
    //retreives an object passed from the list page.
    const listItemReceived = location.state;
    //modal control
    const [show, setShow] = useState(false);
    //modal message
    const[message, setMessage] = useState("");
    let initialValues;
    //if an object was passed from List.js page, the properties are passed as initial values to the update form. 
    if(listItemReceived){
        const item = listItemReceived.listItem;
        initialValues = {todoId: item.todoId, title: item.title, description: item.description, dueDate: item.dueDate, username: item.username, completed: item.completed};
    }else{
        initialValues = {title:"", description:"", dueDate: "", username : "", completed : false};
    }
    const {handleSubmit, register, reset} = useForm({defaultValues: initialValues});
    const updateTask= async(values)=>{
        const result = await UpdateApi(values);
        if(result && result.status===200){
            setMessage("Task has been successfully updated")
            setShow(true);
        }else{
            setMessage("Error processing the update.")
            setShow(true);
        }
    }
    //closes the modal and redirects to list page. it passes the updates item in state.
    const handleModalClose = ()=>{
        setShow(false);
        navigate('/list');
    }
    return(
        <div className='form'>
            <h1>Update task info</h1>
            <Form onSubmit={handleSubmit(updateTask)}>
                <Form.Group className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control {...register("title")} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control {...register("description")} as="textarea" style={{ height: '100px' }} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Due Date</Form.Label>
                        <Form.Control {...register("dueDate")} type="date" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>username</Form.Label>
                        <Form.Control {...register("username")} type="text" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Check {...register("completed")} type="checkbox" label="Completed?" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                {/* Shows the updated task in a modal */}
                <Modal show={show} onHide={()=> setShow(false)}>
                    <Modal.Header closeButton>
                    <Modal.Title>{message}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You will now be redirected to the list of tasks page.
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )
}

export default Update;