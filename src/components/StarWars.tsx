import { useState } from "react";
import {StarWarsResponse,StarWarsData} from '../types/StarWars'


//`name is ${data.count} height ${data.next}`}
// data.results.map(people=>{people.name})}
//`count is ${data.count} next is ${data.next}`}
//`The sun rose at ${data.sunrise} today in ${cityName}. It will set at ${data.sunset}.`




const API_URL="https://swapi.dev/api/people/";

const StarWars = () => {
	const[next,setNext]=useState<number>(1)
	const[prev,setPrev]=useState<number>(1)
  const [data, setData] = useState<StarWarsResponse | null>(null);

  const fetchChunk = async (page1:number): Promise<void> => {
	  const querystring=`?page=${page1}`
	  const URL=API_URL+querystring
    const response = await fetch(URL, {
      method: "GET",
    });
    const responseData: StarWarsResponse = await response.json();

    setData(responseData);
    console.log("data from req", responseData);
  };
  let output = null;
  let outputResult=null;
  if (data !== null) {
    output = <p> Example: {data.count}</p>;
	//outputResult=data.results.map(person=>person.name)
  }
const nextData=()=>{
	setNext(next+1)
	fetchChunk(next)
}
const prevData=()=>{
	setNext(next-1)
	if(next==0)
	{
		alert('no prev data')
	}
	else{
	fetchChunk(next)
	}
}
  return (
    <section>
      <h3>random joke</h3>
      <button onClick={() => fetchChunk(next)}>Fetch StarWars</button>

      {output}
      {outputResult}
	  <ul>
	  {data === null ?
					'no data' :
				data.results.map(person=><li>{person.name}</li>)
				}
	  </ul>
	  <button onClick={()=>nextData()}>Next</button>
	  <button onClick={()=>prevData()}>Previous</button>
    </section>
  );
};
export default StarWars;
