import { Specialty } from "../../generated/prisma/client";
import { prisma } from "../lib/prisma";

const createSpecialty = async (payload: Specialty): Promise<Specialty> => {
  const Specialty = await prisma.specialty.create({
    data: payload,
  });

  return Specialty;
};


const getAllSpecialties=async ()=>{
const Specialties=await prisma.specialty.findMany();
return Specialties;
}


const deleteSpecialty=async(id:string):Promise<Specialty>=>{
    const specialty=await prisma.specialty.delete({
        where:{id}
    })

    return specialty;

}


const updateSpecialties = async (id: string, payload: Partial<Specialty>): Promise<Specialty> => {

    const updatedSpecialty = await prisma.specialty.update({
        where: { id },
        data: payload,
    });

    return updatedSpecialty;
    
}

export const SpecialtyService = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialties
};
