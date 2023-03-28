import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Products from './components/Products'
function App() {
  const [count, setCount] = useState(0)
const Addtocart=(data)=>{
  debugger
console.log(data)
}
  return (
    <div className={"container"}>
      <Header/>
      <div className={"row"}>
        <Banner/>
      </div>
      <Products Addtocart={Addtocart}/>
    </div>
  )
}

export default App
