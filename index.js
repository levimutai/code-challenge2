/ Select DOM elements
const form = document.getElementById("guest-form");
const input = document.getElementById("guest-name");
const guestList = document.getElementById("guest-list");

// Main form handler
form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const name = input.value.trim();

  if (!name) {
    alert("Please enter a name.");
    return;
  }

  if (guestList.children.length >= 10) {
    alert("Guest list limit reached. Max 10 guests allowed.");
    return;
  }

  addGuest(name);
  input.value = "";
});

// Function to create and append a guest entry
function addGuest(name) {
  const li = document.createElement("li");
  li.classList.add("guest-item");

  const nameSpan = document.createElement("span");
  nameSpan.textContent = name;

  // Timestamp
  const time = document.createElement("small");
  time.textContent = (Added: ${new Date().toLocaleTimeString()});
  time.classList.add("timestamp");

  // RSVP toggle
  const rsvpBtn = document.createElement("button");
  rsvpBtn.textContent = "Not Attending";
  rsvpBtn.className = "rsvp";
  rsvpBtn.addEventListener("click", () => {
    if (rsvpBtn.textContent === "Attending") {
      rsvpBtn.textContent = "Not Attending";
      li.classList.remove("attending");
    } else {
      rsvpBtn.textContent = "Attending";
      li.classList.add("attending");
    }
  });

  // Delete button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "remove";
  removeBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append elements
  li.append(nameSpan, time, rsvpBtn, removeBtn);
  guestList.appendChild(li);
}

