import { useLocation } from "react-router-dom";
import { ListAccordian } from "../components/ListAccordian";
import { createContext, useEffect } from "react";
import { useSelector } from "react-redux";
export const IncidentsListContext = createContext();
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./redux/AuthSlicer";
import { useState } from "react";
import axios from "axios";


export function IncidentsList() {
  // const [count,setCount]=useState(0)
  const [incidents,setIncidents]=useState([])
  // const user = useSelector((state) => state.AuthReducer.user);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const incidents=useSelector((state)=>state.IncidentReducer.incidents)
  useEffect(
    function () {
        axios.get("http://localhost:5000/incident",{withCredentials:true}).then(function(res){
              setIncidents(res.data.incidents)
        }).catch(function(err){
          console.log(err)
        })
    },[],
  );

  async function handleLogout()
  {
    try{
      const res=await axios.get("http://localhost:5000/incident",{withCredentials:true})
      alert(res.data.msg)
    }
    catch(err)
    {
      console.log(err)
    }
  }

  // const formValues = useLocation().state;
  // console.log(formValues);

  return (
    <div className="alert alert-dark mx-auto w-75">
      
      
      <button onClick={handleLogout}>Logout</button>
      <h1 className="text-center">List</h1>
      <hr />
      <IncidentsListContext.Provider value={incidents}>
        <ListAccordian />
      </IncidentsListContext.Provider>
    </div>
  );
}
