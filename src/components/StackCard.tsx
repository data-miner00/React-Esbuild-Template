import React from "react";

export type Props = {
  title: string;
  description: string;
  url: string;
};

function StackCard({ title, description, url }: Props): JSX.Element {
  return (
    <a
      href={url}
      target="_blank"
      className="block p-6 w-80 group group-hover:shadow-md border border-solid border-gray-500 rounded hover:border-gray-400"
    >
      <h4 className="font-bold text-lg">{title}</h4>
      <p className="my-3 text-gray-300">{description}</p>
      <button className="text-blue-400 group-hover:underline hover:text-blue-300">
        Documentation →
      </button>
    </a>
  );
}

export default StackCard;
