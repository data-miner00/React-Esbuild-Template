import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";

import techData from "../data/TechnologyData.json";

function ReferencePane(): JSX.Element {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-gray-50/80 dark:bg-gray-700/80 z-10"
          onClick={() => setOpen((open) => !open)}
        >
          <aside
            onClick={(event) => event.stopPropagation()}
            data-testid="pane"
            className="w-96 bg-gray-100 dark:bg-gray-700 h-screen overflow-y-auto border-gray-200 dark:border-gray-600 border-r border-solid"
          >
            <header className="border-b border-solid border-gray-200 dark:border-gray-600 flex">
              <div className="border-r border-solid border-gray-200 dark:border-gray-600 w-16"></div>
              <div className="p-5">Reference Panel</div>
            </header>
            <main>
              <section className="p-5 border-b border-solid border-gray-200 dark:border-gray-600 bg-gray-300/50 dark:bg-gray-800/50">
                <p>
                  This component serves as a quicklinks to the devtools used
                  within the template. Feel free to delete this component if you
                  don't need it or after your development.
                </p>
              </section>
              <nav className="flex my-5">
                <button className="block px-5 border-r border-solid border-gray-600">
                  Docs Links
                </button>
                <button className="block px-5">Template Features</button>
              </nav>
            </main>
          </aside>
        </div>
      )}

      <button
        data-testid="pane-switch"
        className="h-10 w-10 rounded-full flex place-items-center fixed left-5 top-3 z-20"
        onClick={() => setOpen((open) => !open)}
      >
        <RxHamburgerMenu className="block" size="24px" />
      </button>
    </>
  );
}

export default ReferencePane;
