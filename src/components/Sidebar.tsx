import React, { useState } from "react";
import { Sidebar as LucideSidebar } from "lucide-react";
import { ChevronRight } from "lucide-react";

interface SidebarProps {
  onSecondaryToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onSecondaryToggle }) => {
  const [secondaryExpanded, setSecondaryExpanded] = useState(false);

  const toggleSecondary = () => {
    setSecondaryExpanded(!secondaryExpanded);
    onSecondaryToggle();
  };

  return (
    <div
      className={`bg-gray-800 text-white pl-8 pt-4 p-10${
        secondaryExpanded ? "w-80" : "w-16"
      } h-screen`}
    >
      <h2 className="text-xl font-bold mb-4">Primary Sidebar</h2>
      <ul>
        <li>
          <button onClick={toggleSecondary} className="flex items-center">
            <span>Link 1</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </li>
        <li>
          <button onClick={toggleSecondary} className="flex items-center">
            <span>Link 2</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </li>
        <li>
          <button onClick={toggleSecondary} className="flex items-center">
            <span>Link 3</span>
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
