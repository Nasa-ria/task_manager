import {Link} from 'react-router-dom'
function TaskNav(){
    return (
      <>
      
      <div className='d-flex justify-contenet-between align-items-center text-center'>
         <div className='container  ' style={{marginTop:'20px' }}>
         <div className="row  ">
    <div>
       <div className="nav justify-content-center">
        <div className="input-group margin" >
                    <div className="input-group-text" id="btnGroupAddon">Yesterday</div>
                    <input type="date" className="form-control" placeholder="Date" aria-label="Input group example" aria-describedby="btnGroupAddon" />
                    <div className="input-group-text" id="btnGroupAddon"><Link to={'/'}>Tomorrow</Link></div>
                </div>
              
            </div>
        </div>
    </div>
    
    
  </div>
</div>


      </>
 
    )
     
     
    
}

export default TaskNav;
