import { useContext,memo } from "react"
import { IncidentsListContext } from "../pages/IncidentsList"
import { updateIncident,deleteIncident } from "../pages/redux/IncidentSlicer"
import { useDispatch } from "react-redux"
import styled from "styled-components"
export const ListAccordian=memo(()=>
{
    console.log("child render")
    const dispatch=useDispatch()
    const mockIncidents=useContext(IncidentsListContext) 

    const StyledUL=styled.ul`
                    font-size:20px;
                    border:2px solid black;
                    background-color:grey;
                    color:white !important;

                    &:hover
                    {
                        border-color:red;
                    }
                    
                    &>button{
                    display:inline
                    }
                    
                    
                    `;
    return(
        <>
            {
                mockIncidents.map(function(incident,i){

                        return (
                        <StyledUL key={i}>
                            <span>{incident._id}</span> 
                            <span>{incident.title}</span> 
                            <span>{incident.user}</span>
                        
                            
                            <li><strong>{incident.category}</strong></li>
                            <li><strong>{incident.status}</strong></li>
                            <li> <strong>{incident.severity}</strong></li>
                            <li><strong>{incident.createdAt}</strong></li>
                            <li><strong>{incident.updatedAt}</strong></li>
                            <li> 
                                <button className="btn btn-success" 
                                onClick={()=>dispatch(updateIncident(incident))}>
                                    Update
                                </button>
                            </li>
                            <li>
                                <button className="btn btn-danger"
                                  onClick={()=>dispatch(deleteIncident(incident))}>
                                    Delete
                                </button>
                            </li>
                        <hr/>
                        </StyledUL>
                        )
                })
            }
  
        </>
    )
})

