import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";


export default function EmployeeLayout({

    children,

}: {

    children: React.ReactNode;

}) {


    return (

        <div className="min-h-screen flex bg-gray-100">



            {/* Sidebar */}

            <aside className="w-64 bg-white shadow-lg p-5">


                <h1 className="text-2xl font-bold text-green-600 mb-8">

                    EMS Employee

                </h1>





                <nav className="space-y-3">



                    <Link

                    href="/employee/dashboard"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        🏠 Dashboard

                    </Link>






                    <Link

                    href="/employee/profile"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        👤 My Profile

                    </Link>






                    <Link

                    href="/employee/attendance"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        📅 Attendance

                    </Link>







                    <Link

                    href="/employee/leaves"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        📋 Leaves

                    </Link>







                    <Link

                    href="/employee/payroll"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        💰 Payroll

                    </Link>




                </nav>






                <LogoutButton />



            </aside>








            {/* Content */}

            <main className="flex-1 p-6">


                {children}


            </main>




        </div>

    );

}