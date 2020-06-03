import React,{useState,useEffect,useContext} from 'react';
import {UserContext} from '../../../App'

const Products = ()=>{
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/allproduct',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setData(result.products)
        })
    },[])

    return(
        <div className="home">
            {
                data.map(item=>{
                    return(
                            <div className="card home-card" >
                             
                                <div className="card-image" id="prod">
                                    <h5>{item.nameproduct}</h5>
                                    <h5>{item.price} Dianrs</h5>
                                </div>
                                <div className="card-image">
                                    <img alt="" src={item.productImage}/>
                                </div>
                                <div className="card-image" id="prod" >
                                    <h8>quantité : ---</h8>
                                    <button className="btn waves-effect waves-light #64b5f6 blue lighten-2 ">
                                    interessé(e)</button>
                                </div>

                            </div>
                    )
                })
            }
            
        </div>
    )
}

export default Products