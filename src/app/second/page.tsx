"use client";
import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import BreadCrumb from "@/components/BreadCrumb";

interface BreadcrumbOption {
  value: string;
  label: string;
}

const Second: React.FC = () => {
  const [secondaryVisible, setSecondaryVisible] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState<BreadcrumbOption[]>([]);
  const [selectedBreadcrumb, setSelectedBreadcrumb] =
    useState<BreadcrumbOption | null>(null);

  const toggleSecondarySidebar = () => setSecondaryVisible(!secondaryVisible);

  const handleBreadcrumbClick = (index: number) => {
    setBreadcrumbs((prevBreadcrumbs) => prevBreadcrumbs.slice(0, index + 1));
    setSelectedBreadcrumb(null);
  };

  const handleDropdownMenuChange = (
    selectedItem: { value: string; label: string } | null
  ) => {
    if (selectedItem?.value.startsWith("ItemList")) {
      const itemIndex = parseInt(
        selectedItem.value.replace("ItemList", ""),
        10
      );
      setBreadcrumbs((prevBreadcrumbs) => [
        ...prevBreadcrumbs.slice(0, prevBreadcrumbs.length - 1),
        { value: `ItemList${itemIndex}`, label: `ItemList${itemIndex}` },
      ]);
      setSelectedBreadcrumb({ ...selectedItem });
    } else {
      setBreadcrumbs((prevBreadcrumbs) => [
        ...prevBreadcrumbs,
        selectedItem || { value: "", label: "" },
      ]);
      setSelectedBreadcrumb(selectedItem);
    }
  };

  return (
    <div className="flex h-screen">
      <aside className="transition-all duration-300 w-64">
        <Sidebar onSecondaryToggle={toggleSecondarySidebar} />
      </aside>
      {secondaryVisible && (
        <div className="bg-gray-700 text-white p-4 mt-4 w-64">
          <h2 className="text-xl font-bold mb-4">Secondary Sidebar</h2>
          <ul>
            <li>Secondary Link 1</li>
            <li>Secondary Link 2</li>
            <li>Secondary Link 3</li>
          </ul>
        </div>
      )}
      <div className="flex-1 overflow-x-hidden overflow-y-auto p-4">
        <div className="mb-4">
          <BreadCrumb
            breadcrumbs={breadcrumbs.map((breadcrumb) => breadcrumb.label)}
            onItemClick={handleBreadcrumbClick}
            selectedBreadcrumb={selectedBreadcrumb}
            onDropdownMenuChange={handleDropdownMenuChange}
          />
        </div>
        <h3>{selectedBreadcrumb?.label || "No selection"}</h3>
      </div>
    </div>
  );
};

export default Second;
