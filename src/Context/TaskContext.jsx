import { createContext, useState } from "react";

export const TaskContext = createContext();

export const TaskContextProvider = ({children}) =>{
    const [obj, setObj] = useState()
    const [index ,setIndex] = useState()
    function task(t,i){
        // console.log('task',t,i)
       setObj(t)
       setIndex(i)
    }
    return(
        <TaskContext.Provider value= {{task,obj,index}}>
            {children}
        </TaskContext.Provider>
    )
}