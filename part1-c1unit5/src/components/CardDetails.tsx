import { useParams } from "react-router-dom";
import React, {useState,useEffect} from "react";
import '../App.css';

function CardDetails() {

  const {id} = useParams()
  const[Product,setproduct]= useState<any>({})
  const Getdata = ()=>{
    fetch(`http://localhost:8080/products/${id}`)
    .then(res => res.json())
    .then(res => {
      console.log(res)
      setproduct({...res})
    })
    .catch(err => {
      
    });
  }
   useEffect(()=>{
       Getdata()
   },[])
  console.log(Product.product_name)
  return (
    <div className="product">
      <span>
        <h4 className="detailsTitle">
          {Product.product_name}
        </h4>
      </span>
      <img className="detailsImage" src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?cs=srgb&dl=pexels-pixabay-163100.jpg&fm=jpg" alt="" />
      
      {/* Notice the "Price: $". do not edit it. */}
      <span className="detailsPrice">Price: ${Product.price}</span>
      <span className="detailsPrice"></span>
      <div>
        <h5>Reviews:</h5>
        {/* // Iterate over reviews and populate review like:  */}
          {/* {Product.reviews.map((el:any)=>{
            return(
              <>
                 <div className="review">
          <span className="reviewBy">{el.by}</span>
       <p> <span className="reviewDesc">{el.review}</span></p> 
        </div>
              </>
            )
          })} */}
     
        
      
        
        
      </div>
    </div>
  );
}
export { CardDetails };
