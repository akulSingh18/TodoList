import "./style.css"
import dustbin from "../../../dustbin.png";
import emptyCheckbox from "../../../empty-check-box.png";
import checkBox from "../../../check-box.png";
import {todoObjType} from "../Form";




const TodoDetails = (props :{formArr: todoObjType[], handleDelete :(arg: number) => void,handleDone :(arg:number) =>void }) =>{

  const { formArr, handleDelete,handleDone } = props;
  
  // const handleDone = (e,index:number) => {

  //   console.log("hii",index)
    
  // }

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


  return (
    <div className="todoDetails"> 
      <div className="todo-itemss-wrapper">                                
        {
          formArr?  (formArr.length? 

          formArr.map((value:todoObjType,index:number)=> {
           return (
                   <div className="todo-item-wrap">
                    
                      <div  
                         className={`todoDetails-items ${ getStateClass(value.state) }`}>
                          <div className="check-box-cont ">
                             <img onClick={(e)=>{handleDone(index)}}  className={`empty-checkBox-img ${ getStateClass(value.state) }`} 
                               src={`${checkboxfunc(value.state)}`}/>
                          </div>
                          {value?.val}
                           {/* <div>
                             <img src={dd}/>
                          </div> */}
                      </div>
                      <button onClick={(e)=>{handleDelete(index)}}className="todoDetails-items-button">
                         <img className="dustbin-img" src={dustbin}/>
                      </button>
                    </div>
                  )
          }) : null ): null
        }
        
      </div>
    </div>
  )
}

export default TodoDetails;