import React, {useEffect,useState,useContext} from 'react';
import {UserContext} from '../../App'

const Myproduct = ()=>{
    const [myprod,setProd] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/myproduct',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setProd(result.myproduct)
        })
    },[])
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                margin:"18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"80px"}} alt="" 
                    src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    />
                </div>
                <div>
         <h4>{state?state.name:"loading"}</h4>
                    <div style={{
                display:"flex",
                justifyContent:"space-around",
                width:"108%"
            }}>
                        <h6>40 posts</h6><h6>40 follow</h6><h6>40 follow</h6>
              </div>
            </div>
            </div>
        
            <div className="gallery">
                {
                    myprod.map(item=>{
                        return(
                            <div>
                            <img key={item._id} className="item" 
                            src={item.productImage} 
                            alt={item.title} />
                            <h7>{item.title}</h7>
                            </div>

                        )
                    })
                }
           
        </div>
        </div>
    )
}

export default Myproduct