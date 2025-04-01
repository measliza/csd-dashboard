import React, { useState } from "react";
import { TbCarouselHorizontal, TbCodeDots } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { LuColumns3 } from "react-icons/lu";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import CarouselPiece from "./Carousel/CarouselPiece";
import { RiInformationLine } from "react-icons/ri";
import { LuSchool } from "react-icons/lu";
import { GrGallery } from "react-icons/gr";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BannerPiece from "./Banner/BannerPiece";
import ServicePiece from "./Service/ServicePiece";
import ProgramPiece from "./Program/ProgramPiece";
import AcademicPiece from "./Academic/AcademicPiece";
import InformationPiece from "./Information/InformationPiece";

const sectionOptions = [
  {
    type: "Slideshow",
    component: CarouselPiece,
    icon: TbCarouselHorizontal,
    label: "Slideshow",
  },
  {
    type: "Banner",
    component: BannerPiece,
    icon: CgWebsite,
    label: "Banner",
  },
  {
    type: "Service",
    component: ServicePiece,
    icon: LuColumns3,
    label: "Service",
  },
  {
    type: "Programs",
    component: ProgramPiece,
    icon: TbCodeDots,
    label: "Programs",
  },
  {
    type: "Academic",
    component: AcademicPiece,
    icon: HiOutlineAcademicCap,
    label: "Academic",
  },
  {
    type: "Information",
    component: InformationPiece,
    icon: RiInformationLine,
    label: "Information",
  },
  {
    type: "Facilities",
    component: () => (
      <div className="bg-gray-50 p-2 rounded-lg">
        <h1 className="text-xl font-bold text-center">Facilities Section</h1>
      </div>
    ),
    icon: LuSchool,
    label: "Facilities",
  },
  {
    type: "Gallery",
    component: () => (
      <div className="bg-gray-50 p-2 rounded-lg">
        <h1 className="text-xl font-bold text-center">Gallery Section</h1>
      </div>
    ),
    icon: GrGallery,
    label: "Gallery",
  },
];

const PageSection = () => {
  const [showSection, setShowSection] = useState(false);
  const [selectedSections, setSelectedSections] = useState([]);

  const handleAddPage = () => {
    setShowSection(!showSection);
  };

  const handleAddSection = (sectionType) => {
    setSelectedSections([
      ...selectedSections,
      { id: Date.now(), type: sectionType },
    ]);
    setShowSection(false);
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newSections = Array.from(selectedSections);
    const [reorderedItem] = newSections.splice(result.source.index, 1);
    newSections.splice(result.destination.index, 0, reorderedItem);

    setSelectedSections(newSections);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="sections">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {selectedSections.map((section, index) => (
                <Draggable
                  key={section.id.toString()}
                  draggableId={section.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="bg-gray-50 rounded-lg border border-gray-300 mx-4"
                    >
                      {sectionOptions
                        .filter((s) => s.type === section.type)
                        .map((s, i) => {
                          const SectionComponent = s.component;
                          return <SectionComponent key={i} />;
                        })}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Add new section button */}
      <a
        className={`mx-4 cursor-pointer flex items-center p-3 text-sm font-medium text-blue-600 border-t border ${
          showSection ? "rounded-t-lg" : "rounded-lg"
        } bg-gray-50 hover:bg-gray-100 hover:underline mt-4`}
        onClick={handleAddPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6 mr-2 ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        Add new section
      </a>

      {/* Display section options when Add new section is clicked */}
      {showSection && (
        <div className="bg-gray-50 h-auto mx-4 border !border-gray-200 rounded-b-lg overflow-y-auto mb-4">
          <div className="grid !grid-cols-1 sm:!grid-cols-2 md:!grid-cols-3 lg:!grid-cols-4 gap-8 p-8">
            {sectionOptions.map((section) => (
              <div
                key={section.type}
                className="cursor-pointer hover:!bg-gray-100 bg-white grid-cols-1 h-auto border rounded-xl"
                onClick={() => handleAddSection(section.type)}
              >
                <section.icon className="w-24 h-24 mx-auto mt-8" />
                <h1 className="text-center text-2xl font-medium !mb-8">
                  {section.label}
                </h1>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PageSection;
