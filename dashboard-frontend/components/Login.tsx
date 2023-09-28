"use client";

import { signIn } from "next-auth/react";
import React from "react";

type Props = {};

// TODO: Don't forget to add redirect URL in https://console.cloud.google.com/apis/credentials

const Login: React.FC<Props> = ({}) => {
  return (
    <>
      <div className='bg-gray-700 h-screen flex flex-col items-center justify-center text-center'>
        <button
          className='text-white font-semibold text-3xl animate-pulse'
          onClick={() => signIn("google")}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
