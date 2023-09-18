"use client";
import { signIn, useSession } from "next-auth/react";
import { defaultConfig } from "next/dist/server/config-shared";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginPage = () => {
  const { status } = useSession();

  const router = useRouter();
  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className=" p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      {/* Box */}
      <div className="h-full shadow-2xl rounded-md flex flex-col md:flex-row md:w-[70%] md:w-full lg:w-[60%] 2xl:w-[50%]">
        {/* Image Container */}

        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" alt="" className="object-cover " fill />
        </div>
        {/* Form Container */}
        <div className="p-10 flex flex-col gap-8 md:w-1/2 ">
          <h1 className=" font-bold text-xl xl:text-3xl">Welcome</h1>
          <p className="className">
            Log into an existing account or Create a new account
          </p>
          <button
            className="flex gap-4 p-4 ring-1 ring-orrange-100 rounded-md justify-center"
            onClick={() => signIn("google")}>
            <Image
              src="/google.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="">Signin with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md justify-center">
            <Image
              src="/facebook.png"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="">Signin with Facebook</span>
          </button>

          <p className="text-sm">
            Have a Problem?{" "}
            <Link href="/" className="underline cursor-pointer italic">
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
