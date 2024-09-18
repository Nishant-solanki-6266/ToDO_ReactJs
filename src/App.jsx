import { useEffect, useState } from 'react'
import { Todoprovider } from './context';
import { TodoForm, TodoItem } from './Components';


function App() {
const [todos,setTodos]=useState([]);      // kyuki todos store krna pdega ui me change krne ke liye.


const addTodo=(todo)=>{                 // jese hum velue laye( jis nam se)( vese hi yha us nam se) define krna hai.dusri bt ye hai ki yha define kiya (fir yha se velue jayegi) jha bhi.tisri bt ki ye ak parameater yani todo le rha hai
 setTodos((prev)=>[{id:Date.now(),...todo},...prev])   // ydi me ye ... dot hata duga to alg se todo bnega {id:"102",{todo:"msg"}  spread ke use se{id:12-12-2024,todo:"msg",completed:false}                 // hme pta ki previous velue rhti hai to (ab hum purani or nyi dodono velue ko rkhge array me spread operator se(...),todo direct ni rkh skte kyuki uske andar property hai  to object ke room me liya ,,,or id ki jgh (hmne date de di))...ye sb array me add kr di spread operator se
}

const updateTodo=(id,todo)=>{           // bhai dyan se sun hme pta hai(todos jo hai vo ak (aarry of object) hai to (hme kon si id ko modifie krna hai uske liye map ya foreach loop lagate yad fir se... todos:[{id:"",},{id:}] ) esa kuch hai okk)
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? todo:prevTodo ))  // bhai prev me to velue aayegi( todos aa jayegi) fir(map ki help se hum pure (todos) ke andr ke( todo) le lege (jo ki object hoge or unme ak id hogi (us id ko) hum jo filhal me id milegi (input se) usse match krva lege)) dusri bt ki ydi (id mili hai to (true) todo de do jo bnega filhal(mtlb ak velue aayegi vha se nishant ki jgh solanki krke) ...me ydi (false hua to purana de do )vapis  settodos send krega ye update velue
}

const deleteTodo=(id)=>{
 setTodos((prev)=>prev.filter((todo)=>todo.id!==id))   // bhai mtlb jo todos hai (vo sb velue to aayegi hamre pass lekin  hmne filter lga diya or jo bhi todo rhege hmare pas usme condition lga di(ki jo id hmne di vo id hai kya nhi vo nhi hai jo nhi hogi (vo sb new arry bna legi) fir us aary ko hum access kr lege)aap map ka istemal kisi specific condition ke basis par naye values create karne ke liye karte hain(mtlb add function koi velue update ke liye), jabki filter ka istemal array ko filter karne ke liye hota hai jiska result ek naya array hota hai jismein sirf un elements ko shamil kiya jata hai jo di gayi condition ko satisfy karte hain(baki vleue hta di jati hai).
}

const toggleComplete=(id)=>{
  setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id===id? {...prevTodo,completed:!prevTodo.completed}:prevTodo))   /// sbse phle pura todos liya map se or id match kr li hmne fir, turnary operator ka use kiya ki ydi same hui to {hmne todo jo id,todo, completed liya usko acces kiya or overide kr diya completed ko } !prevTodo.completed iska mtlb jo phle velue thi usko true ho to false kr do ya true kr do{...prevTodo  isse hum ak nya object bna rhe hai jo pichle wali ke sbhi data ko rkhega} ak velue overight kr di(...prevdata, completed:!prevtodo.cpmplete) mtlb usi velue ko use me add kri
}
// Bhai  to Object or Json alg alg hote hai json dubble string me key bhi hoti or last me , lagane ki jaruar nhi hoti but object me key me dubble comms nhi hote hai or last me , lgana jaruri hota hai vrna synatax error aata hai
useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem("todos"))   // jo localstorange hai vo hmera string me (velue leta bhi  hai ) or (string me velue deta bhi hai) to ydi hmare pas object ya array me velue hai to strigyfy krna pdega dene ke liye or lene ke parse kr dena ydi object me chahiye to
  if(todos&& todos.length>0){
    setTodos(todos)
  }
},[])

useEffect(()=>{
localStorage.setItem("todos",JSON.stringify(todos))              // apne pas (todos arry hi hai) use string me badla
},[todos])
// to Todos me Jb bhi kuch change hoga todos me set bhi hogi velue



  return (
    // ab todoprovider likhne se kam khtm ho gya kya (nhi).provide kya krna hai tumhe (hme provide krna hai updatetodo addtodo toggletodo ( sb yha layege).ab sari velue aa gyi or( methord bhi aa gyi hai).jo todos  aaya hmare pas usme property  aai( id ,or todo, completed))
    <Todoprovider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>                       
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      {/* todo form dal diya */}
                       <TodoForm/>
                   </div>
                    <div className="flex flex-wrap gap-y-3">
                      {/* loop krege todo item ko    hmne yha map(()=>(ye wala syntax liya hai currly brecis nhi (auto return) bolte hai bhai))*/}   
                        {todos.map((todo)=>(
                          <div key ={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                          </div>
                        ))}

                           </div>
                </div>
            </div>   </Todoprovider>
  )
}

export default App
// ab component bnaye unme hme ye context (Todoprovider) ke through ye velue mil rhi hai(todos,addTodo,updateTodo,deleteTodo,toggleCompleted)  mtlb compont me ye velue mil jayegi ab aasani se
