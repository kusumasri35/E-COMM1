import React, { Component, useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import Navbar from '../Navbar'
import "./index.css"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Products=()=>{

  // state={
  //   user:{},
  //   products:null
  // }

  const [user,setUser] = useState("")
  const [products,setProducts] = useState(null)
  const history = useHistory()

  // componentDidMount=()=>{
  //   this.getUser()
  //   this.getProducts()
  // }

  useEffect(()=>{
    getUser()
    getProducts()
  },[])

  const getProducts=async()=>{
    const response  = await fetch('https://dummyjson.com/products')
    const data = await response.json()
   // console.log(data)
    setProducts(data.products)
    // setState({products:data.products})
  }


  const getUser=async()=>{
    const options = {
      method:"GET",
      headers:{
        "x-auth-token":localStorage.getItem("token"),
      }
    }
    const response  = await fetch("/api/auth",options)
    const data = await response.json()
    if(response.ok===true){
      // console.log(data)
      setUser(data)
    }else{
      console.log(data)
    }
  }

  const redirectToPayment=()=>{
  
    history.push("/payment")
    window.location.reload()

  }

  if(localStorage.getItem("token")===null){
    history.push("/")
}


    return (
      <div>
        <Navbar user={user}  />
        <div className='container'>
          {products&&(
            products.map((p)=>(
              <div className="card" key={p.title}>
                <div className="imgBox">
                  <img src={p.images[0]} alt={p.title} className="mouse"/>
                </div>

                <div className="contentBox">
                  <h3>{p.title}</h3>
                  <h2 className="price">${p.price}</h2>
                  
                  <a onClick={redirectToPayment} className="buy">Buy Now</a>
                </div>

              </div>
            ))
          )
          }
        </div>
      </div>
    )
  }

export default withRouter(Products)
