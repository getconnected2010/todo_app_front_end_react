import axios from "axios";

let BACK_END_URL = "http://localhost:8080"

export const getAvatarApi = async (values)=>{
    try {
        const result = await axios.get(BACK_END_URL+`/user/avatar/${values.profile}`);
        if(result&& result.data) return result.data
        return null;
    } catch (error) {
        return null;
    }
}