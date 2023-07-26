import { ReportCallback } from "web-vitals";

const reportWebVitals = (onPerfEntry?: ReportCallback) => {
  if (onPerfEntry) {
    import("web-vitals").then(({ onCLS, onFCP, onFID, onLCP, onTTFB }) => {
      onCLS(onPerfEntry);
      onFID(onPerfEntry);
      onFCP(onPerfEntry);
      onLCP(onPerfEntry);
      onTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
