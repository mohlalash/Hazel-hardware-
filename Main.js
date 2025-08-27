// Handle Sales Form
document.addEventListener("DOMContentLoaded", () => {
  const salesForm = document.getElementById("salesForm");
  if (salesForm) {
    salesForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(salesForm);
      const material = data.get("material");
      const qty = data.get("quantity");
      const price = data.get("price");
      const lang = data.get("language");
      const country = data.get("country");
      const total = qty * price;

      // Create receipt
      const receipt = `
        Order Receipt
        --------------------
        Material: ${material}
        Quantity: ${qty}
        Price: ${price}
        Total: ${total}
        Language: ${lang}
        Country: ${country}
      `;
      alert(receipt);

      // Send via Email
      window.location.href = `mailto:orders@hardwarestore.com?subject=New Order&body=${encodeURIComponent(receipt)}`;

      // WhatsApp link
      window.open(`https://wa.me/27600123456?text=${encodeURIComponent(receipt)}`, "_blank");

      // SMS (only works on mobile)
      window.location.href = `sms:+27600123456?body=${encodeURIComponent(receipt)}`;

      window.print(); // Print receipt
    });
  }

  // Handle Chat Form
  const chatForm = document.getElementById("chatForm");
  if (chatForm) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = new FormData(chatForm).get("message");
      window.location.href = `mailto:support@hardwarestore.com?subject=Chat Message&body=${encodeURIComponent(msg)}`;
    });
  }
});
