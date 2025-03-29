import React, { useState, useEffect } from 'react';
import { API_ENDPOINTS } from '../service/APIConfig';

const MediaLibraryModal = ({ onSelect, onClose }) => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${API_ENDPOINTS.getImages}`)
            .then(response => response.json())
            .then(data => {
                if (data.status === 200 && data.data) {
                    setImages(data.data);
                }
            })
            .catch(error => console.error("Error fetching images:", error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center">
            <div className="m-auto bg-gray-50 p-6 rounded-lg shadow-lg w-[600px] max-h-[80vh] overflow-y-auto">
                <h2 className="text-lg font-semibold mb-0">Select an Image</h2>

                <div className="flex justify-start py-2 items-center gap-2">
                    <div className="relative max-w-sm">
                        <input className="w-60 px-4 h-8 rounded-md shadow-sm border !ring-gray-500 !border-gray-400" type="search" placeholder="Search images"/>
                    </div>
                    <div className="relative">
                        <a href="#" className="h-8 !bg-blue-700 text-white px-1 rounded-md hover:!bg-blue-700 flex items-center justify-center" aria-current="page">
                            <i className="ti ti-search text-xl"></i>
                        </a>
                    </div>
                </div>

                {loading ? (
                    <p className="text-center py-4">Loading images...</p>
                ) : (
                    <div className="grid grid-cols-4 gap-4">
                        {images.map((image) => (
                            <div key={image.image_id} className="relative border rounded-lg overflow-hidden cursor-pointer"
                                onClick={() => {
                                    onSelect(image.image);
                                    onClose();
                                }}>
                                <img src={`${image.image_url}`}
                                     alt={`Media ${image.img}`}
                                     className="w-full h-auto object-cover" />
                            </div>
                        ))}
                    </div>
                )}

                <button className="mt-4 px-4 py-2 !bg-red-500 text-white rounded-lg" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default MediaLibraryModal;