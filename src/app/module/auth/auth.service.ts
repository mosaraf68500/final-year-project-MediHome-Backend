import { UserStatus } from "../../../generated/prisma/enums";
import {auth} from "../../lib/auth"
// import { prisma } from "../../lib/prisma";


interface IResgisterPatientPayload{
    name: string,
    email:string,
    password:string
}

interface ILoginUserPayload{
    email: string,
    password: string,
}
const registerPatient=async (Payload:IResgisterPatientPayload)=>{


    const {name,email,password }=Payload;

    const data=await auth.api.signUpEmail({
        body:{
            name,
            email,
            password,
            
        }

    })
    if(!data.user){
        throw new Error('Failed to register patient');
        
    }

    // const patient = await prisma.$transaction(async(tx)=>{
    //     await tx.
    // })

    return data;

}


const loginUser = async(payload : ILoginUserPayload)=>{
    const { email, password } = payload;

    const data = await auth.api.signInEmail({
        body:{
            email,
            password
        }
    });

    if(!data.user){
        throw new Error('Failed to login user');
    }

    if(data.user.status === UserStatus.BLOCKED){
        throw new Error ("User is blocked");
    }

    if(data.user.isDeleted || data.user.status === UserStatus.DELETED){
        throw new Error("user is deleted")
    }

    return data;

    return data;
}


export const AuthService ={
    registerPatient,
    loginUser
}