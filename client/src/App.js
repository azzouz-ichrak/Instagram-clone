import React,{useEffect,createContext,useReducer,useContext} from 'react';
import NavBar from './components/NavBar'
import "./App.css"
import {BrowserRouter,Route,Switch, useHistory} from 'react-router-dom'
import Home from './components/screens/admin/Home'
import Login from './components/screens/Login'
import Profile from './components/screens/Profile'
import Signup from './components/screens/Signup'
import CreatePost from './components/screens/CreatePost'
import AddProduct from './components/screens/AddProduct'
import Products from './components/screens/admin/Products'
import Categorys from './components/screens/admin/Categorys'
import Myproduct from './components/screens/Myproduct'
import AddCategory from './components/screens/admin/AddCategory'
import {reducer,initialState} from './reducers/userReducer'


export const UserContext = createContext()


const Routing = ()=>{
  const history = useHistory()
  const {state,dispatch} = useContext(UserContext)
  
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/')
    }else{
      if(!history.location.pathname.startsWith('/reset'))
           history.push('/login')
    }
  },[])

  return (
    <Switch> 
        <Route exact path="/">
          <Home />

        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>
        
        <Route path="/create">
          <CreatePost />
        </Route>

        <Route path="/addproduct">
          <AddProduct />
        </Route>

        <Route path="/allproduct">
          <Products />
        </Route>

        <Route path="/myproduct">
          <Myproduct />
        </Route>

        <Route path="/allcategory">
          <Categorys />
        </Route>

        <Route path="/addcategory">
          <AddCategory />
          </Route>


        
        </Switch> 
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
      <NavBar />
      <Routing />
      
    </BrowserRouter>
    </UserContext.Provider>
  );
}


export default App;
