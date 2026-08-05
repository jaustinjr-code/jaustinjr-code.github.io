import { useCallback, useState } from "react";
import {
  ContactEmailAddress,
  ContactFormEmailLabel,
  ContactMailSubjectPrefix,
} from "@resources/strings.js";

// Controlled state and submit behavior for the contact form. Submitting
// composes a mailto: link to the portfolio inbox — subject tagged with the
// sender's name, body carrying the message plus their return-path email —
// and hands it to the browser's mail client. Zero backend, per the static
// hosting constraint.
export default function useContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  const handleFieldChange = useCallback((event) => {
    const { name, value } = event.target;
    console.debug("[useContactForm] field changed:", name);
    setFields((previous) => ({ ...previous, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.debug("[useContactForm] composing mailto draft");
      const subject = encodeURIComponent(
        `${ContactMailSubjectPrefix} ${fields.name}`,
      );
      const body = encodeURIComponent(
        `${fields.message}\n\n${ContactFormEmailLabel}: ${fields.email}`,
      );
      window.location.href = `mailto:${ContactEmailAddress}?subject=${subject}&body=${body}`;
    },
    [fields],
  );

  return { fields, handleFieldChange, handleSubmit };
}
