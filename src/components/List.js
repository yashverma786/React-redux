import {deleteTodo} from '../actions/index';
import {connect} from 'react-redux'; 
const List = (props) => {
    return (
        <div>
          <ul>
              {props.todos.map((todo,index)=>(
                  <li key={index}>{todo.message}<button onClick={()=>
                    props.dispatch(deleteTodo(todo.id))}>delete</button></li>
              ))}
              </ul>  
        </div>
    )
};
const mapStateToProps=(state)=>({
    todos:state.todos.data,
})

export default connect(mapStateToProps)(List)
