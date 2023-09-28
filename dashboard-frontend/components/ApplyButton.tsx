"use client";

function ApplyButton() {
  return (
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full disabled:opacity-50 disabled:cursor-not-allowed'>
      {/* {pending && "Searching"}
        {!pending && <MagnifyingGlassIcon className="h-5 w-5" />} */}
      apply
    </button>
  );
}

export default ApplyButton;
