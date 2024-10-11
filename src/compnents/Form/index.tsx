import "./style.css"
import { useEffect, useState } from 'react';
import TodoDetails from '../TodoDetails/index';


const Form = () =>{

  const [formInput,setFormInput] = useState<string>("");
  const [formArr,setFormArr] = useState<string[]>([]);

 const  handleChange = (e:any) => {
   setFormInput(e.target.value);
  }

  const handleClick = (e:any) => { 
    setFormArr([...formArr,formInput]);
    setFormInput("");
  }

  const handleDelete = (index:number) =>{
   
    formArr.splice(index,1);
    setFormArr([...formArr]);
    
  }
  // useEffect(()=>{
  //   // console.log(formArr , "array_value");
  // },[formArr])

  
    
  return (
    <div className="form">
      <div className="form-input-and-button">
          <input onChange={handleChange}  className="form-input" value={formInput}  type="text"  placeholder="Add New Todo"></input> 
          <button onClick={(e)=>{handleClick(e)}} disabled={formInput === ''} className="add-button">Add</button>
      </div>
      <TodoDetails 
        formArr={formArr}
        handleDelete={handleDelete}
        />
      
     
      
      
    </div>
  )
}

export default Form;