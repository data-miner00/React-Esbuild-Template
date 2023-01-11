import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import StackCard from "./StackCard";
import techData from "../data/TechnologyData.json";
import { referencePaneMotion } from "../motions/referencePaneMotion";

function ReferencePane(): JSX.Element {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  function togglePane(): void {
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
          data-testid="pane"
          initial={false}
          animate={show ? "open" : "closed"}
          className={`w-96 fixed top-0 left-0 bg-gray-700 h-screen overflow-y-auto`}
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
                className="flex flex-col gap-4 items-center overflow-y-scroll  pb-5"
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
        data-testid="pane-switch"
        className="h-7 w-7 rounded-full bg-gradient-to-br from-[#e0c3fc] to-[#8ec5fc] fixed left-8 top-8"
        onClick={togglePane}
      ></button>
    </>
  );
}

export default ReferencePane;
