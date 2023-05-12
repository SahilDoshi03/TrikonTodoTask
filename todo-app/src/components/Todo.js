import '../css/Todos.css'

export default function Todo(props){
    return(
        <div className="todos">
            <div className="todo-head">
                <h1 className="todo-name">{props.name}</h1>
                <span className="todo-date">{props.date}</span>
            </div>
            <p className="todo-comment">{props.comment}</p>
        </div>
    )
}