import { useState } from "react";
import { useTranslation } from "react-i18next";

import StackCard from "./StackCard";
import techData from "../data/TechnologyData.json";

function ReferencePane(): JSX.Element {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);

  function togglePane() {
    setOpen((previous) => !previous);
  }

  return open ? (
    <aside
      className="w-96 fixed top-0 left-0 p-3 bg-gray-700 h-screen overflow-y-auto"
      onClick={togglePane}
    >
      <div className="relative h-full">
        <header className=" bg-gray-700 text-center text-lg font-semibold mb-6 w-full h-7 ">
          Development Reference
        </header>
        <div className="flex flex-col gap-4 items-center">
          {techData.map((data, index) => (
            <StackCard
              key={index}
              title={data.title}
              description={t(data.title)}
              url={data.url}
            />
          ))}
        </div>
      </div>
    </aside>
  ) : (
    <button
      className="h-5 w-5 rounded-full bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] fixed left-12 bottom-12"
      onClick={togglePane}
    ></button>
  );
}

export default ReferencePane;
