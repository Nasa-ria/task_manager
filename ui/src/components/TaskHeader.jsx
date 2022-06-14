import {Link} from 'react-router-dom'
function TaskHeader(){
    return(
        
        <div className="row border" >
        <div>
       
            <input type="checkbox" className="custom-control-input" id="customCheck1" style={{marginLeft:"20em" ,marginTop:'20px'}} />
          <label className="custom-control-label" htmlFor="customCheck1" >show all</label >

          <Link to={'/tasks/add'}style={{marginLeft:"10em"}}>add</Link>

               </div>
              </div>
           
    )
}

export default TaskHeader;
