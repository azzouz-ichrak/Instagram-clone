

import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'
// https://api.cloudinary.com/v1_1/dyug1pvey/image/upload


// nameproduct price productImage  

const AddCategory = ()=>{
    const history = useHistory("")
    const [nameCat,setNameCat] = useState("")
    useEffect(()=>{
        fetch("/addcategory",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                nameCat
            })
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    .then(data=>{
       // console.log(data)
        if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
        }
        else{
            M.toast({html:"add category success",classes:"#388e3c green darken-2"})
            history.push('/allcategory')

        }
    }).catch(err=>{
        console.log(err)
    })

    },[])


    
    return(
        <div className="card input-filed"
        style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}>
            

            <input type="text" 
            placeholder="name category"
            value={nameCat}
            onChange={(e)=>setNameCat(e.target.value)}
             />
           
                
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>AddCategory()}
                >Submit category </button>


                </div>
    )


   
}

export default AddCategory ;