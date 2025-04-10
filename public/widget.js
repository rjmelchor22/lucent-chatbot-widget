
(function () {
  const iframe = document.createElement("iframe");
  iframe.src = "https://lucent-chatbot-ui.vercel.app";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "380px";
  iframe.style.height = "520px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "18px";
  iframe.style.zIndex = "9999999";
  iframe.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
  iframe.setAttribute("title", "Lucent Psych Chatbot");

  const closeButton = document.createElement("button");
  closeButton.innerText = "×";
  closeButton.style.position = "fixed";
  closeButton.style.bottom = "540px";
  closeButton.style.right = "20px";
  closeButton.style.backgroundColor = "#2E1B3B";
  closeButton.style.color = "white";
  closeButton.style.border = "none";
  closeButton.style.fontSize = "24px";
  closeButton.style.borderRadius = "50%";
  closeButton.style.width = "36px";
  closeButton.style.height = "36px";
  closeButton.style.cursor = "pointer";
  closeButton.style.zIndex = "10000000";

  document.body.appendChild(iframe);
  document.body.appendChild(closeButton);

  closeButton.addEventListener("click", function () {
    iframe.remove();
    closeButton.remove();
  });
})();
