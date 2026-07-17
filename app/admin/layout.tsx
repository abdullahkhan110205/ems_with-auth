import Link from "next/link";
import LogoutButton from "@/components/LogoutButton";


export default function AdminLayout({

    children,

}: {

    children: React.ReactNode;

}) {


    return (

        <div className="min-h-screen flex bg-gray-100">


            {/* Sidebar */}

            <aside className="w-64 bg-white shadow-lg p-5">


                <h1 className="text-2xl font-bold text-blue-600 mb-8">

                    EMS Admin

                </h1>





                <nav className="space-y-3">


                    <Link

                    href="/admin/dashboard"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        🏠 Dashboard

                    </Link>



                    <Link

                    href="/admin/departments"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        🏢 Departments

                    </Link>



                    <Link

                    href="/admin/employees"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        👥 Employees

                    </Link>





                    <Link

                    href="/admin/attendance"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        📅 Attendance

                    </Link>





                    <Link

                    href="/admin/leaves"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        📋 Leaves

                    </Link>





                    <Link

                    href="/admin/payroll"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        💰 Payroll

                    </Link>



                    {/* NEW: CLIENTS MODULE */}

                    <Link

                    href="/admin/clients"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        🤝 Clients

                    </Link>



                    {/* NEW: PROJECTS MODULE */}

                    <Link

                    href="/admin/projects"

                    className="block p-3 rounded hover:bg-gray-100"

                    >

                        📂 Projects

                    </Link>



                </nav>





                <LogoutButton />



            </aside>







            {/* Page Content */}

            <main className="flex-1 p-6">


                {children}


            </main>




        </div>

    );

}