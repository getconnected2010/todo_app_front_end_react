import axios from "axios";

let BACK_END_URL = "http://localhost:8080"

export const AddToListApi = async(values)=>{
    try {
        const result = await axios.post(BACK_END_URL+"/todo/add", values);
        if(result.status===200) return result.data;
    } catch (error) {
        if(error&&error.response&&error.response.data){
            console.log(error);
            return error.response.data
        }
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

//iterates to separate between string input and file upload. Then uploads them separate to formData.
export const uploadAvatarApi = async(values)=>{
    try {
        const formData = new FormData();
        //extracts the keys. 'username' and 'file' and puts them in an array.
        const objKeyArr = Object.keys(values);
        objKeyArr.forEach(key => {
            if(typeof(values[key]) !== 'object'){
                formData.append(key, values[key])
            }else{
                formData.append('file', values[key][0])
            }
        });

        const result = await axios.post(BACK_END_URL+ "/user/avatar", formData);
        return result
    } catch (error) {
        console.log(error);
        return 'error uploading picture';
    }
}