import React from "react";
import axios from "axios";
import {useState} from "react";
import userEvent from "@testing-library/user-event";

const List = () =>{
    const [list, setList] = useState([]);

    //makes axios database call to get all the list items
    const getList =() =>{
        console.log("in getlist fn")
        axios
        .get("http://localhost:8080/todo/all")
        .then(result=> setList(result.data))
        .catch(error=> console.log(error))
    }

    //makes a database call to delete an item
    const deleteItem = (Id) =>{
        axios
        .delete(`http://localhost:8080/todo/delete/${Id}`)
        .then(result=> console.log(result.data))
        .catch(error=> console.log(error))
    }
    console.log(list);

  return(
    <div>
        This is a list of todo.
        <button onClick={getList}>Get list</button>
        <table>
            <tbody>
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due date</th>
                <th>Completed</th>
            </tr>
            {
                list.map(item=>(
                    <tr id={item.todoId}>
                        <td id={item.todoId}>{item.title}</td>
                        <td id={item.todoId}>{item.description}</td>
                        <td id={item.todoId}>{item.dueDate}</td>
                        <td id={item.todoId}>{item.completed? "Y": "N"}</td>
                        <td><button id={item.todoId} onClick={()=>deleteItem(item.todoId)}>Clear</button></td>
                    </tr>
                ))
            }
           </tbody>
        </table>
    </div>
  )
}
export default List;