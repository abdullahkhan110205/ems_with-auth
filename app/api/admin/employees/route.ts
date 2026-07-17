import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";



// GET ALL EMPLOYEES

export async function GET() {

    try {

        const employees = await prisma.employee.findMany({

            include: {

                user: true,

                department: true

            },

            orderBy: {

                joinedAt: "desc"

            }

        });

        return NextResponse.json(employees);

    } catch (error) {

        console.error(error);

        return NextResponse.json(

            {

                message: "Failed to fetch employees"

            },

            {

                status: 500

            }

        );

    }

}



// CREATE EMPLOYEE

export async function POST(req: Request) {

    try {

        const body = await req.json();

        const existingUser = await prisma.user.findUnique({

            where: {

                email: body.email

            }

        });

        if (existingUser) {

            return NextResponse.json(

                {

                    message: "Email already exists"

                },

                {

                    status: 400

                }

            );

        }

        const hashedPassword = await bcrypt.hash(body.password, 10);

        const user = await prisma.user.create({

            data: {

                name: body.name,

                email: body.email,

                password: hashedPassword,

                role: "EMPLOYEE"

            }

        });

        const employee = await prisma.employee.create({

            data: {

                userId: user.id,

                departmentId: body.departmentId,

                position: body.position,

                joinedAt: new Date(body.joinedAt),

                salary: Number(body.salary)

            },

            include: {

                user: true,

                department: true

            }

        });

        return NextResponse.json(employee);

    } catch (error) {

        console.error(error);

        return NextResponse.json(

            {

                message: "Failed to create employee"

            },

            {

                status: 500

            }

        );

    }

}