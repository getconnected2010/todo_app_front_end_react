import React from "react";
import {useState} from "react";
import { ListApi, DeleteListApi } from "../services/ListApi";
import {Button, Table, Modal} from "react-bootstrap";


const List = () =>{
    const [list, setList] = useState([]);
    const [deletedItem, setDeletedItem] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //makes axios database call to get all the list items
    const getList =async() =>{
        const result = await ListApi();
        if(Array.isArray(result))setList(result);
    }

    //makes a database call to delete an item
    const deleteItem = async(Id) =>{
        const result = await DeleteListApi(Id);
        if(result.status===200){
            handleShow();
            setDeletedItem(result.data);
            const newList = list.filter(item=> item.todoId !== result.data.todoId);
            setList(newList);
        }
    }

  return(
    <div>
        <div>
        <h1 class="text-center text-uppercase font-weight-bold text-primary pt-4">
            Todo List 
        </h1>
            <Button className="m-2 px-4" variant="success" size="lg" onClick={getList}>Get list</Button>
        </div>
        <Table striped bordered hover variant="dark" size="sm">
           
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Due date</th>
                    <th>Completed</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
                list.map(item=>(
                    <tr id={item.todoId}>
                        <td id={item.todoId}>{item.title}</td>
                        <td id={item.todoId}>{item.description}</td>
                        <td id={item.todoId}>{item.dueDate}</td>
                        <td id={item.todoId}>{item.completed? "Y": "N"}</td>
                        <td><Button id={item.todoId} onClick={()=>deleteItem(item.todoId)}>Delete task</Button></td>
                    </tr>
                ))
            }
           </tbody>
        </Table>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Deleted Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table variant="danger">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Due date</th>
                                <th>Completed</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >{deletedItem.title}</td>
                                <td >{deletedItem.description}</td>
                                <td >{deletedItem.dueDate}</td>
                                <td >{deletedItem.completed? "Y": "N"}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
    </div>
  )
}
export default List;