const port=process.env.port||8080
const express=require('express')
 const cors=require('cors')
 const app=express()
 app.use(express.json())
 app.use(cors())

 const API_KEY='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'
 app.post('/completions',async (req,res)=>{
   const options={
     method:"POST",
     headers:{
       "Authorization":`Bearer ${API_KEY}`,
       "Content-Type":"application/json"
     },
     body:JSON.stringify({
       model:"gpt-3.5-turbo",
       messages:[{role:"user",content:req.body.message}],
       max_tokens:1000,
     })
   }
   try{
 const response=await fetch('https:api.openai.com/v1/chat/completions',options)
   const data=await response.json()
   res.send(data)
   }catch(error){
     console.log(error)
   }
 })
 app.listen(port,()=>console.log('server is running on port '+port))