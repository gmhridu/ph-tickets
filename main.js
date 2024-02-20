const buyTickets = document.getElementById("buy-tickets");
const ticketTotalPrice = document.getElementById("total-price");
const totalCost = document.getElementById("total-cost");
const ticketList = document.getElementById("updated-ticket-info");
const discountShown = document.getElementById("discount-shown");
const chooseSeats = document.querySelectorAll(".choose-seats");
const remainingSeatsElement = document.getElementById("seats-remaining");
const totalSeats = chooseSeats.length;
let selectedSeats = 0;

buyTickets.addEventListener("click", function () {
  const seatSelection = document.getElementById("seat-selection");
  seatSelection.scrollIntoView({ behavior: "smooth" });
});

for (let seat of chooseSeats) {
  seat.addEventListener("click", function (event) {
    if (seat.classList.contains("bg-lime-500")) {
      selectedSeats -= 1;
    } else {
      selectedSeats += 1;
    }

    setInnerText("cart-count", selectedSeats);
    setBgColor(seat);
    updateTicketInfo();
    countPrice();
    updateRemainingSeats();
    grandTotal();
    showScreen();
  });
}

// coupon code
const applyBtn = document.getElementById("apply-btn");
const inputField = document.getElementById("input-field");

applyBtn.addEventListener("click", function () {
  const couponCode = inputField.value.toUpperCase();

  if (selectedSeats >= 4) {
    let discountPercentage = 0;
    if (couponCode === "NEW15") {
      discountPercentage = 15;
    } else if (couponCode === "COUPLE20") {
      discountPercentage = 20;
    }
    const totalPrice = 550 * selectedSeats;
    const discountAmountValue = totalPrice * (discountPercentage / 100);

    discountShown.innerHTML = "";

    const discountContainer = document.createElement("div");
    discountContainer.classList.add("flex", "justify-between");
    discountContainer.classList.add(
      "font-inter",
      "text-base",
      "font-medium",
      "text-[#030712]"
    );

    const p = document.createElement("p");
    const discountFullAmount = document.createElement("p");

  

    p.innerText = "Discount";
    discountFullAmount.innerText = `BDT ${discountAmountValue}`;

    discountContainer.appendChild(p);
    discountContainer.appendChild(discountFullAmount);

    discountShown.appendChild(discountContainer);
     grandTotal();
  } else {
    applyBtn.disabled = true;
  }
});

inputField.addEventListener("input", function () {
  const couponCode = inputField.value.toUpperCase();

  if (couponCode === "NEW15" || couponCode === "COUPLE20") {
    discountShown.style.display = "block";
  } else {
    discountShown.style.display = "none";
  }
});

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

function updateRemainingSeats() {
  const remaining = totalSeats - selectedSeats;
  remainingSeatsElement.innerText = remaining;
}

function setInnerText(event, value) {
  document.getElementById(event).innerText = value;
}

function setBgColor(element) {
  element.classList.toggle("bg-lime-500");
}

function countPrice() {
  const totalPrice = 550 * selectedSeats;
  ticketTotalPrice.innerText = totalPrice;
}

function grandTotal() {
  const couponCode = inputField.value.toUpperCase();
  let discountPercentage = 0;

  if (couponCode === "NEW15") {
    discountPercentage = 15;
  } else if (couponCode === "COUPLE20") {
    discountPercentage = 20;
  }

  const totalPrice = 550 * selectedSeats;
  const discountAmountValue = totalPrice * (discountPercentage / 100);
  const grandTotalPrice = totalPrice - discountAmountValue;

  totalCost.innerText = grandTotalPrice;
}

 
function submitInput() {
  const submitInputValues = document.querySelectorAll(".submit-input");
  const submissionId = document.getElementById("confirmation-screen");
  const removeHome = document.getElementById("remove-home");

  submissionId.classList.remove("hidden");
  removeHome.style.display = "none";

  for (const input of submitInputValues) {
    input.value = "";
  }
}

function continueHome() {
  const submissionId = document.getElementById("confirmation-screen");
  const removeHome = document.getElementById("remove-home");

  submissionId.classList.add("hidden");
  removeHome.style.display = "block";
}

const submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", submitInput);

const continueBtn = document.getElementById("continue-home");
continueBtn.addEventListener("click", continueHome);



