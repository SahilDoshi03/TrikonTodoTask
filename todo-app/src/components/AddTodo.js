import "../css/AddTodo.css"
import { useId, useState } from "react"
import axios from "axios"

export default function AddTodo(props){

    const todoNameId = useId();
    const todoCommentId = useId();
    const [todoName, settodoName] = useState('');
    const [todoComment, settodoComment] = useState('');

    const handleSubmit = async (e) => {

        // e.preventDefault()
        axios.post('http://localhost:3001/addtodoCard', {
            name: todoName,
            comment: todoComment
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          props.close()
          window.location.reload(true)
    }

    return(
        <>
            <div className="modal-wrapper" onClick={props.close}></div>
            <form className="add-todo modal-container">
                <label htmlFor={todoNameId}>Todo Name</label>
                <input 
                    id={todoNameId} 
                    name="myInput"
                    value={todoName}
                    onChange={e => settodoName(e.target.value)}  
                />
                <label htmlFor={todoCommentId}>Comment</label>
                <textarea 
                    id={todoCommentId} 
                    name="postContent" 
                    rows={4} 
                    cols={40}
                    value={todoComment}
                    onChange={e => settodoComment(e.target.value)}  

                />
                <div className="modal-btns">
                    <button 
                        className="todo-submit" 
                        onClick={handleSubmit}
                        disabled={
                            todoComment.length === 0 ||
                            todoName.length === 0
                          }
                    >Submit</button>
                    <button className="close-tbn" onClick={props.close}>Close</button>
                </div>
            </form>
        </>
    )
}