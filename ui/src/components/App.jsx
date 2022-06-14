import{BrowserRouter, Routes, Route} from "react-router-dom"
import TaskList from "./TaskList";
import TaskForm from "./TaskForm"
function App() {
  return (
    <div className="row ">
    <div className="col-md-6 offset-md-3  ">
 

    <BrowserRouter>
    <Routes>
 
    <Route path="/" exact element={ <TaskList/>}/>
 
    
   
    <Route path='/tasks/:id' element={<TaskForm/>}/>
  <Route path='/tasks/add' element={<TaskForm  action={"add"}/>} />
  <Route path='/tasks/edit/:id' element={<TaskForm action={"edit"}/>}/>
  <Route path='/tasks/delete/:id' element={<TaskForm action={"delete"}/>}/>
    </Routes>

    </BrowserRouter>
    </div>
    </div>
    )
}

export default App;
