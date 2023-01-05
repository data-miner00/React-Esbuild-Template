import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import StackCard from "./StackCard";
import techData from "../data/TechnologyData.json";
import { referencePaneMotion } from "../motions/referencePaneMotion";

function ReferencePane(): JSX.Element {
  const { t } = useTranslation();
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);

  function togglePane() {
    if (loading) return;
    setLoading(true);
    if (open) {
      setShow((previous) => !previous);
      setTimeout(() => {
        setOpen((previous) => !previous);
        setLoading(false);
      }, 1500);
    } else {
      setOpen((previous) => !previous);
      setTimeout(() => {
        setShow((previous) => !previous);
        setLoading(false);
      }, 500);
    }
  }

  return (
    <>
      {open && (
        <motion.aside
          initial={false}
          animate={show ? "open" : "closed"}
          className={`w-96 fixed top-0 left-0 bg-gray-700 h-screen overflow-y-auto`}
          onClick={togglePane}
        >
          <motion.div
            variants={referencePaneMotion}
            className="relative h-full"
          >
            <header className="text-center text-lg font-semibold w-full py-8">
              Development Reference
            </header>
            <div>
              <div
                className="flex flex-col gap-4 items-center overflow-y-scroll"
                style={{ height: "calc(100vh - 92px)" }}
              >
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
          </motion.div>
        </motion.aside>
      )}

      <button
        className="h-7 w-7 rounded-full bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] fixed left-12 top-12"
        onClick={togglePane}
      ></button>
    </>
  );
}

export default ReferencePane;
