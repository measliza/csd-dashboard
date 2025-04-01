import React, { useState, useRef, useEffect } from "react";
import { BiDownArrow } from "react-icons/bi";
import { BiUpArrow } from "react-icons/bi";

const EventsFormSection = () => {
    const [favorite, setFavorite] = useState("");
    const [selectedFavorite, setSelectedFavorite] = useState("Yes");
    const [tags, setTags] = useState("");
    const [date, setDate] = useState("");

    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    // Handle tags input
    const handleTagsChange = (e) => {
        setTags(e.target.value);
    };

    // Handle date input change
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    // Handle favorite selection
    const handleFavoriteSelect = (value) => {
        setSelectedFavorite(value);
        setFavorite("");
    };

    // Handle dropdown toggle
    const toggleFavoriteDropdown = () => {
        setFavorite(favorite === "" ? "open" : "");
    };

    // Close the dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                buttonRef.current && !buttonRef.current.contains(event.target)
            ) {
                setFavorite("");
            }
        };

        // Add event listener on mount
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex justify-center items-center ">
            {/* Left Panel */}
            <div className="w-full bg-white  rounded-lg shadow-md py-2">
                <div className="space-y-4">
                    {/* Tags Input */}
                    <div>
                        <label className="block text-xl font-medium text-gray-700">Tags</label>
                        <input
                            type="text"
                            value={tags}
                            onChange={handleTagsChange}
                            className="mt-2 w-full py-2 border !border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="tags"
                        />
                    </div>

                    {/* Date Input */}
                    <div>
                        <label htmlFor="event-date" className="block text-xl font-medium text-gray-700">
                            Event Date
                        </label>
                        <input
                            type="date"
                            id="event-date"
                            value={date}
                            onChange={handleDateChange}
                            className="mt-2 w-full py-2  border !border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    {/* Favorite Dropdown */}
                    <div>
                        <div className="grid grid-cols-1 gap-2 ">
                            <label class="block text-xl font-medium leading-6 text-white-900">
                            Favorite
                            </label>
                            <select class="!border-gray-300 block w-full border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6">
                                <option selected>Choose Options</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsFormSection;
