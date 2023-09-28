"use client";

import React from "react";

import Select from "./Select";
import { Bars2Icon } from "@heroicons/react/20/solid";

function Sidebar() {
  return (
    <div className='p-2 flex flex-col h-screen '>
      <div className='w-full flex justify-end mb-3'>
        <Bars2Icon className='h-6 w-6 text-gray-700 md:h-8 md:w-8 ' />
      </div>
      <Select />
    </div>
  );
}

export default Sidebar;
