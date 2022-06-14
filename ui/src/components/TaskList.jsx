import TaskNav from "./TaskNav";
import Task from "./Task";
import TaskHeader from "./TaskHeader";
import { connectApi} from "../lib/functions";
import React from 'react'

class TaskList extends React.Component{
constructor(){
	super()
	this.state={
		tasks:[]
	}

}

	async componentDidMount() {
		try {
        	const response = await connectApi("/tasks");
            if(response.success){
                this.setState({
                    tasks:response.data
                });
            }
		} catch (error) {
			console.log(error);
		}
	}
	handleDelete = async (id) => {
		const response = await connectApi("/tasks/" + id, "DELETE");
		if (response.success) {
		  this.getTasks();
		}
	  };
	  getTasks = async () => {
		const response = await connectApi("/tasks");
		if (response.success) {
		  this.setState({ tasks: response.data });
		}
	  };
	render(){
	
		return (
			<>
			 <TaskNav />	
			 <TaskHeader/>
			 {
                this.state.tasks.map((task)=>(
					<Task key={task._id} task={task} handleDelete={this.handleDelete} />
                ))
            }
			
			</>
		)

	}

}

export default TaskList;
