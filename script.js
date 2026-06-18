// Contact form: compose a routed mailto: handoff (no backend).
// Swap CONTACT_INBOX before launch if the destination changes.
const CONTACT_INBOX = "info@kairosx.com";

const form = document.querySelector("#contactForm");
const formStatus = document.querySelector("#formStatus");

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim();
    const organization = (data.get("organization") || "").toString().trim();
    const type = (data.get("type") || "General enquiry").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = `KairosX enquiry — ${type}`;
    const bodyLines = [
      `Name: ${name}`,
      `Organization: ${organization || "—"}`,
      `Contact type: ${type}`,
      "",
      message,
    ];

    const mailto =
      `mailto:${CONTACT_INBOX}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailto;
    formStatus.textContent =
      "Opening your email client with the message prepared. If nothing happens, write to " +
      CONTACT_INBOX + ".";
  });
}
