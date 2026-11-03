export function Register()
{
      const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [name,setName]=useState("")
    return (<>
    
     <input placeholder="Enter email-id" value={name} onChange={(e)=>setName(e.target.value)}/>
     <input placeholder="Enter email-id" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

    <button onClick={()=>dispatch(authProcess({email,password}))}>Register</button>
    </>)
}