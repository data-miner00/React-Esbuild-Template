import React from "react";
import Form from "../components/Form";

class About extends React.Component {
  public render(): JSX.Element {
    return (
      <div className="max-w-[1400px] mx-auto md:px-8">
        <h1 className="text-4xl font-bold mb-10">All about this template</h1>
        <Form />
      </div>
    );
  }
}

export default About;
