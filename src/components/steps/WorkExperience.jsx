import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const WorkExperience = () => {
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), orgName: '', jobRole: '',isCwh:true ,startDate:'',endDate:'',location:'', description:''},
    ]);
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
        if(id === i.id) {
            i[event.target.name] = event.target.value
        }
        return i;
        })
        
        setInputFields(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(),  orgName: '', jobRole: '',isCwh:true ,startDate:'',endDate:'',location:'', description:'' }])
    }

    const handleRemoveFields = id => {
        const values  = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    return(
        <div>
            <div className="bg-white lg:w-3/3 lg:rounded-l-lg mx-6 px-6 lg:px-0 lg:mx-0 lg:px-20">
                <div className="text-3xl text-gray-700 py-6">Work Experience</div>
                <hr className="-mx-20" />
                <form onSubmit={handleSubmit}>
                { inputFields.map(inputField => (
                <div className="py-8">
                <div className="flex mb-4">
                    <span className="flex items-center justify-center block rounded-full border border-pink-600 h-6 w-6 text-xs font-bold text-pink-600 mr-3">+</span>
                    <span className="font-bold text-gray-800">Add Experience</span>
                </div>
                <div className="lg:flex mb-2 -mx-1">
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Organization Name</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Job Role</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                </div>
                <input className="mx-1" type="checkbox" name="" id="" />
                <label className="text-gray-600 font-light">&nbsp;&nbsp; Currently Working Here</label>
                <div className="lg:flex mb-2 -mx-1 my-5">
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Start Date</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                    <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">End Date</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Location</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                </div>
                <div className="lg:flex mb-2 -mx-1">
                    <div className="lg:w-full mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Description</label>
                        <textarea rows={5} className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                </div>
                <div className="flex justify-end py-6">
                        <button disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)} type="button" className="flex items-center bg-pink-600 text-white rounded hover:bg-pink-400 px-6 py-2 mx-4 focus:outline-none">
                            <span className="text-2xl px-3">+</span> Remove Experience
                        </button>
                        <button onClick={handleAddFields} type="button" className="flex items-center bg-amber-400 text-white rounded hover:bg-amber-600 px-6 py-2 focus:outline-none">
                            <span className="text-2xl px-3">+</span> Add Experience
                        </button>
                 </div>
                </div>
                )) }
                </form>
            </div>
        </div>
    );
}