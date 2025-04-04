import React, { useEffect, useState } from 'react'

const PageDashboard = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [pageItems, setPageItems] = useState([
        {
            id: 1,
            title: 'Home Page',
            page: 'Home',
            language: 'English',
            display: true
        },
        {
            id: 2,
            title: 'About Page',
            page: 'About',
            language: 'Khmer',
            display: false
        },
        {
            id: 3,
            title: 'Contact Page',
            page: '',
            language: 'English',
            display: true
        }
    ]);

    const duplicateItem = (index) => {
        const itemToDuplicate = pageItems[index];

        const baseTitle = itemToDuplicate.title.replace(/\s\(copy(?:\s\d+)?\)$/i, '');

        const copyCount = pageItems.filter(item =>
            item.title.startsWith(baseTitle + ' (copy')
        ).length;

        const newTitle =
            copyCount === 0
                ? `${baseTitle} (copy)`
                : `${baseTitle} (copy ${copyCount})`;

        const newItem = {
            ...itemToDuplicate,
            id: Date.now(),
            title: newTitle,
            display: false,
            page: "",
        };

        const newItems = [...pageItems];
        newItems.splice(index + 1, 0, newItem);
        setPageItems(newItems);
    };

    return (
        <div className="relative overflow-x-auto shadow-md px-8">
            <table className="w-full text-sm text-left border border-gray-200 text-gray-500 ">
                <thead className="text-xs text-gray-700  uppercase bg-gray-50 ">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Menu
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Language
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className=" px-6 py-3">
                            {/* Action */}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {pageItems.map((item, index) => (
                        <tr key={item.id} className="odd:bg-white even:bg-gray-50 border">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                {item.title}
                            </th>
                            <td className="px-6 py-4">{item.page}</td>
                            <td className="px-6 py-4">{item.language}</td>
                            <td className="px-6 py-4">
                                <span className={`${item.display ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'} text-xs font-medium me-2 px-2.5 py-0.5 rounded-xl`}>
                                    {item.display ? 'Enable' : 'Disable'}
                                </span>
                            </td>
                            <td className="px-6 py-4 flex gap-2 items-center relative">
                                <div className="relative">
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                                        className="font-medium text-gray-900 hover:text-blue-500"
                                    >
                                        <i className="ti ti-dots-vertical text-xl"></i>
                                    </button>
                                    {activeDropdown === item.id && (
                                        <div className="fixed right-0 mt-2 w-36 mr-8 bg-white border border-gray-300 rounded-md shadow-md z-50">
                                            <div className="py-1">
                                                <a href="#" className="flex gap-2 items-center px-4 py-2 hover:bg-blue-100">
                                                    <i className="ti ti-edit text-gray-500 text-xl"></i>
                                                    <span className="text-sm text-gray-700">Edit</span>
                                                </a>
                                                <a href="#" className="flex gap-2 items-center px-4 py-2 hover:bg-blue-100">
                                                    <i className="ti ti-trash text-gray-500 text-xl"></i>
                                                    <span className="text-sm text-gray-700">Delete</span>
                                                </a>
                                                <a onClick={() => duplicateItem(index)} className="cursor-pointer flex gap-2 items-center px-4 py-2 hover:bg-blue-100">
                                                    <i className="ti ti-copy text-gray-500 text-xl"></i>
                                                    <span className="text-sm text-gray-700">Duplicate</span>
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PageDashboard