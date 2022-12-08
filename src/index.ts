require("dotenv").config()
import { AppDataSource } from "./db"
import app from "./app"

async function main() {
    try {
        await AppDataSource.initialize()
        app.listen(8001, () => { 
            console.log('listening to port 8001')
        })
    } catch ( error ) {
        console.error(error)
    }
    
}

main();