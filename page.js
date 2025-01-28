import Navbar from '..Compontes/Navbar'
// import {useState, useEffect} from 'reat';
import fs from "fs/promises"

export default function Home() {
  // const [count, setCount] = useState(0)
  console.log('Hey I am Lazina')
  let a = fs.readFile(".gitignore")
  a.then(e=>{console.log(e.toString())})
  return (
    <div>
      <Navbar/>
      I am a cpmponent
       {/* {count}
      <button onClick={()=> setCount(count + 1)}>Click me</button> */}
    </div>
      );
}
