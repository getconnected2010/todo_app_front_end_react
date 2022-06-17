import React from "react";
import { Form, Button } from "react-bootstrap";


const AddToList = ()=>{

    const submitTodo =()=>{
        console.log("submitted");
    }
    return(
        <div>
            <h1 class="text-center pt-4">Enter task description</h1>
             <Form onSubmit={submitTodo} >
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title" type="text" placeholder="Enter title of task" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" style={{ height: '100px' }} type="text" placeholder="Enter description of task" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control name="dueDate" type="date" placeholder="Enter Due Date of task" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Enter username for task assignment" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Check name="completed" type="checkbox" label="Completed?" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>   
        </div>
    )
}

export default AddToList;