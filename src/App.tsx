import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Loading from "./components/Loading";
import ReferencePane from "./components/ReferencePane";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(async () => await import("./pages/Home"));
const Features = lazy(async () => await import("./pages/Features"));
const About = lazy(async () => await import("./pages/About"));
const NotFound = lazy(async () => await import("./pages/NotFound"));

const App = (): JSX.Element => (
  <>
    <Header />
    <ReferencePane />

    <ErrorBoundary fallback="Routing Error">
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </React.Suspense>
    </ErrorBoundary>
  </>
);

export default App;
