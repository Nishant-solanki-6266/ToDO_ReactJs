import { useState } from "react";
import { useTodo } from "../context";
// ye wala o form hai input or button ka khali inputo buttton hai isme
function TodoForm() {
    const [todo,setTodo]=useState("");  // indivisul mtlb sebse alg{ ab ye jo form hai ye( add ka form hai) mtlb kuch (add krega) par hmne (add ki methord to  app.jsx me bnai thi) ha to hum ab us mehord ko layege kese(todocontext se (par todo context ko hmne usetodo me wrap kr diya mtln function bnakar export kr diya tha to vhi hum import krege or)) }
     const {addTodo}=useTodo();  // us mehord ko layege (context se useTodo se)  thik vo methord aa gyi kya krta (  data leta par deta to object me lega to ab hum uski methord or bnayege niche)

     const add=(e)=>{               
        e.preventDefault();
        if(!todo) return  // ye return sath me hai currly bracket nhi lgaye
        
        addTodo({todo,completed:false})    // 3 cheeze pass kr di hmne               // yha hmne (addtodo ko coll )kr liya or (yha se velue ja rhi hai) define me(isme direct todo pass nhi kr skte kyuki ye string me velue jayegi )
        setTodo("")
     }                                          // ydi hmne date vha de di to yha dene ki jarurat nhi dilete kr di bad me ok...(or ydi nye syntax me andar ydi key or velue ka name sam hai to hum use ak key de skte (expmle.({todo:todo,completed:false}) to hum only todo kr dege)) 54:10 time pr
    return (
        // form hai to automatic pura submit ho jayega pure form pr lga skte hai
        <form onSubmit={add} className="flex">      
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                // value ka mtlb hmne viring kr di ki jo state ki velue mtlb viring ho jayegi hmari  state ki input ke sath
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

