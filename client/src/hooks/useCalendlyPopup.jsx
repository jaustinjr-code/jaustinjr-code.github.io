import { useCallback, useEffect } from "react";

const WidgetStyleHref = "https://assets.calendly.com/assets/external/widget.css";
const WidgetScriptSrc = "https://assets.calendly.com/assets/external/widget.js";

let widgetScriptPromise;

// Injects Calendly's stylesheet and script once per page load and resolves
// with the `Calendly` global. Shared by every caller so remounts (React
// StrictMode, route changes) never add duplicate tags.
const loadCalendlyWidget = () => {
  // Prefix match so a copy of the stylesheet that carries a query string
  // (cache-busting or version params) still counts as already loaded.
  if (!document.querySelector(`link[href^="${WidgetStyleHref}"]`)) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = WidgetStyleHref;
    document.head.appendChild(stylesheet);
  }

  if (window.Calendly) return Promise.resolve(window.Calendly);

  widgetScriptPromise ??= new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = WidgetScriptSrc;
    script.async = true;
    script.onload = () => resolve(window.Calendly);
    script.onerror = () => {
      script.remove();
      widgetScriptPromise = undefined;
      reject(new Error("Calendly widget script failed to load"));
    };
    document.body.appendChild(script);
  });
  return widgetScriptPromise;
};

// Preloads Calendly's widget and returns a handler that opens the booking
// popup for `url`. If the widget never loaded (blocked script, offline), the
// handler falls back to opening the booking page in a new tab so the button
// always does something.
export default function useCalendlyPopup(url) {
  useEffect(() => {
    loadCalendlyWidget().catch((error) => {
      console.debug("[useCalendlyPopup] widget unavailable", error);
    });
  }, []);

  return useCallback(() => {
    if (window.Calendly) {
      console.debug("[useCalendlyPopup] opening popup", url);
      window.Calendly.initPopupWidget({ url });
      return;
    }
    console.debug("[useCalendlyPopup] widget missing, opening link", url);
    window.open(url, "_blank", "noopener,noreferrer");
  }, [url]);
}
