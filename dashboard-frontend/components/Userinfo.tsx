"use client";

import { signOut, useSession } from "next-auth/react";
import React, { useEffect } from "react";

function Userinfo() {
  const { data: session } = useSession();

  return (
    <div className='w-full flex justify-end p-3 '>
      {session && (
        <div className='flex items-center justify-center space-x-2 '>
          <img
            src={session.user?.image!}
            alt='user-avatar'
            className='h-8 w-8 rounded-full cursor-pointer mx-auto mb-2 hover:opacity-50'
          />
          <p className='truncate mb-2 text-gray-500'>
            Welcome {session.user?.name}
          </p>
          <p
            onClick={() => signOut()}
            className=' px-4 mb-2 text-gray-500 cursor-pointer hover:opacity-50'
          >
            Logout
          </p>
        </div>
      )}
    </div>
  );
}

export default Userinfo;
