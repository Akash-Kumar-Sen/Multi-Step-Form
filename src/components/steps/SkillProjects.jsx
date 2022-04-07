import React from 'react'

export const SkillProjects = () => {
  return (
    <div>
            <div className="bg-white lg:w-3/3 lg:rounded-l-lg mx-6 px-6 lg:px-0 lg:mx-0 lg:px-20">
                <div className="text-3xl text-gray-700 py-6">Personal Informtion</div>
                <hr className="-mx-20" />
                <div className="py-8">
                    <div className="flex mb-4">
                        <span className="flex items-center justify-center block rounded-full border border-pink-600 h-6 w-6 text-xs font-bold text-pink-600 mr-3">0</span>
                        <span className="font-bold text-gray-800">Upload Image</span>
                    </div>
                    <div className="items-center justify-center w-1/4">
                        <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                            </svg>
                            <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo</p>
                        </div>
                        <input type="file" className="opacity-0" />
                        </label>
                    </div>
                </div>
                <hr className="-mx-20" />
                <div className="py-8">
                <div className="flex mb-4">
                    <span className="flex items-center justify-center block rounded-full border border-pink-600 h-6 w-6 text-xs font-bold text-pink-600 mr-3">1</span>
                    <span className="font-bold text-gray-800">Basic Information</span>
                </div>
                <div className="lg:flex mb-2 -mx-1">
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">First Name</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                    <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Middle Name</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Last Name</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                </div>
                <div className="lg:flex mb-2 -mx-1">
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Email Address</label>
                        <input type="email" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                    <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Contact Number</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                </div>
                <div className="lg:flex mb-2 -mx-1">
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Gender</label>
                        <select className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600">
                            <option value="M" className="text-gray-700">Male</option>
                            <option value="F" className="text-gray-700">Female</option>
                            <option value="DNS" className="text-gray-700">Prefer Not to Say</option>
                        </select>
                    </div>
                    </div>
                    <div className="lg:w-1/2  mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Date of Birth</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                </div>
                
                </div>
                <hr className="-mx-20" />
                <div className="py-8">
                <div className="flex mb-4">
                    <span className="flex items-center justify-center block rounded-full border border-pink-600 h-6 w-6 text-xs font-bold text-pink-600 mr-3">2</span>
                    <span className="font-bold text-gray-800">Address Information</span>
                </div>
                <div className="lg:flex mb-2 -mx-1">
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Country</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">State</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                </div>
                <div className="lg:flex mb-2 -mx-1">
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">City</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                    <div className="lg:w-1/2 mb-3 lg:mb-2 mx-1">
                    <div className="px-1">
                        <label className="text-gray-600 font-light">Street Address</label>
                        <input type="text" className="w-full mt-1 px-2 py-1 border rounded-lg text-gray-700 focus:outline-none focus:border-pink-600" />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}
