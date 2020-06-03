import React,{useState,useEffect,useContext} from 'react';
import {UserContext} from '../../../App'


const Categorys = ()=>{

    const [cat,setCat] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/allcategory',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setCat(result.allcategory)
           // console.log(result.allcategory)
        } 
        )
        
    },[])


    
    return(
        <div className="home">     
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
           /</div> 
           <div>
        <h5>the length is : </h5>
           </div>
            <div>

            {cat
        ? cat.map(item=>{
            return <ul> 
                {item.show.name}
            </ul>;
            
          })
        : "Loading..." }

            </div>

        </div>
    )
    
}


export default Categorys