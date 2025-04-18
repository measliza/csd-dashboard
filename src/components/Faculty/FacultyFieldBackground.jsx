import React, {useState} from 'react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import MediaLibraryModal from '../MediaLibraryModal';

const FacultyFieldBackground = () => {

    const [rotatedStates, setRotatedStates] = useState({});
    const [currentBackgroundId, setCurrentBackgroundId] = useState(null);
    const [isMediaLibraryOpen, setMediaLibraryOpen] = useState(false);
    const [background, setBackground] = useState([
    {
        id: "1",
        title: "Univeristy 1",
        image: "",
        },
    ]);

    const handleAddBackground = () => {
        const newBackground = {
            id: `${Date.now()}`,
            title: `University ${background.length + 1}`,
            image: "",
        };

        setBackground([...background, newBackground]);
    };

    const toggleRotation = (id) => {
        setRotatedStates((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const newBackground = Array.from(background);
        const [reorderedBackground] = newBackground.splice(result.source.index, 1);
        newBackground.splice(result.destination.index, 0, reorderedBackground);

        setBackground(newBackground);
    };

    const openMediaLibrary = (backgroundId, field) => {
        setCurrentBackgroundId(backgroundId);
        setMediaLibraryOpen(true);
    };

    const handleImageSelect = (imageUrl, field) => {
        if (field === "bg") {
            setBackground((prevBackground) =>
                prevBackground.map((item) =>
                    item.id === currentBackgroundId
                        ? { ...item, image: imageUrl ? `${imageUrl}` : "" }
                        : item
                )
            );
        }
        setMediaLibraryOpen(false);
    };

    return (
        <div>
            {/* Faculty Background */}
            <div className="flex-1">
                <label className="block text-xl font-medium leading-6 text-white-900">
                    Background
                </label>
                <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} className='mt-2'>
                                <ul class="h-auto overflow-y-auto border rounded-t-lg mt-1">
                                    {background.map((backgrounds, index) => (
                                        <Draggable
                                            key={backgrounds.id}
                                            draggableId={backgrounds.id}
                                            index={index}
                                            >
                                            {(provided) => (
                                                <li
                                                    className={`below-border ${index === backgrounds.length - 1 ? 'border-none' : ''}`}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    >
                                                    {/* Background  */}
                                                    <details className='group [&_summary::-webkit-details-marker]:hidden !border-b-1 '>
                                                        <summary className='cursor-pointer flex justify-between rounded-lg px-2 py-2 pl-5 w-full '
                                                            onClick={() => toggleRotation(backgrounds.id)}
                                                            >
                                                            <div className="flex ">
                                                                <div
                                                                    className="cursor-grab my-auto"
                                                                    {...provided.dragHandleProps}>
                                                                    <svg class="cursor-grab size-5 my-auto" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"></path>
                                                                    </svg>
                                                                </div>
                                                                <span className="ml-2 text-lg">{backgrounds.title}</span>
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
                                                                            rotatedStates[backgrounds.id] ? "rotate-180" : ""
                                                                            }`}
                                                                    >
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                                                    </svg>
                                                                </span>
                                                            </span>
                                                        </summary>

                                                        {/* Background name */}
                                                        <div className="grid grid-cols-1 gap-4 px-4 py-2">
                                                            <div className="flex-1">
                                                                <label className=" block text-xl font-medium leading-6 text-white-900">
                                                                Background name
                                                                </label>
                                                                <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    value={backgrounds.title}
                                                                    className="!border-gray-300 block w-full border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset !ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6"
                                                                />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Image */}
                                                        <div className="grid grid-cols-1 gap-4 px-4 py-2">
                                                            <div className="flex-1">
                                                                <label className="block text-xl font-medium leading-6 text-white-900">
                                                                    Image
                                                                </label>
                                                                <div className="flex items-center justify-center w-full mt-2 border-1">
                                                                    <label className="flex flex-col items-center justify-center w-full h-60 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                                                                        {backgrounds.image ? (
                                                                            <div>
                                                                                <img
                                                                                    src={backgrounds.image}
                                                                                    alt="Selected"
                                                                                    className="h-40 w-40 object-contain"
                                                                                />
                                                                                <div className="flex gap-3 mt-2 justify-center">
                                                                                    <svg
                                                                                        onClick={() => openMediaLibrary(backgrounds.id, "bg")}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        fill="none"
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth="1.5"
                                                                                        stroke="currentColor"
                                                                                        className="size-8 hover:text-red-700"
                                                                                    >
                                                                                        <path
                                                                                            strokeLinecap="round"
                                                                                            strokeLinejoin="round"
                                                                                            d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                                                                                        />
                                                                                    </svg>
                                                                                    <svg
                                                                                        onClick={() => handleImageSelect("", "bg")}
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        fill="none"
                                                                                        viewBox="0 0 24 24"
                                                                                        strokeWidth="1.5"
                                                                                        stroke="currentColor"
                                                                                        className="size-8 hover:text-red-700"
                                                                                    >
                                                                                        <path
                                                                                            strokeLinecap="round"
                                                                                            strokeLinejoin="round"
                                                                                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                                                        />
                                                                                    </svg>
                                                                                </div>
                                                                            </div>
                                                                        ) : (
                                                                            <div
                                                                                onClick={() => openMediaLibrary(backgrounds.id, "bg")}
                                                                                className="flex flex-col items-center justify-center pt-5 pb-6 "
                                                                            >
                                                                                <svg
                                                                                    className="w-8 h-8 mb-4 text-gray-500"
                                                                                    aria-hidden="true"
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    fill="none"
                                                                                    viewBox="0 0 20 16"
                                                                                >
                                                                                    <path
                                                                                        stroke="currentColor"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round"
                                                                                        strokeWidth="2"
                                                                                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                                                    />
                                                                                </svg>
                                                                                <p className="mb-2 text-sm text-gray-500">
                                                                                    <span className="font-semibold">Click to upload image</span>
                                                                                </p>
                                                                            </div>
                                                                        )}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            {isMediaLibraryOpen && (
                                                                <MediaLibraryModal
                                                                    onSelect={(imageUrl) => handleImageSelect(imageUrl, "bg")}
                                                                    onClose={() => setMediaLibraryOpen(false)}
                                                                />
                                                            )}
                                                        </div>
                                                        {/* Display button */}
                                                        <div className="grid grid-cols-1 gap-4 px-4 py-2">
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
                                                    </details>
                                                </li>
                                            )}
                                        </Draggable>
                                    ))}
                                </ul>
                                <a
                                    className="flex items-center p-3 text-sm font-medium text-blue-600 !border-b !border-x rounded-b-lg bg-gray-50  hover:bg-gray-100  hover:underline"
                                    onClick={handleAddBackground}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mr-2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    Add new background
                                </a>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    )
}

export default FacultyFieldBackground