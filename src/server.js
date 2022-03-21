const app = require("./index");
const connect = require("./config/db");

app.listen(5006, async()=>{
    try {
        await connect();
    } catch (error) {
        console.log(error.message);
    }
    console.log("listening 5006 c3")
});