import {Link} from 'react-router-dom';
import React from 'react'

class TaskAction extends React.Component{

    render(){
        return(
            <>
         <button type="button" className="btn btn-outline-primary" style={{ fontSize:"10px",marginLeft:"45em"}}> <Link to={`/tasks/edit/${this.props.id}`}>edit</Link></button>
          <button type="button" onClick={()=>this.props.handleDelete(this.props.id)} className="btn btn-outline-danger"style={{ fontSize:"10px",marginLeft:"2em"}} >del</button>
     </>
        )
    }
}

export default TaskAction;
