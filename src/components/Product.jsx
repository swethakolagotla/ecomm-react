import React from 'react'
import Products from './Products'
const Product = (props) => {
  const handleClick=(data)=>{
props.Addtocart(data)
  }
   
  return (
    <div className={"col-4"}><div className="card" style={{width: "18rem"}}>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nr9pGY3TnYIKa2ypx75EB9lPL70WJAJpvw&usqp=CAU" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.data.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary" onClick={()=>handleClick(props.data)}></a>
  </div>
</div></div>
  )
}

export default Product