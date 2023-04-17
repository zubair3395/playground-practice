import React, {useState, useTransition, useId} from 'react';

const  TransitionHook= ()=> {
	const [Pending, startTransition1] = useTransition()
	const [input, setInput] = useState("")
	const [list, setList] = useState([])
	const [password, setPassword] = useState("");
	const [list1, setList1] = useState([]);
    const [isPending, startTransition2] = useTransition();
	console.log("isPending: ", isPending)
	const id1= useId();
	const id2= useId();
    
	const List_Size = 2000;
   const handlePassword= (e)=>{
	setPassword(e.target.value);
	const tempArr= [];
	startTransition2(()=>{
		for(let i=0; i<1000; i++){
			tempArr.push(e.target.value)
		}
	})
	
	setList1(tempArr);
   }
	const  handleChange= (e)=> {
		setInput(e.target.value)
		startTransition1(()=>{ 
			const l =[]
			for(let i= 0; i< List_Size; i++){
				l.push(e.target.value)
			}
			setList(l)})
	}
	return(
		<>
		<p>This is id 1  {id1}</p>
		<p>This is id 2  {id2}</p>
		<div style={{textAlign: "center"}}>
			<label htmlFor={id1}>Email: </label>
			<input id={id1} type="text" value={input} onChange={handleChange}/>
			{Pending ? "Loading...." : 
            list.map((item, index)=> {
				return <div key={index}>{item}</div>
			})
            }
			<br />
         <label htmlFor={id2}>Password</label>
		 <input type="text" id={id2} onChange={handlePassword}/>
		 {isPending ? "Loading...." : 
            list1.map((item, index)=> {
				return <div key={index}>{item}</div>
			})
            }
			<h1>Hello</h1>
		</div>
		</>
		
	);
}
	
export default TransitionHook;