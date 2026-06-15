import { prisma } from "../../lib/prisma"
import { Prisma } from "@prisma/client" // 👈 Prisma types এর জন্য

// Get all doctors with their user data and specialties
const getAllDoctors = async () => {
    const doctors = await prisma.doctor.findMany({
        include: {
            user: true,
            doctorSpecialties: {
                include: {
                    specialty: true
                }
            }
        }
    })
    return doctors;
}

// Get a single doctor by their ID
const getDoctorById = async (id: string) => {
    const doctor = await prisma.doctor.findUnique({
        where: { id },
        include: {
            user: true,
            doctorSpecialties: {
                include: {
                    specialty: true
                }
            }
        }
    })
    return doctor;
}

// Update doctor information with safe Prisma types
const updateDoctor = async (id: string, payload: Prisma.DoctorUpdateInput) => {
    const updatedDoctor = await prisma.doctor.update({
        where: { id },
        data: payload,
        include: {
            user: true,
            doctorSpecialties: {
                include: {
                    specialty: true
                }
            }
        }
    })
    return updatedDoctor;
}

// Delete a doctor
const deleteDoctor = async (id: string) => {
    const deletedDoctor = await prisma.doctor.delete({
        where: { id }
    })
    return deletedDoctor;
}

export const DoctorService = {
    getAllDoctors,
    getDoctorById,
    updateDoctor,
    deleteDoctor
}