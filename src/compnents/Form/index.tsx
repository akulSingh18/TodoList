import "./style.css"
import { useEffect, useState } from 'react';
import TodoDetails from '../TodoDetails/index';


 export type todoObjType = {
  val : string,
  state : string,
  color : string,
}



const Form = () =>{


  // const obj = {
  //   value :"akul",
  //   state : "pending",
  //   color: " white"
  // }

  

  const [formInput,setFormInput] = useState<string>("");
  const [formArr,setFormArr] = useState<todoObjType[]>([]);

 const  handleChange = (e:any) => {
   setFormInput(e.target.value);
  }

  const handleAdd = (e:any) => { 

    let v = formInput;

    if(formInput.length > 14){
       v = formInput.substring(0, 14);
    }
    const obj = {
       val : v,
       state : "pending",
       color: "black"
     }
    
    console.log(obj);
    setFormArr([...formArr,obj]);
    setFormInput("");
  }

  const handleDelete = (index:number) =>{
    formArr[index].state = "delete";
    setFormArr([...formArr]);
  }

  const handleDone = (index:number) =>{
    formArr[index].state = "done";
    setFormArr([...formArr]);
    
  }


  
    
  return (
    <div className="form">
      <div className="form-input-and-button">
          <input onChange={handleChange}  className="form-input" value={formInput}  type="text"  placeholder="Add New Todo"></input> 
          <button onClick={(e)=>{handleAdd(e)}} disabled={formInput === ''} className="add-button">Add</button>
      </div>
      <TodoDetails 
        formArr={formArr}
        handleDelete={handleDelete}
        handleDone={handleDone}
        />
      
     
      
      
    </div>
  )
}

export default Form;