import app from "./src/app.js";
import dbConnection from "./src/database/db.js";

const startServer = async () => {
try {
    await dbConnection();
    app.listen(process.env.PORT || 8000, () => {
    console.log(`Express App is running at port: ${process.env.PORT}`)
})
} catch (error) {
    console.log(`Connection Failed`)

}



}

startServer();