import { useState, useEffect } from "react";
const Clock2 = () => {
	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
	  const interval = setInterval(() => {
		setSeconds(seconds => seconds + 1);
	  }, 1000);
	  return () => clearInterval(interval);
	}, []);
  
	return (
	  <div className="App">
		<header className="App-header">
		  {seconds} seconds have elapsed since mounting.
		</header>
	  </div>
	);
  


};
export default Clock2;
