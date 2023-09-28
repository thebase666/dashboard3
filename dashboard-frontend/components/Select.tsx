"use client";

import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/navigation";
import ApplyButton from "./ApplyButton";

const plans = [
  {
    name: "Class A",
    id: 1,
  },
  {
    name: "Class B",
    id: 2,
  },
];

function Select() {
  const [selected, setSelected] = useState(null);
  console.log(selected);
  const router = useRouter();

  return (
    <div>
      <div className='w-full px-4 py-16 '>
        <div className='mx-auto w-full max-w-md'>
          <RadioGroup value={selected} onChange={setSelected}>
            <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
            <div className='space-y-2'>
              {plans.map((plan) => (
                <RadioGroup.Option
                  key={plan.name}
                  value={plan}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                        : ""
                    }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className='flex w-full items-center justify-between'>
                        <div className='flex items-center'>
                          <div className='text-sm'>
                            <RadioGroup.Label
                              as='p'
                              className={`font-medium  ${
                                checked ? "text-white" : "text-gray-900"
                              }`}
                            >
                              {plan.name}
                            </RadioGroup.Label>
                            {/* <RadioGroup.Description
                              as='span'
                              className={`inline ${
                                checked ? "text-sky-100" : "text-gray-500"
                              }`}
                            >
                              <span className='hidden'>
                                {plan.ram}/{plan.cpus}
                              </span>{" "}
                              <span aria-hidden='true'>&middot;</span>{" "}
                            </RadioGroup.Description> */}
                          </div>
                        </div>
                        {checked && (
                          <div className='shrink-0 text-white'>
                            <CheckIcon className='h-6 w-6' />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className='w-full flex justify-center mb-3'>
        <button
          // @ts-ignore
          onClick={() => router.push(`/class/${selected.id}`)}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed'
          disabled={selected === null}
        >
          {/* {pending && "Searching"}
        {!pending && <MagnifyingGlassIcon className="h-5 w-5" />} */}
          apply
        </button>
      </div>
    </div>
  );
}

// @ts-ignore
function CheckIcon(props) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export default Select;
