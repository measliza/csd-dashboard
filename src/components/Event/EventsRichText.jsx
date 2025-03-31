import React, { useState, useMemo } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EventsRichText = ({ initialContent = "" }) => { 
  const [richTextContent, setRichTextContent] = useState(initialContent); 

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["bold", "italic", "underline"],
        [{ align: [] }],
        ["link", "image"],
        ["blockquote"],
        [{ direction: "rtl" }],
      ],
    }),
    []
  );

  const formats = useMemo(
    () => [
      "header",
      "font",
      "list",
      "bullet",
      "bold",
      "italic",
      "underline",
      "align",
      "link",
      "image",
      "blockquote",
      "direction",
    ],
    []
  );

  const handleChange = (content) => {
    setRichTextContent(content);
  };

  return (
    <div className="w-full">
      <div className="py-2">
        <div className="w-full ">
          <label
            htmlFor="event-description"
            className="block text-xl font-medium text-gray-700"
          >
            Description
          </label>
          <div className="mt-1 h-full bg-white rounded-md shadow-sm">
            <ReactQuill
              id="event-description"
              value={richTextContent}
              onChange={handleChange}
              modules={modules}
              formats={formats}
              theme="snow"
              className="w-full h-full"
              placeholder="Enter event description..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsRichText;