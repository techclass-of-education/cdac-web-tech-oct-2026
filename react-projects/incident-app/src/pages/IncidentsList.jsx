import { useLocation } from "react-router-dom"

export function IncidentsList()
{
    const formValues=useLocation()
    console.log(formValues)
    return(<>
    <h1>List</h1>
    
    </>)
}