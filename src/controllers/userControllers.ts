import { Request, Response} from "express"
import mssql from 'mssql'
import { sqlconfig } from "../config/sqlconfig"
import { userService } from "../services/userservice"



export const registerUser = async (req:Request,res:Response) =>{
   
    try{
       
        const {FullName, email, phone_no, password, profession}=req.body

        const pool=await mssql.connect(sqlconfig)

        if (pool.connected){
            console.log('connection created')
        }


    } catch(error){
        return res.status(501).json({error:error})
    }

}