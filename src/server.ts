import mongoose from "mongoose";
import app from "./app";
require("dotenv").config();
const port = process.env.PORT || 5000;

// routes
// app.use("/",myRoute)

// catch all route error
// app.use((req, res, next) => {
//   // error defined by us
//   const err = new Error("404 not found");
//   err.status = 404;
//   next(err);
// });

// global error handler
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       message: err.message,
//     },
//   });
// });

// db conn
async function bootDb() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/next-dev-mongoose");
    console.log(`DB connected`);
    app.listen(port, () => {
      console.log("Server started on", port);
    });
  } catch (error) {
    console.log(error);
  }
}
bootDb();
