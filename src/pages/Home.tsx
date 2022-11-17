import React from "react";

import StackCard from "../components/StackCard";
import techData from "../data/TechnologyData.json";

function Home(): JSX.Element {
  return (
    <main className="">
      <header className="mt-4 mb-16">
        <h1 className="my-awesome-h1">The Ultimate Template</h1>
        <p className="text-center text-gray-500 dark:text-gray-300">
          Batteries included React template that supercharges your development.
        </p>
      </header>

      <div className="mx-auto w-2/3 flex flex-wrap gap-7 justify-center items-center">
        {techData.map((data, index) => (
          <StackCard
            key={index}
            title={data.title}
            description={data.description}
            url={data.url}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;
