import axios from "axios";

let BACK_END_URL = "http://localhost:8080"

export const AddToListApi = async(values)=>{
    try {
        const result = await axios.post(BACK_END_URL+"/todo/add", values);
        if(result.status===200) return result.data;
    } catch (error) {
        console.log(error);
        return "error adding to list";
    }
}

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
        const result = await axios.delete(BACK_END_URL + `/todo/delete/id/${Id}`)
        return result;
    } catch (error) {
        console.log(error);
    }
}

export const UpdateApi = async(values)=>{
    try {
        const result = await axios.put(BACK_END_URL+"/todo/update", values);
        return result;
    } catch (error) {
        console.log(error)
    }
}