import react, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import { ListApi, DeleteListApi } from "../services/ListApi";
import {Button, Table, Modal} from "react-bootstrap";


const List = () =>{
    const navigate = useNavigate();
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

    //gathers obj info and routes to update page.
    const updateItem = (Id)=>{
        if(list.length>0){
            const listItem = list.pop(item=>item.todoId===Id);       
            navigate('/update', {state: {listItem}})
        }
    }

  return(
    <div className=" list">
        <h1>
            Todo List 
        </h1>
        <div className="listHeader">
            <Button className="listButton" onClick={getList}>Get list</Button>
        </div>
        <Table striped bordered hover variant="dark" size="sm">
           
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Due date</th>
                    <th>Completed</th>
                    <th>Action</th>
                    <th>Update</th>
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
                        <td><Button className="deleteButton" id={item.todoId} onClick={()=>deleteItem(item.todoId)}>Delete task</Button></td>
                        <td><Button className="updateButton" id={item.todoId} onClick={()=>updateItem(item.todoId)}>Update Task</Button></td>
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