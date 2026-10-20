import { useEffect } from "react";
import { AccentBaseHex } from "@resources/palette.js";

const WidgetStyleHref = "https://assets.calendly.com/assets/external/widget.css";
const WidgetScriptSrc = "https://assets.calendly.com/assets/external/widget.js";
const BadgeElementSelector = ".calendly-badge-widget";

let widgetScriptPromise;

// Injects Calendly's stylesheet and script once per page load and resolves
// with the `Calendly` global. Shared by every caller so remounts (React
// StrictMode, route changes) never add duplicate tags.
const loadCalendlyWidget = () => {
  if (!document.querySelector(`link[href="${WidgetStyleHref}"]`)) {
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

// Mounts Calendly's floating badge widget for the lifetime of the calling
// component and removes it on unmount. Calendly bakes its colors into inline
// styles at init, so the values passed here are only the initial paint — the
// live accent is applied by CalendlyBadge's stylesheet overrides.
export default function useCalendlyBadge({ url, text, textColor }) {
  useEffect(() => {
    let isCancelled = false;

    loadCalendlyWidget()
      .then((Calendly) => {
        if (isCancelled) return;
        console.debug("[useCalendlyBadge] initializing badge", url);
        Calendly.initBadgeWidget({
          url,
          text,
          color: AccentBaseHex,
          textColor,
          branding: true,
        });
      })
      .catch((error) => {
        console.debug("[useCalendlyBadge] widget unavailable", error);
      });

    return () => {
      isCancelled = true;
      document
        .querySelectorAll(BadgeElementSelector)
        .forEach((badge) => badge.remove());
    };
  }, [url, text, textColor]);
}
