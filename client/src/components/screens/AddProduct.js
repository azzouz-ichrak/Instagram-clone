

import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import M from 'materialize-css'

// https://api.cloudinary.com/v1_1/dyug1pvey/image/upload


// nameproduct price productImage  

const AddProduct = ()=>{
    const history = useHistory("")
    const [nameproduct,setNameproduct] = useState("")
    const [price,setPrice] = useState("")
    const [productImage,setProductImage] = useState("")
   // const [category,setCategory] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
        if(url) {
        fetch("/addproduct",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                nameproduct,
                price,
                productImage:url
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
            M.toast({html:"add product success",classes:"#388e3c green darken-2"})
            history.push('/allproduct')

        }
    }).catch(err=>{
        console.log(err)
    })
}
    },[url])

    const PostProduct = ()=>{
        const data = new FormData()
        data.append("file",productImage)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","dyug1pvey")
        //j8KvBG9tUBv26fSm5c6p2b1zPBY
      //  CLOUDINARY_URL=cloudinary://478786371484157:j8KvBG9tUBv26fSm5c6p2b1zPBY@dyug1pvey
        fetch("https://api.cloudinary.com/v1_1/dyug1pvey/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
           setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
 
    }

    
    return(
        <div className="card input-filed"
        style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}>
            

            <input type="text" 
            placeholder="nameproduct"
            value={nameproduct}
            onChange={(e)=>setNameproduct(e.target.value)}
             />
            <input type="text" 
            placeholder="price" 
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            
            />
            
            <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload image</span>
                    <input type="file" 
                    
                    onChange={(e)=>setProductImage(e.target.files[0])} 
                     />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate"
                    type="text" />
                </div>
                </div>
                
                <button className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={()=>PostProduct()}
                >Submit post </button>


                </div>
    )


   
}

export default AddProduct ;