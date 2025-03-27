import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CarouselPiece = () => {
    const [rotatedStates, setRotatedStates] = useState({});

    const [department, setDepartment] = useState([
        {
        id: "1",
        title: "Academics 1",
        subtitle: "",
        linkTitle: "",
        urlLink: "",
        logo: "",
        image: "",
        urlIcon: "",
        },
    ]);

    const handleAddPage = () => {
        const newDepartment = {
        id: `${Date.now()}`,
        title: `Academics ${department.length + 1}`,
        subtitle: "",
        linkTitle: "",
        urlLink: "",
        logo: "",
        image: "",
        urlIcon: "",
        };

        setDepartment([...department, newDepartment]); // Append new Department to the list
    };

    const toggleRotation = (id) => {
        setRotatedStates((prev) => ({
        ...prev,
        [id]: !prev[id],
        }));
    };

    const onDragEnd = (result) => {
        if (!result.destination) return;

        const newDepartment = Array.from(department);
        const [reorderedDepartment] = newDepartment.splice(result.source.index, 1);
        newDepartment.splice(result.destination.index, 0, reorderedDepartment);

        setDepartment(newDepartment);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
            {(provided) => (
            <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="mx-4 mb-4"
            >
                <ul class="h-auto overflow-y-auto mt-1 gap-2">
                {department.map((departments, index) => (
                    <Draggable
                    key={departments.id}
                    draggableId={departments.id}
                    index={index}
                    >
                    {(provided) => (
                        <li
                        className={`below-border border rounded-lg ${
                            index === department.length - 1 ? "border-none" : ""
                        }`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        >
                        <details className="group [&_summary::-webkit-details-marker]:hidden ">
                            <summary
                            className="flex justify-between rounded-lg px-2 py-2 pl-5 w-full "
                            onClick={() => toggleRotation(departments.id)}
                            >
                            <div className="flex ">
                                <svg
                                class=" size-5 my-auto"
                                viewBox="0 0 320 512"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path d="M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z"></path>
                                </svg>
                                <span className="ml-2 text-lg">
                                {departments.title}
                                </span>
                            </div>
                            <span className="shrink-0 transition-transform duration-500 group-open:-rotate-0 flex gap-2">
                                <div className="block">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6 cursor-pointer"
                                >
                                    <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                </svg>
                                </div>
                                <span
                                className={`shrink-0 transition-transform duration-300 ${
                                    rotatedStates[departments.id]
                                    ? "rotate-180"
                                    : ""
                                }`}
                                style={{ cursor: "pointer" }}
                                >
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
                                </span>
                            </span>
                            </summary>

                            <div className="flex flex-row gap-4 px-4 py-2">
                            <div className="flex-1">
                                <label className="block text-xl font-medium leading-6 text-white-900">
                                Title
                                </label>
                                <div className="mt-2">
                                <input
                                    type="text"
                                    className="block w-full border-0 rounded-md py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-2xl sm:leading-6"
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

                            <div className="flex flex-row gap-4 px-4 py-2">
                            <div className="flex-1">
                                <label className="block text-xl font-medium leading-6 text-white-900">
                                Subtitle
                                </label>
                                <div className="mt-2">
                                <textarea className="h-32 block w-full rounded-md border-0 py-2 pl-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-2xl sm:leading-6"></textarea>
                                </div>
                            </div>
                            </div>
                        </details>
                        </li>
                    )}
                    </Draggable>
                ))}
                </ul>
            </div>
            )}
        </Droppable>
        </DragDropContext>
    );
};

export default CarouselPiece;