import { useState } from 'react'
import ChangeTitle from './components/effects/ChangeTitle'
import Clock from './components/effects/Clock'

import './App.css';
import SunAjax from './components/effects/SunAjax';
import HelloWorld from './components/effects/HelloWorld';
import Clock2 from './components/effects/Clock2';
import Notifications from './components/Notifications';
import Chunknorris from './components/Chucknorris';
import StarWars from './components/StarWars';


function App() {
    const [showClock, setShowClock] = useState(true)

    return (
        <div className="App">
            <h1> useEffect demo </h1>
            <main>
                <ChangeTitle />
                {showClock ? <Clock /> : null}
                <button onClick={() => setShowClock(!showClock)}> Show/hide clock </button>

                <hr />
           <SunAjax/>
		   <hr/>
		   <HelloWorld/>
		   <hr/>
		   {/*<Clock2/>*/}
		   <Notifications message="Good Morning"/>
		   <Chunknorris/>
		   <StarWars/>
		  
            </main>

        </div>
    );
}

export default App;