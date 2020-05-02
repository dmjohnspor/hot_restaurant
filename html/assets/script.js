// Main page
// Button functionality:
$("#viewTableBtn").on("click", () => { window.location.href = "./viewTables.html" })
$("#reservationsBtn").on("click", () => { window.location.href = "./reservationPage.html" })

// View tables page
// Button functionality:
$("#goToResBtn").on("click", () => { window.location.href = "./reservationPage.html" })

// Reservation page
// Button functionality:
$("#makeResBtn").on("click", () => { })

// Home button functionality:
$(".homeBtn").on("click", () => { window.location.href = "./index.html" })