import { prisma } from './app/lib/prisma';
import express , { Application, Request, Response } from "express";
import { IndexRoutes } from './app/routes';


const app:Application= express();

app.use(express.urlencoded({ extended: true }));


app.use(express.json());


app.use("/api/v1",IndexRoutes)


app.get('/',async (req: Request, res: Response) => {
  const Specialty= await prisma.specialty.create({
    data:{
      title:"dasdfasdf"
    }
  })
  res.status(201).json({
    success:true,
    message :"api is working",
    data:Specialty
  })
});


export default app;