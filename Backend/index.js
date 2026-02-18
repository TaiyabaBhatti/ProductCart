import app from "./src/app.js";
import dbConnection from "./src/database/db.js";

dbConnection()
.then(()=>{
app.listen(process.env.PORT, () => {
    console.log(`Express App is running at port: ${process.env.PORT}`)
})
})
