import React,{useContext, useCallback} from 'react';
import {Link ,useHistory} from 'react-router-dom'
import {UserContext} from '../App'


const NavBar = ()=>{
  const {state,dispatch} = useContext(UserContext)
  const history = useHistory()
  const renderList = ()=>{
    if(state){
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/create">Create Post</Link></li>,
        <li><Link to="/addproduct">Add Product</Link></li>,
        <li><Link to="/allproduct">All Product</Link></li>,
        <li><Link to="/myproduct">my Product</Link></li>,
        <li><Link to="/allcategory">Category</Link></li>,
        <li>
          <button className="btn #c62828 red darken-3"
                onClick={()=>{
                  localStorage.clear()
                  dispatch({type:"CLEAR"})
                  history.push('/login')
                }}
                      >Logout </button>
          </li>
      ]
    }else {
      return [
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }


    return(
        <nav>
    <div className="nav-wrapper white">
      <Link to={state?"/":"/login"} className="brand-logo left">anti-gaspillage</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {renderList()}
      </ul>
    </div>
  </nav>
    )
}

export default NavBar;