import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [photo,setPhoto] = useState("")
    const [url,setUrl] = useState("")

    useEffect(()=>{
        if(url) {
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                name,
                password,
                email,
                phone,
                photo:url
            })
        }).then(res=>res.json())
    .then(data=>{
       // console.log(data)
        if(data.error){
            M.toast({html: data.error,classes:"#c62828 red darken-3"})
        }
        else{
            M.toast({html:"created post success",classes:"#388e3c green darken-2"})
            history.push('/')

        }
    }).catch(err=>{
        console.log(err)
    })
}
    },[url])

    const PostData = ()=>{
        const data = new FormData()
        data.append("file",photo)
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



   /* const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
             M.toast({html:"invalid email",classes:"#c62828 red darken-3"})
             return
        }
        fetch("http://localhost:3000/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email,
                phone,
                photo
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:data.message,classes:"#388e3c green darken-2"})
                history.push('/login')

            }
        }).catch(err=>{
            console.log(err)
        })
    }
    */

    return(
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>anti-gaspillage</h2>
                <input type="text" 
                placeholder="name" 
                value={name} 
                onChange={(e)=>setName(e.target.value)} />

                <input type="text" 
                placeholder="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} />

                <input type="password" 
                placeholder="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} />

                <input type="text" 
                placeholder="phone" 
                value={phone} 
                onChange={(e)=>setPhone(e.target.value)} />

                <div className="file-field input-field">
                <div className="btn #64b5f6 blue darken-1">
                    <span>Upload image</span>
                    <input type="file" 
                    
                    onChange={(e)=>setPhoto(e.target.files[0])} 
                     />
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate"
                    type="text" />
                </div>
                </div>


                <button className="btn waves-effect waves-light #64b5f6 blue lighten-2" 
                onClick={()=>PostData()} 
                 >SignUP </button>
            <h5>
                <Link to="/login">Already have an account ?</Link>
            </h5>


         </div>
        </div>
    )
}

export default Signup