import { useLocation } from "react-router-dom";
import { ListAccordian } from "../components/ListAccordian";
import { createContext, useEffect } from "react";
import { useSelector } from "react-redux";
export const IncidentsListContext = createContext();
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./redux/AuthSlicer";
import { useState } from "react";


export function IncidentsList() {
  const [count,setCount]=useState(0)
  const user = useSelector((state) => state.AuthReducer.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const incidents=useSelector((state)=>state.IncidentReducer.incidents)
  useEffect(
    function () {
      if (user == null) {
        navigate("/user-forms");
      }
    },
    [user],
  );
  const formValues = useLocation().state;
  // console.log(formValues);

  return (
    <div className="alert alert-dark mx-auto w-75">
      <h1>{count}</h1>
      <button onClick={()=>setCount((preCount)=>preCount+1)}>Inc Count</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <h1 className="text-center">List</h1>
      <hr />
      <IncidentsListContext.Provider value={incidents}>
        <ListAccordian />
      </IncidentsListContext.Provider>
    </div>
  );
}
