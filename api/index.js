const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => console.log(err));


app.use(express.json());
//요청의 본문에 있는 데이터를 해석해서 req.body객체를 만들어주는 미들웨어

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
    console.log("Backend server is running");
});
