import { useState } from "react";



interface ChunkResponse{
	
	icon_url : string|null,
	id : string|null,
	url :string|null,
	value : string|null
	
}
const Chunknorris = () => {
	const [data,setData]=useState<ChunkResponse|null>(null)

	const fetchChunk= async ():Promise<void>=>{
		console.log('hi')
 const response=  await  fetch('https://api.chucknorris.io/jokes/random',{method:'GET'})
 const responseData:ChunkResponse=await response.json()
 setData(responseData)
	}
  return (
    <section>
      <h3>random joke</h3>
	  <button onClick={()=>fetchChunk()}>Fetch Chunk</button>
	  <p>{data===null? 'no random data':`random joke id is ${data.id} value ${data.value}`} </p>
    </section>
  );
};
export default Chunknorris;
