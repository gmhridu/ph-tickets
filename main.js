const buyTickets = document.getElementById("buy-tickets");

buyTickets.addEventListener("click", function () {
  const seatSelection = document.getElementById("seat-selection");
  seatSelection.scrollIntoView({ behavior: "smooth" });
});

const chooseSeats = document.querySelectorAll(".choose-seats");
let count = 0;

for (let seat of chooseSeats) {
  seat.addEventListener("click", function (event) {
    count += 1;

    const ticketPrice = document.getElementById("ticket-price");
    const price = ticketPrice.innerText;
    const priceConverted = parseInt(price);
    const seats = seat.innerText;
    const seatClass = document.getElementById("seat-Class");
    const seatClassText = seatClass.innerText;

    const seatNumberContainer = document.getElementById("seat-number");
    const seatClassUpdate = document.getElementById("seat-Class");
    const countPriceContainer = document.getElementById("count-price");
    const updateSeatInfo = document.getElementById("updated-ticket-info");

    const seatNumberText = document.createElement("p");
    seatNumberText.innerText = seats;

    const seatClassP = document.createElement("p");
    seatClassP.innerText = seatClassText;

    const priceUpdate = document.createElement("p");
    priceUpdate.innerText = priceConverted;

    
    const clonedSeatNumber = seatNumberText.cloneNode(true);
    const clonedSeatClass = seatClassP.cloneNode(true);
    const clonedPriceUpdate = priceUpdate.cloneNode(true);

    seatNumberContainer.appendChild(clonedSeatNumber);
    seatClassUpdate.appendChild(clonedSeatClass);
    countPriceContainer.appendChild(clonedPriceUpdate);

    setInnerText("cart-count", count);
    setBgColor(seat);
  });
}

function setInnerText(event, value) {
  document.getElementById(event).innerText = value;
}

function setBgColor(element) {
  element.classList.toggle("bg-lime-400");
}
