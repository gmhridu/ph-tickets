const buyTickets = document.getElementById("buy-tickets");
const ticketTotalPrice = document.getElementById("total-price");
const totalCost = document.getElementById("total-cost");
const ticketList = document.getElementById("updated-ticket-info");
const chooseSeats = document.querySelectorAll(".choose-seats");
const remainingSeatsElement = document.getElementById("seats-remaining");
const totalSeats = chooseSeats.length;
let selectedSeats = 0;

// Scroll to seat selection
buyTickets.addEventListener("click", function () {
  const seatSelection = document.getElementById("seat-selection");
  seatSelection.scrollIntoView({ behavior: "smooth" });
});

for (let seat of chooseSeats) {
  seat.addEventListener("click", function (event) {
    if (seat.classList.contains("bg-lime-400")) {
      selectedSeats -= 1;
    } else {
      selectedSeats += 1;
    }
    setInnerText("cart-count", selectedSeats);
    setBgColor(seat);
    updateTicketInfo();
    countPrice();
    updateRemainingSeats();
  });
}

function updateTicketInfo() {
  ticketList.innerHTML = "";
  for (let seat of chooseSeats) {
    if (seat.classList.contains("bg-lime-400")) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("flex", "justify-around", "items-center");
      wrapper.classList.add(
        "font-inter",
        "text-base",
        "font-normal",
        "text-[#03071299]",
        "text-center"
      );
      wrapper.style.padding = "1rem 0";
      ticketList.appendChild(wrapper);
      const ticket = document.createElement("p");
      const ticketClass = document.createElement("p");
      const ticketPrice = document.createElement("p");
      ticketClass.innerText = "Economy";
      ticket.innerText = seat.innerText;
      ticketPrice.innerText = "550";
      wrapper.appendChild(ticket);
      wrapper.appendChild(ticketClass);
      wrapper.appendChild(ticketPrice);
    }
  }
}

function countPrice() {
  const totalPrice = 550 * selectedSeats;
  ticketTotalPrice.innerText = totalPrice;
  totalCost.innerText = totalPrice;
}

function updateRemainingSeats() {
  const remaining = totalSeats - selectedSeats;
  remainingSeatsElement.innerText = remaining;
}

function setInnerText(event, value) {
  document.getElementById(event).innerText = value;
}

function setBgColor(element) {
  element.classList.toggle("bg-lime-400");
}
