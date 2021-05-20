import { useState,useEffect } from 'react'
const HelloWorld=()=>{
	const [hello, setHello] = useState('');
	useEffect(() => {
		console.log("hello changed")
		
	},[hello])
return(
	<div>Hello
		<button onClick={()=>setHello("Hello World")}>Change </button>
		<h1>{hello}</h1>
	</div>
)

}
export default HelloWorld