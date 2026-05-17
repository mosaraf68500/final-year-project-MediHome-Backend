/* eslint-disable prefer-const */
import { NextFunction, Request, Response } from "express";
import { EnvVariable } from "../config/env";
import status from "http-status";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHander = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (EnvVariable.NODE_ENV === "development") {
        console.log("Error from global Hander :", err);
    }

    let statusCode: number = status.INTERNAL_SERVER_ERROR;
    
    let message: string = "Internal server Error";

    let errorDetail: string | undefined;
    if (err instanceof Error) {
        errorDetail = err.message;
    } else if (typeof err === "string") {
        errorDetail = err;
    } else {
        try {
            errorDetail = JSON.stringify(err);
        } catch {
            errorDetail = undefined;
        }
    }

    res.status(statusCode).json({
        success: false,
        message: message,
        error: errorDetail
    })
}