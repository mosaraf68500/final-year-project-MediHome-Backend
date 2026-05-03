import app from "./app";

const port=process.env.PORT || 5000;
console.log(port);
const bootstrap =()=>{
    try{
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
    }catch(error){
        console.log(`faild to start server `, error);
    }
}

bootstrap();

