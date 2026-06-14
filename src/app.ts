import express , { Application, Request, Response } from "express";
import { IndexRoutes } from './app/routes';
import { globalErrorHander } from "./app/middleware/globalErrorHandler";
import { notFound } from "./app/middleware/notFoundf";

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// সব মেইন এপিআই রাউট এখানে চলে যাবে (যেমন: /api/v1/specialties)
app.use("/api/v1", IndexRoutes);

// হোম রুটটি শুধু এপিআই সচল আছে কিনা তা চেক করবে
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "MediHome Backend API is working perfectly!"
  });
});


app.use(globalErrorHander);
app.use(notFound);

export default app;