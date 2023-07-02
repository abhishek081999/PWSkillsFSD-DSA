import app from "./app.js";
const port = 3000;

//database connection --mongodb
import mongoose from "mongoose";
// mongoose.connect('mongodb+srv://AbhishekPW:Pwskills@123cluster0.2yyze.mongodb.net/todoapp')
(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://AbhishekPW:Pwskills@123cluster0.2yyze.mongodb.net/todoapp"
    );
    console.log(`DB connected Successfully`);

    app.on("error",(err)=>{
        console.log("ERROR: ",err)
        throw err
    })
    const onListening = () =>{
          console.log(`app listening on port ${port}`);
    }
    app.listen(port,onListening)
    
  } catch (error) {
    console.error("ERROR: ", err);
    throw err;
  }
})();

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
