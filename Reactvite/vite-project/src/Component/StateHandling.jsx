
import react , {useState} from 'react'

function StateHandling() {
    const [counter ,SetCounter]= useState(20);
    const [red,setRed] = useState(0);
        const [green,setGreen] = useState(0);
        const [blue,setBlue] = useState(0);
    function increment() {
        SetCounter(counter + 10);
        


    }
    function changeBGcolor() {
        setRed(Math.random() * 255);
        setGreen(Math.random() * 255);
        setBlue(Math.random() * 255);
    }
  return (
    <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: "500px", margin: "auto", height: "200px", paddingTop: "100px", textAlign: "center" }}>
        <h2>Counter app</h2>
        <h2>Counter = {counter}</h2>
        <button onClick={increment}>increaseCounter</button>
        <button onClick={()=>SetCounter(counter - 5)}>decreaseCounter</button>
        <button onClick={changeBGcolor}>Change Background Color</button>
    </div>
  )
}
export default StateHandling
