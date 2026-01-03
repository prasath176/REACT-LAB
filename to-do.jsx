import { useState } from 'react'

function App() {
  const [tasks, setTask] = useState([]);
  const [text, setText] = useState("");
  const addTask=()=>{
    setTask([...tasks,{name:text,completed:false}])
    setText("")
    

  }
  const deleteTask=(index)=>{
    setTask(tasks.filter((_,i)=> i !== index));
  }

  return (
    <>
      <div>
       <h1>TO-DO List</h1>
       <input 
       value={text}
       onChange={(e)=>setText(e.target.value)}
       placeholder='enter task' />
       <button onClick={addTask}>Add</button>
       <ul>
        {
          tasks.map((Task,index)=>(
            <li key={index}>
              <input type="checkbox" checked={tasks.completed} />
              <span>{Task.name}</span>
              <button onClick={()=>deleteTask(index)}>delete</button>
            </li>
          ))}
       </ul>
      </div>
    </>
  )
}

export default App;
