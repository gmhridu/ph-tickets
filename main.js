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
    console.log(priceConverted);

    // Update the cart count
    setInnerText("cart-count", count);
    setBgColor(seat);
  });
}

function setInnerText(event, value) {
  document.getElementById(event).innerText = value;
}

function setBgColor(elements) {
   elements.classList.toggle("bg-lime-400");
}
