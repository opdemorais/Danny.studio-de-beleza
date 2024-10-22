document.getElementById("whatsapp-btn").addEventListener("click", function () {
  const phoneNumber = "5575983520576"; // Substitua pelo número correto
  const message = encodeURIComponent(
    "Olá, gostaria de mais informações sobre os serviços do Danny Studio de Beleza."
  );
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappURL, "_blank");
});
