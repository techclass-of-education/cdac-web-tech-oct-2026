export function ListAccordian(props)
{
    const {mockIncidents}=props
    return(

        <ul>

{

    mockIncidents.map(function(incidents,i){

            return (
            <li>
                  <span>{incidents._id}</span> 
                  <span>{incidents.title}</span> 
                  <span>{incidents.user}</span>
             
                
                        <li><strong>{incidents.category}</strong></li>
                     <li><strong>{incidents.status}</strong></li>
                    <li> <strong>{incidents.severity}</strong></li>
                     <li><strong>{incidents.createdAt}</strong></li>
                     <li ><strong>{incidents.updatedAt}</strong></li>
               <hr/>
            </li>
            )
    })
}
  
        </ul>
    )
}