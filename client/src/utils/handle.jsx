import axios from "axios";

const baseurl= "http://localhost:5000";

const get_all_data = (setTodo) => {
    axios.get(baseurl).then(({data})=>
    {
        console.log("data..." , data);
        setTodo(data)
    })
}

const Add_Data = (text, settext , setTodo) => {

}


export {get_all_data,Add_Data};