import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface TabProps {
  label: string;
  icon?: IconDefinition;
  content: React.ReactNode;
}

interface Props {
  tabs: TabProps[];
}

export default function Tabs({ tabs }: Props) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex border-b">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`p-4 -mb-px ${
              activeTab === index
                ? "border-b-2 border-b-primary text-primary"
                : "text-gray-600 hover:text-rprimary"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.icon && <FontAwesomeIcon className="mr-2" icon={tab.icon} />}
            {tab.label && tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeTab].content}</div>
    </div>
  );
}
