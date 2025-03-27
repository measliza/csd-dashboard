import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CarouselPiece = () => {
    const [isRotatedButton1, setIsRotatedButton1] = useState(false);
    const [isRotatedButton2, setIsRotatedButton2] = useState(false);
    const [rotatedStates, setRotatedStates] = useState({});
    const [slider, setSlider] = useState([
    {
        id: "1",
        title: "Slider 1",
        subtitle: "",
        logo: "",
        image: "",
        firstbtntitle: "",
        firstbtnselect: "",
        secondbtntitle: "",
        secondbtnselect: ""
        },
    ]);

    const handleAddSlider = () => {
        const newSlider = {
            id: `${Date.now()}`,
            title: `Slider ${slider.length + 1}`,
            subtitle: "",
            logo: "",
            image: "",
            firstbtntitle: "",
            firstbtnselect: "",
            secondbtntitle: "",
            secondbtnselect: ""
        };

        setSlider([...slider, newSlider]);
    };

    const toggleRotation = (id) => {
        setRotatedStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const newSlider = Array.from(slider);
        const [reorderedSlider] = newSlider.splice(result.source.index, 1);
        newSlider.splice(result.destination.index, 0, reorderedSlider);

        setSlider(newSlider);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef} className='m-4'>
                    <ul class="h-auto  overflow-y-auto border rounded-t-lg mt-1">
                        {slider.map((sliders, index) => (
                            <Draggable
                                key={sliders.id}
                                draggableId={sliders.id}
                                index={index}
                                >
                                {(provided) => (
                                    <li
                                        className={`below-border ${index === sliders.length - 1 ? 'border-none' : ''}`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}>
                                            {/* Slider  */}
                                        <details className='group [&_summary::-webkit-details-marker]:hidden !border-b-1 '>
                                            <summary className='cursor-pointer flex justify-between rounded-lg px-2 py-2 pl-5 w-full '
                                                onClick={() => toggleRotation(sliders.id)}
                                                >
                                                <div className="flex ">
                                                    <svg class="cursor-grab size-5 my-auto" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"></path>
                                                    </svg>
                                                    <span className="ml-2 text-lg">{sliders.title}</span>
                                                </div>
                                                <span className=' shrink-0 transition-transform duration-500 group-open:-rotate-0 flex gap-2'>
                                                    <div className='block'>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            strokeWidth={1.5}
                                                            stroke="currentColor"
                                                            className="size-6 cursor-pointer"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </div>
                                                    <span
                                                        className={`cursor-pointer shrink-0 transition-transform duration-300 ${
                                                                rotatedStates[sliders.id] ? "rotate-180" : ""
                                                                }`}
                                                        >
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </summary>

                                            {/* title */}
                                            <div className="grid grid-cols-1 gap-4 px-4 py-2">
                                                <div className="flex-1">
                                                    <label className=" block text-xl font-medium leading-6 text-white-900">
                                                    Title
                                                    </label>
                                                    <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="!border-gray-300 block w-full border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6"
                                                    />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Subtitle */}
                                            <div className="grid grid-cols-1 gap-4 px-4 py-2">
                                                <div className="flex-1">
                                                    <label className="block text-xl font-medium leading-6 text-white-900">
                                                        Subtitle
                                                    </label>
                                                    <div className="mt-2">
                                                        <textarea className="!border-gray-300 h-32 block w-full rounded-md border-0 py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Image */}
                                            <div className="grid grid-cols-1 md:!grid-cols-2  gap-4 px-4 py-2">
                                                <div className="flex-1">
                                                    <label className="block text-xl font-medium leading-6 text-white-900">
                                                        Icon
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
                                            </div>
                                            {/* Button 1 */}
                                            <div className="grid grid-cols-1 md:!grid-cols-2  gap-4 px-4 py-2">
                                                <details className="group [&_summary::-webkit-details-marker]:hidden border-2 rounded-lg">
                                                    <summary
                                                        className="cursor-pointer flex justify-between rounded-lg py-2 w-full "
                                                    >
                                                        <div className="cursor-pointer flex items-center justify-between w-full px-4" onClick={() => setIsRotatedButton1(!isRotatedButton1)}>
                                                            <span className=" text-xl font-medium">
                                                                About
                                                            </span>
                                                            <div className={`cursor-pointer shrink-0 transition-transform duration-300 ${isRotatedButton1 ? 'rotate-180' : ''}`}>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="1.5"
                                                                    stroke="currentColor"
                                                                    class="size-6"
                                                                >
                                                                    <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </summary>
                                                    {/* button 1 */}
                                                    <div className="grid grid-cols-1 gap-4 px-4 py-2">
                                                        <div className="flex-1">
                                                            <label className=" block text-lg font-medium leading-6 text-white-900">
                                                            button1 name
                                                            </label>
                                                            <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                className="!border-gray-300 block w-full border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6"
                                                            />
                                                            </div>
                                                        </div>

                                                        <div className="flex-1">
                                                            <label for="countries" class="block text-lg font-medium leading-6 text-white-900">
                                                                Select page option
                                                            </label>
                                                            <select class="mt-2 !border-gray-300 block w-full border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6">
                                                                <option selected>Choose a page</option>
                                                                <option value="Home">Home</option>
                                                                <option value="About">About</option>
                                                                <option value="Contact">Contact</option>
                                                                <option value="Program">Program</option>
                                                            </select>
                                                        </div>
                                                        <div className="flex-1">
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
                                                </details>


                                                    <div className="flex flex-row items-center w-full gap-4">
                                                        <label className="block text-xl font-medium leading-6 text-white-900">
                                                            Display
                                                        </label>
                                                        <div className="mt-2">
                                                            <label className="toggle-switch mb-1">
                                                                <input type="checkbox" />
                                                                <span className="slider"></span>
                                                            </label>
                                                        </div>
                                                    </div>

                                            </div>
                                            {/* Button 2 */}
                                            <div className="grid grid-cols-1 md:!grid-cols-2  gap-4 px-4 py-2">
                                                <details className="group [&_summary::-webkit-details-marker]:hidden border-2 rounded-lg">
                                                    <summary
                                                        className="cursor-pointer flex justify-between rounded-lg py-2 w-full "
                                                    >
                                                        <div className="cursor-pointer flex items-center justify-between w-full px-4" onClick={() => setIsRotatedButton2(!isRotatedButton2)}>
                                                            <span className=" text-xl font-medium">
                                                                Explore Our Program
                                                            </span>
                                                            <div className={`cursor-pointer shrink-0 transition-transform duration-300 ${isRotatedButton2 ? 'rotate-180' : ''}`}>
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke-width="1.5"
                                                                    stroke="currentColor"
                                                                    class="size-6"
                                                                >
                                                                    <path
                                                                    stroke-linecap="round"
                                                                    stroke-linejoin="round"
                                                                    d="m4.5 15.75 7.5-7.5 7.5 7.5"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </summary>
                                                    {/* button 1 */}
                                                    <div className="grid grid-cols-1 gap-4 px-4 py-2">
                                                        <div className="flex-1">
                                                            <label className=" block text-lg font-medium leading-6 text-white-900">
                                                            button1 name
                                                            </label>
                                                            <div className="mt-2">
                                                            <input
                                                                type="text"
                                                                className="!border-gray-300 block w-full border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6"
                                                            />
                                                            </div>
                                                        </div>

                                                        <div className="flex-1">
                                                            <label for="countries" class="block text-lg font-medium leading-6 text-white-900">
                                                                Select page option
                                                            </label>
                                                            <select class="mt-2 !border-gray-300 block w-full border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6">
                                                                <option selected>Choose a page</option>
                                                                <option value="Home">Home</option>
                                                                <option value="About">About</option>
                                                                <option value="Contact">Contact</option>
                                                                <option value="Program">Program</option>
                                                            </select>
                                                        </div>
                                                        <div className="flex-1">
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
                                                </details>
                                            </div>
                                        </details>
                                    </li>
                                )}
                            </Draggable>
                        ))}
                    </ul>
                    <a
                        className="flex items-center p-3 text-sm font-medium text-blue-600 !border-b !border-x rounded-b-lg bg-gray-50  hover:bg-gray-100  hover:underline"
                        onClick={handleAddSlider}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        Add new slider
                    </a>
                </div>
            )}
        </Droppable>
    </DragDropContext>
    );
};

export default CarouselPiece;