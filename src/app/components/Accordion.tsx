import React, { useState } from "react";

interface AccordionItem {
  title: string;
  contents: string[];
}

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full max-w-[80%] mx-auto">
      {items.map((item, index) => (
        <div key={item.title} className="border-b border-black">
          <button
            className="w-full bg-white text-left py-2 focus:outline-none"
            onClick={() => handleToggle(index)}
          >
            <div className="flex items-center">
              <span className="ml-2 text-lg">
                {activeIndex === index ? "↓" : "↑"}
              </span>
              <span className="text-lg font-semibold text-black px-2">
                {item.title}
              </span>
            </div>
          </button>
          {activeIndex === index && (
            <div className="my-2 flex flex-col gap-3">
              {item.contents.map((content) => (
                <p key={content[0]} className="text-gray-200 text-sm ml-4">
                  {content}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
