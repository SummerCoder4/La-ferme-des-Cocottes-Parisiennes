const message = "Merci pour votre message, nous vous répondrons dans les plus brefs délais.";

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert(message);
});