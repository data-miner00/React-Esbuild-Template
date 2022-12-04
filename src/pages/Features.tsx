import React from "react";
import { getVariable, Variable } from "../utils/getVariable";

function Features(): JSX.Element {
  const features: Array<string> = [
    "Latest React 18",
    "Latest Tailwind v3",
    "Jest with @testing-library/react configured",
    "Prettier formatter",
    "Dark mode",
    "Internationalization",
    "Configurable linter rules",
    "Routes configured",
    "Not Found page",
    "Loader",
    "Environment variables & helpers",
    "Pnpm package manager",
    "GitHub workflows",
  ];

  return (
    <div className="max-w-[1400px] mx-auto md:px-8">
      <h1 className="text-xl font-bold mb-10">
        List of features that are baked into this template
      </h1>

      <ul className="flex flex-col gap-2">
        {features.map((feature) => (
          <li className="border dark:border-gray-600 border-gray-200 border-solid p-3">
            ✨ {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Features;
