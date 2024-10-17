import "./style.css"
import dustbin from "../../../dustbin.png";
import emptyCheckbox from "../../../empty-check-box.png";
import checkBox from "../../../check-box.png";
import {todoObjType} from "../Form";
import {useState} from 'react'
import editIcon from "../../../edit-icon.png";
import saveIcon from "../../../save-icon.png";

const TodoDetails = (
  
  props :{formArr: todoObjType[],
          handleDelete :(arg: number) => void,
          handleDone :(arg:number) =>void,
          handleDoubleClickForPending:(arg:number) => void ,
         setFormArr:(arg:any)=>void}
) =>{

  const { formArr, handleDelete,handleDone,handleDoubleClickForPending,setFormArr } = props;

   const [editIndex,setEditIndex] = useState<number>(); 
   const [editValue,setEditValue] = useState<string>("");


  const editHandle = ( e:any,index:number ) =>{

    setEditValue(e.target.value); 
    
  }

  const saveEditHandler = (index:number) =>{

    // console.log(editValue);
    
    formArr[index].val = editValue;
    setFormArr([...formArr]);
    
    setEditIndex(-1);
    setEditValue("");
    
    
  }
  

  const handleEdit = (index:number) => { 
    setEditIndex(index);
    setEditValue(formArr[index].val);
  }
  
  
  const getStateClass = (state:string) =>{
    if(state === "done"){
      return "green";
    }else if(state === "delete"){
      return "red";
    }
    return "white";
  }

  const checkboxfunc = (state:string) =>{

    if(state === "done"){
      return checkBox;
    }
    return emptyCheckbox;
  }


  const editField = (index:number) =>{

    return (

      <div>
        <div className="edit-input-save-button">
            <input onChange={editHandle}  className="edit-input" value={editValue}  type="text"  placeholder="edit"></input> 
            <button onClick={(e)=>{saveEditHandler(index)}} disabled={editValue === ''} className="save-button">
              <img className="save-Icon-img" src={saveIcon}/>
            
            </button>
        </div>

      </div>

    )  
  }




  

  return (
    <div className="todoDetails"> 
      <div className="todo-itemss-wrapper">                                
        {
          formArr?  (formArr.length? 

          formArr.map((value:todoObjType,index:number)=> {
           return (

                <>
                  {
                    editIndex === index? editField(index) :
                  
                   <div className="todo-item-wrap">
                      <div  
                         className={`todoDetails-items ${ getStateClass(value.state) }`}>
                        <div className={`todoDetails-items-checkbox-value-cont ${ getStateClass(value.state) }`} >
                          <div   className="check-box-cont ">
                             <img
                               onDoubleClick={(e)=>{handleDoubleClickForPending(index)}} 
                               onClick={(e)=>{handleDone(index)}} 
                               className={`empty-checkBox-img ${ getStateClass(value.state) }`} 
                               src={`${checkboxfunc(value.state)}`}/>
                          </div>
                          {value?.val}
                        </div>
                          <div>
                            <img  onClick={(e)=>{handleEdit(index)}} className={`edit-icon ${ getStateClass(value.state) }`} src={editIcon}/>
                          </div>
                      </div>
                      <button onClick={(e)=>{handleDelete(index)}}className="todoDetails-items-button">
                         <img className="dustbin-img" src={dustbin}/>
                      </button>
                  </div>
                  }
                </>
             
                  )
          }) : null ): null
        }
      </div>
    </div>
  )
}

export default TodoDetails;

