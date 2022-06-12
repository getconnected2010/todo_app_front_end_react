import axios from "axios";

let BACK_END_URL = "http://localhost:8080"

export const ListApi =async()=>{
    try {
        const result = await axios.get(BACK_END_URL+"/todo/all")
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

export const DeleteListApi = async(Id)=>{
    try {
        const result = await axios.delete(BACK_END_URL + `/todo/delete/${Id}`)
        return result;
    } catch (error) {
        console.log(error)   
    }
}