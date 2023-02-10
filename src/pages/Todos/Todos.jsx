import { useRef, useState } from "react";
import { Item } from "./Item";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

export const Todos = () => {
    const inputValue = useRef()


    

    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  
  
    const handleSubmit = (evt)=>{
      evt.preventDefault();
      if(inputValue.current.value != ""){
        setTodos([...todos,{
          id: todos.at(-1)?.id+1 || 1,
          text: inputValue.current.value,
          isCompleted: false
        }]);
  
        inputValue.current.value = ""
        toast.success("Todo qo'shildi")
      }
      else{
        alert("Todoni kiriting")
      }
  
    }
  
  
    localStorage.setItem('todos', JSON.stringify(todos))
  
  return (
    <div>
      <h2 className="h2 text-center my-5">Todos</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group w-50 mx-auto shadow p-5 rounded">
          <input
            ref={inputValue}
            className="form-control"
            type={"text"}
            placeholder="Enter todos..."
          />
          <button className="btn btn-success" type="submit">
            Add
          </button>
        </div>
      </form>
      {
      todos.length ? (
        <ul className="w-50 mx-auto my-5 list-unstyled list-group">
        {
          todos.map(todo => (
            <Item key={todo.id} todos={todos} setTodos={setTodos} text={todo.text} id={todo.id} isCompleted = {todo.isCompleted}/>
          ))
        }
         </ul>
      ) : (
        <h2 className="text-center h2 mt-5">Todolar mavjud emas</h2>
      )
     }
      <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"/>
    </div>
  );
};
