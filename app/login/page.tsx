"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
  e.preventDefault();

  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });


  if (result?.error) {
    setError("Invalid email or password");
    return;
  }


  const session = await fetch("/api/auth/session")
    .then(res => res.json());


  if(session.user.role === "ADMIN"){

    router.push("/admin/dashboard");

  }
  else if(session.user.role === "EMPLOYEE"){

    router.push("/employee/dashboard");

  }

}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-96"
      >

        <h1 className="text-2xl font-bold mb-6">
          EMS Login
        </h1>


        <input
          className="border p-2 w-full mb-3"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />


        <input
          className="border p-2 w-full mb-3"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />


        {
          error &&
          <p className="text-red-500 mb-3">
            {error}
          </p>
        }


        <button
          className="bg-green-600 text-white px-4 py-2 rounded w-full mb-3"
        >
          Login
        </button>


        <button
          type="button"
          onClick={() =>
  signIn("google", {
    callbackUrl: "/employee/dashboard",
    prompt: "select_account",
  })
}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Continue with Google
        </button>


      </form>

    </div>
  );
}