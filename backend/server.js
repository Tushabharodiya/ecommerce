require("dotenv").config()
let http = require("http");
let express = require("express");
const dbConnect = require("./db/dbconnect");
let cors = require("cors");
let cookieParser = require("cookie-parser")
const routes = require("./routes");
let app = express();
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}))

app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// routes
app.use("/v1", routes)

// database connection
dbConnect();

// http server
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server stated in port ${process.env.PORT}`);
});