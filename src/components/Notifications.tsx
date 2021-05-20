import { useState,useEffect } from "react";

const Notifications = (props:any) => {
	const [notification,setNotification]=useState(props.message)
	useEffect(()=> {setTimeout(() => {setNotification('');}, 4000);})
return(
  <div>
    <h2>Hello {notification}</h2>
  </div>
	)
};
export default Notifications;
