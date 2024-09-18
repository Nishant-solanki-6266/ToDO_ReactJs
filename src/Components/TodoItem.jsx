import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({ todo }) {  // yha par todos mese ak object todo aayega or usme bhi todo hoga jisme msg hoga

    const[isTodoEditable,setIsTodoEditable]=useState(false);                        // edit ke liye use kiya hmmne
    const[todoMsg,setTodoMsg]=useState(todo.todo); // yha todo ke andr todo msg ki value le li hai
    const {updateTodo,deleteTodo,toggleComplete}=useTodo();            // phale edit ki functinattly lane ke liye context se velue mtlb methord layege

    const editTodo=()=>{
        updateTodo(todo.id,{...todo,todo:todoMsg})  //yha update todo ko coll kiya or doo parameater le rha tha ak to (id or (todo ) mtlb msg (or data ke andar change mtlb edit krke msg)) or spread krke jisse (copmleted) or (id) sem rhegi or o todo   jayega object ke roop me
        setIsTodoEditable(false)  // ye isliye  ki todo edit ho gya to ab vapis usko (edit mt kro wali button)
    }

    const toggleCompleted=()=>{
        toggleComplete(todo.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}   /* todo to hmne props se access liya hi hai to hum check kr skte hai */
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
