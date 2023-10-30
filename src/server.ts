import express, {NextFunction, Request, Response, json} from 'express'
import user_router from './Routes/userroutes'

const app= express()

app.use(json())

app.use('/user', user_router)

app.use((err:Error, req:Request, res:Response, next: NextFunction)=>{
    res.json({
        message: err.message
    })
})

app.listen(5000, ()=>{
    console.log('Server running on port 5000')
})