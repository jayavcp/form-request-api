const messageForm = document.querySelector("#messageForm");

function handleSubmitMessageForm(event) {
  event.preventDefault();
  console.log("Form submitted!");

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  // make a request to the server with our form data as the body
  fetch("http://localhost:3000/messages", {
    method: "POST", // This is where we set the POST HTTP verb
    headers: {
      "Content-Type": "application/json", //This tells the server we're sending stringified JSON data
    },
    body: JSON.stringify({ message }),
  });
}

messageForm.addEventListener("submit", handleSubmitMessageForm);
