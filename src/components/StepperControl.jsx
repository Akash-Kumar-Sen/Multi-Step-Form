import React from "react";

export const StepperControl = ({ handleClick, currentStep, steps }) => {
    return(
        <div className="container flex justify-arround mt-4 mb-8">
            {/*Prev Button*/}
            <button
            onClick={() => handleClick()} 
            className={`bg-pink-600 text-white cursor-pointer rounded-xl border-2 border-slate-300 bg-white mx-auto py-2 px-5 font-semibold uppercase hover:bg-pink-500 transition duration-200 ease-in-out} 
                ${currentStep === 1 ? " cursor-not-allowed opacity-50 " : ""}`
            }
            >
                Back
            </button>
            {/*Next Button*/}
            <button
            onClick={() => handleClick("next")} 
            className="bg-amber-400 text-white cursor-pointer rounded-xl border-2 border-slate-300 bg-white mx-auto py-2 px-5 font-semibold uppercase hover:bg-amber-500 transition duration-200 ease-in-out">
                {/*currentStep === steps.length-1 ? "Submit" : "Next"*/}
                Next
            </button>
        </div>
    );
}