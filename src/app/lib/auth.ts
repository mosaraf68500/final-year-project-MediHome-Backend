import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { Role, UserStatus } from "../../generated/prisma/enums";



export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", 
    }),
    emailAndPassword:{
        enabled: true,
    },

    user:{
        additionalFields:{
            role:{
                type:"string",
                returned:true,
                defaultValue:Role.PATIENT
    
            },
            status:{
                type:"string",
                required:true,
                defaultValue:UserStatus.ACTIVE
            },
            needPasswordChange:{
                type:"string",
                required:true,
                defaultValue:false
            },
            isDeleted:{
                type:"string",
                required:true,
                defaultValue:false

            },
            deletedAt:{
                type:"string",
                required:true,
                defaultValue:false
            }
        }
    }
});