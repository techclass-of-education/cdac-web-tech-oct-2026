const http=require("http")

const app=http.createServer((req,res)=>{
        //endpoints  //functions
        console.log(req.url)
        console.log(req.method)// get post put patch delete

        if(req.url=="/")
        {
            res.end("Server started link root /")

        }
        else if(req.url=="/login" && req.method=="POST")
        {
            console.log(req.url)
            res.end("link /login")
        }
        else if(req.url=="/register")
        {
                res.end("link /register")
        }
        else if(req.url=="/about")
        {
            res.end("link /about")
        }
        else if(req.url=="/contact")
        {
            res.end("link /contact")
        }
        else
        {
            res.end("Invalid link")
        }
})

app.listen(5000,()=>{  //loop
    console.log("server started on http://localhost:5000")
})