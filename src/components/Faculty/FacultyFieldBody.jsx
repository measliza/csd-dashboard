import React, { useState } from 'react'
import FacultyFieldBackground from './FacultyFieldBackground';
import FacultyFieldInfo from './FacultyFieldInfo';
import FacultyFieldContactInfo from './FacultyFieldContactInfo';
import FacultyFieldSocial from './FacultyFieldSocial';

const FacultyFieldBody = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className='px-8 py-2 mb-1'>
            <div className="tabs">
                <div className="flex">
                    <ul className="flex items-center h-12 bg-gray-100 rounded-lg transition-all duration-300 p-2 overflow-hidden">
                        <li>
                            <a
                                href="javascript:void(0)"
                                className={`mx-2 inline-block py-1.5 px-6 text-gray-600 hover:text-gray-800 font-medium ${
                                    activeTab === 1
                                        ? 'bg-white rounded-lg text-gray-600'
                                        : 'tablink'
                                } whitespace-nowrap`}
                                onClick={() => setActiveTab(1)}
                                role="tab"
                            >
                                English
                            </a>
                        </li>
                        <li>
                            <a
                                href="javascript:void(0)"
                                className={`mx-2 inline-block py-1.5 px-6 text-gray-600 hover:text-gray-800 font-medium ${
                                    activeTab === 2
                                        ? 'bg-white rounded-lg text-gray-600'
                                        : 'tablink'
                                } whitespace-nowrap`}
                                onClick={() => setActiveTab(2)}
                                role="tab"
                            >
                                Khmer
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="mt-3">
                    {/* First row */}
                    <div className="flex flex-row gap-4 py-2 mb-1">
                        <div className="flex-1">
                            <label className="block text-xl font-medium leading-6 text-white-900">
                            Full name
                            </label>
                            <div className="mt-2">
                            <input
                                type="text"
                                className="block w-full !border-gray-200 border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6"
                            />
                            </div>
                        </div>

                        <div className="flex-1">
                            <label className="block text-xl font-medium leading-6 text-white-900">
                            Position
                            </label>
                            <div className="mt-2">
                            <input
                                type="text"
                                className="block w-full !border-gray-200 border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6"
                            />
                            </div>
                        </div>

                        <div className="flex-non">
                            <label className="block text-xl font-medium leading-6 text-white-900">
                            Display
                            </label>
                            <div className="mt-2">
                            <label class="toggle-switch mt-2">
                                <input type="checkbox" />
                                <span class="slider"></span>
                            </label>
                            </div>
                        </div>
                    </div>
                    {/* Second row */}
                    <div>
                        <div className="grid grid-cols-1 md:!grid-cols-2 gap-4 py-2">
                            <div className="flex-1">
                                <label className="block text-xl font-medium leading-6 text-white-900">
                                    Photo
                                </label>
                                <div class="flex items-center justify-center w-full mt-2 border-1">
                                <label
                                    for="dropzone-file"
                                    class="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                                >
                                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                    <svg
                                        class="w-8 h-8 mb-4 text-gray-500 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                        </svg>
                                        <p class="mb-2 text-sm text-gray-500 ">
                                        <span class="font-semibold">
                                        Click to upload
                                        </span>{" "}
                                        or drag and drop
                                        </p>
                                        <p class="text-xs text-gray-500">
                                        SVG, PNG, JPG or GIF{" "}
                                        </p>
                                        </div>
                                        <input
                                        id="dropzone-file"
                                        type="file"
                                        class="hidden"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className="flex-1">
                                <label className="block text-xl font-medium leading-6 text-white-900">
                                    Portfolio url links
                                </label>
                                <div className="mt-2">
                                    <textarea className="!border-gray-300 h-60 block w-full rounded-md border-0 py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Third row */}
                    <div>
                        <div className="grid grid-cols-1 md:!grid-cols-3 gap-4 py-2">
                            {/* Social */}
                            <FacultyFieldSocial/>

                            {/* Contact Info */}
                            <FacultyFieldContactInfo/>

                            {/* Faculty Backgorund */}
                            <FacultyFieldBackground/>
                        </div>
                    </div>
                    {/* Fourth row */}
                    <div>
                        <div className="grid grid-cols-1 gap-4 py-2">
                            {/* Faculty Information */}
                            <FacultyFieldInfo/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyFieldBody