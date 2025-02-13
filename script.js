document.querySelector(".valentines").addEventListener("click", function () {
  const envelope = document.querySelector(".envelope");
  envelope.classList.toggle("open"); // Toggle open/close state

  // Clear title and insert buttons when opening
  if (envelope.classList.contains("open")) {
    document.getElementById("title").innerText = "";
    document.getElementById("title").innerHTML = `
      <div id="buttons">
        <button class="options" id="yes">Yes</button>
        <button class="options" id="no">No</button>
      </div>
    `;
    document.getElementById("buttons").classList.add("show");

    // Handle "No" button cycling messages
    const messages = ["Please", "Pretty please", "Don't be mean", "Come on, short stuff"];
    let messageIndex = 0;

    document.getElementById("no").addEventListener("click", function () {
      this.textContent = messages[messageIndex]; // Update button text
      messageIndex = (messageIndex + 1) % messages.length; // Cycle messages
    });

    // Handle "Yes" button closing the envelope and changing card text
    document.getElementById("yes").addEventListener("click", function () {
      envelope.classList.remove("open"); // Close the envelope
setTimeout(() => {
document.getElementById("cardText").innerHTML = "I love you very much <br> my Valentine"; // Change card text
      envelope.classList.add("open"); // Reopen after 1 second
    }, 1000);
    });
  }
});
