import { Card } from "./Card"
import { useEffect, useState } from "react";
import '../App.css';
function Body() {
  const[Product,setproduct]= useState<any>([])
    const Getdata = ()=>{
      fetch("http://localhost:8080/products")
      .then(res => res.json())
      .then(res => {
        // console.log(res)
        setproduct([...res])
      })
      .catch(err => {
        
      });
    }
     useEffect(()=>{
         Getdata()
     },[])
  return (
    <div className="container">
      {/* Iterate over data and show `Card` here */
        Product.map((d:any)=>{
          return(<>
            <Card  key={d.id} d={d}/>
          </>)
         
    
        })
      }
    </div>
  );
}

export { Body };
