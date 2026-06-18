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
    const email = (data.get("email") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();

    const subject = `KairosX enquiry${name ? ` — ${name}` : ""}`;
    const bodyLines = [
      `Name: ${name}`,
      `Organization: ${organization || "—"}`,
      `Email: ${email}`,
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
