import {Link} from 'react-router-dom';
import React from 'react';
import { connectApi} from "../lib/functions";
import{withRouter} from "../lib/functions";

 class TaskForm  extends React.Component{
   constructor(props){
     super(props)
    this.state ={
        task:"",
      task_date:"",
      note:"",
      completed:false
     
    }
   }
  
    

  async componentDidMount() {
		try {
      const {id}=this.props.router.params
        	const response = await connectApi("/tasks/"+id);

            if(response.success){
                this.setState({
                    task:response.data
                });
            }
		
		} catch (error) {
			console.log(error);
		}
	}
  
  handleChange (event) {
		const value = event.target.value;
		this.setState({ ...this.state, [event.target.name]: value });
     
	
	};
  handleSubmit = async(event) => {
    event.preventDefault();
    var action = this.props.action 
    let response  
    switch(action){
      case'add':
      response = await connectApi("/tasks ","POST",this.state)
    if(response.success){
      alert("task is save")
    }else{
      alert(response.message)
    }
       
    break;
    case'edit':
    const{id}=this.props.router.params
    
      response = await connectApi("/tasks/"+ id,"PUT",this.state)
    if(response.success){
      alert("task is save")
    }else{
      alert(response.message)
    }
    break;	
  }
  }
  
  getFullDate = (date=null) => {
    let task_date = "";
    if(date) {
      task_date = new Date(date);
      const year = task_date.getFullYear();
      let month = task_date.getMonth();
      let day = task_date.getDate();
      if (day <= 9) {
        day = `0${day}`;
      }
      if (month <= 9) {
        month = `0${month + 1}`;
      }
      return `${year}-${month}-${day}`;
    }
  };
 

  render(){
    const {task,note,task_date}=this.state.task
    // console.log(this.state.task)
  return(
    <>   
 <div className="row border justify-content-center" style={{marginTop:"3em",height:"32em"}}>
     
<h5 className= 'text-center' style={{marginTop:"2em"}}>TASK FROM</h5>
<Link to={'/'}style={{marginLeft:"10em"}}>Task List</Link>
<form>
<div className="form-group"  style={{marginTop:"2em"}}>
<label htmlFor="task">Task</label>
<input type="text" className="form-control" id="task" name='task' value={task}  onChange={(event)=>this.handleChange(event)}/>
</div>
<br/>
<div className="form-group">
<label htmlFor="task_date">Date</label>
<input type="date"  className="form-control" id="task_date" name='task_date' value={this.getFullDate(task_date)} onChange={(event)=>this.handleChange(event)}/>
</div>
<br/>
<div className="form-group">
<label htmlFor="note">Note</label>
<textarea className="form-control" id="note"  type="text"  name= "note" style={{height:"7em"}} value={note}  onChange={(event)=>this.handleChange(event)}></textarea>
</div> 
<br/>
{(this.props.action ==='add' || this.props.action ==='edit'?( <button type="button" onClick={this.handleSubmit} className="btn btn-outline-primary"  style={{ fontSize:"10px"}}> Save</button>):"")}
</form>
</div>
    </>
)
 }
    }
    
    


export default  withRouter(TaskForm);
