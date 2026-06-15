import app from "./app";
import { EnvVariable } from "./app/config/env";



const bootstrap =()=>{
    try{
app.listen(EnvVariable.PORT, () => {
  console.log(`Server is running on http://localhost:${EnvVariable.PORT}`);
});
    }catch(error){
        console.log(`faild to start server  `, error);
    }
}

bootstrap();

