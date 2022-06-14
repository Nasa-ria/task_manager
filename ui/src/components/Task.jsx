import { Link } from "react-router-dom";
import TaskAction from "./TaskAction";
import React, { useState } from "react";
import { connectApi} from "../lib/functions";


// class Task extends  React.Component{
//  constructor(props){
//      super(props)
//  }

//  handleChange (event) {

//     if(event.target.checked){
//         this.setState({ completed:true });
//     }else{
//         this.setState({ completed:false});
//     }
// };
//     render(){
//         return(
//             <div className="row border"  >
//                     <div style={{marginTop:'20px' }}>
//                        <div className=" justify-content-center">
//                         <div className="input-group margin" >
//                         <div className="form-check">
//                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" style={{ marginLeft:"10px"}} onChange={(event)=>this.handleChange(event)} />
//                       <label className="form-check-label" htmlFor="defaultCheck1">
//                       <p><Link to={`/tasks/${this.props.task._id}`}>{this.props.task.task}  </Link></p> </label>
//                       {this.props.task.completed ? "":  <TaskAction id={this.props.task._id}/>}

//                            </div>
//                           </div>
//                           </div>
//                           </div>
//                           </div>

//                     )
//     }

// }

function Task(props) {
	const [task, setTask] = useState(props.task );

	const handleChange = async(e, id) => {
		const response = await connectApi("/tasks/" + id+"/toggle", "PUT", task)
		if(response.success) {
		  setTask(response.data)
		}
	  }
	
	
  
;
	return (
		<div className="row border">
			<div style={{ marginTop: "20px" }}>
				<div className=" justify-content-center">
					<div className="input-group margin">
						<div className="form-check">
							<input className="form-check-input"type="checkbox"value=""id="defaultCheck1"style={{ marginLeft: "10px" }} onChange={(e) =>handleChange(e,props.task._id)}/>
							<label className="form-check-label" htmlFor="defaultCheck1">
								<p><Link to={`/tasks/${props.task._id}`}>{props.task.task}</Link></p>
							</label>
							{task.completed ? "" : <TaskAction id={props.task._id} handleDelete={props.handleDelete} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Task;
