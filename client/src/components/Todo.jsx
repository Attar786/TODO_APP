import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"
const Todo = ({text, updatetodo,deletetodo}) => {

    return (
    <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
            <BiEdit className='icon' onClick={updatetodo}></BiEdit>
            <AiFillDelete className='icon' onClick= {deletetodo}></AiFillDelete>
        </div>
    </div>
    )
}

export default Todo