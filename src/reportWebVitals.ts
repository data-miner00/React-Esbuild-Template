import { ReportCallback } from "web-vitals";

const reportWebVitals = (onPerfEntry?: ReportCallback): void => {
  if (onPerfEntry != null) {
    import("web-vitals")
      .then(({ onCLS, onFCP, onFID, onLCP, onTTFB }) => {
        onCLS(onPerfEntry);
        onFID(onPerfEntry);
        onFCP(onPerfEntry);
        onLCP(onPerfEntry);
        onTTFB(onPerfEntry);
      })
      .catch(console.error);
  }
};

export default reportWebVitals;
