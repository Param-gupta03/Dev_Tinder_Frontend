import { Outlet, useNavigate } from "react-router-dom";

import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useEffect } from "react";

const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user=useSelector((store) => store.user) 

  const fatchUser= async()=>{
    if(user)
    {
      return ;
    }

    try{const res=await axios.get(BASE_URL+"/profile/view",{
      withCredentials: true,
    });
    dispatch(addUser(res.data));
  }
  catch(err){
    navigate("/login")

  }
}

useEffect(()=>{
  fatchUser();
},[]);  
return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;