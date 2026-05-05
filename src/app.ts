import { prisma } from './app/lib/prisma';
import express , { Application, Request, Response } from "express";


const app:Application= express();
// Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
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