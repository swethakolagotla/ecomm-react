import axios from 'axios'
import React,{useState,useEffect} from 'react'
import Product from './Product'

const Products = (props) => {
    const[state,setState]=useState([])
const callApi=()=>{
    axios.get("https://api.storerestapi.com/products").then(response=>{
        console.log(response)
        setState(response.data.data)
    }).catch(err=>{
console.log(err)
    })

    }
 useEffect(()=>{
    callApi();
 },[])
  return (
    <div className={"row"}>
        {state.map(ele=>(
           <Product key={ele._id} data={ele}  Addtocart={props.Addtocart}/>
        ))
        }
    </div>
  )
}

export default Products