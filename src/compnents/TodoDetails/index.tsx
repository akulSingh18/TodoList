import "./style.css"
import dustbin from "../../../dustbin.png";
import emptyCheckbox from "../../../icons8-check-box-96.png";




const TodoDetails = (props :{formArr: string[], handleDelete :(arg: number) => void }) =>{

  const { formArr, handleDelete } = props;
  
  // const handleDone = (e,index:number) => {

  //   console.log("hii",index)
    
  // }


  return (
    <div className="todoDetails"> 
      <div className="todo-itemss-wrapper">
        {
          formArr?  (formArr.length? 

          formArr.map((value:String,index:number)=> {
           return (
                   <div className="todo-item-wrap">
                    
                     <div className="todoDetails-items">
                       {value}</div>
                     <button onClick={(e)=>{handleDelete(index)}}className="todoDetails-items-button">
                       <img className="dustbin" src={dustbin}/>
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