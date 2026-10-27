import { useLocation } from "react-router-dom"
import { mockIncidents } from "../data/incidents"
import { ListAccordian } from "../components/ListAccordian"
import { createContext } from "react"
export const IncidentsListContext=createContext()

export function IncidentsList()
{
    const formValues=useLocation().state
    console.log(formValues)
    return(<div className="alert alert-dark mx-auto w-75">

    <h1 className="text-center">List</h1>
    <hr/>
        <IncidentsListContext.Provider value={mockIncidents}>
            <ListAccordian />
        </IncidentsListContext.Provider>
    
    </div>)
}