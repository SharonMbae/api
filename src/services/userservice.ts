import { sqlconfig } from "../config/sqlconfig";
import sql from 'mssql'
 

export async function userService(){
    console.log(sqlconfig)
    try {
        let pool= new sql.ConnectionPool(sqlconfig);
        return pool;
    }catch(error){
        return error
        console.log(error)
    }
}