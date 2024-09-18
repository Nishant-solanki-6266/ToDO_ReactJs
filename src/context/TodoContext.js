import { createContext,useContext } from "react";

export  const TodoContext=createContext({
todos:[                             //jb bhi velue lega yhi se lega context se
    {
        id:1,
        todo:"Todo msg",
        completed:false,
    }
],
addTodo:(todo)=>{},    // isko hum main js me define krege.ye only hume methord diefine ki hai fancutinatllity nhi
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleComplete:(id)=>{}   // bech me dandi aa jati hai vo hai
});

export  const  useTodo=()=>{
    return useContext(TodoContext)       // Hmesa Context me jo kam kr rhe hai vo pass hota hai.context yani sandarbh

}

export const Todoprovider=TodoContext.Provider  // ye provider isiliye ki ye vha dena pdta tha main file me