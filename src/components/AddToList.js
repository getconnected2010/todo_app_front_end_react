import React from "react";
import { Form, Button } from "react-bootstrap";
import {useForm} from "react-hook-form";
import {AddToListApi} from "../services/ListApi";

const AddToList = ()=>{

    const initialValues = {title:"", description:"", dueDate: "", username : "", completed : false};
    const {handleSubmit, register, reset } = useForm({defaultValues: initialValues})

    const submitTodo =async(values)=>{
        const result = await AddToListApi(values);
        reset();
        window.alert(result);
    }
    return(
        <div className="form">
            <h1>Enter task description</h1>
             <Form onSubmit={handleSubmit(submitTodo)} >
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control {...register("title")} type="text" placeholder="Enter title of task" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control {...register("description")} as="textarea" style={{ height: '100px' }} type="text" placeholder="Enter description of task" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control {...register("dueDate")} type="date" placeholder="Enter Due Date of task" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>username</Form.Label>
                    <Form.Control {...register("username")} type="text" placeholder="Enter username for task assignment" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check {...register("completed")} type="checkbox" label="Completed?" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>   
        </div>
    )
}

export default AddToList;