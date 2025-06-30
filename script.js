function bookAppointment() {
  alert("Redirecting to the appointment booking page...");
  // window.location.href = "https://your-booking-link.com";
}

function callNumber() {
  window.location.href = "tel:9856589510";
}
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".booking-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.querySelector('input[placeholder="Name"]').value.trim();
    const phone = form.querySelector('input[placeholder="Mobile Number"]').value.trim();
    const captcha = form.querySelector('input[placeholder="Captcha"]').value.trim();
    const checkbox = form.querySelector('input[type="checkbox"]').checked;

    if (name === "" || phone === "" || captcha === "") {
      alert("Please fill in all the fields.");
      return;
    }

    if (!checkbox) {
      alert("Please agree to the terms and privacy policy.");
      return;
    }

    if (captcha !== "1514") {
      alert("Incorrect captcha. Please try again.");
      return;
    }

    alert("Form submitted successfully!");
    form.reset();
  });
});


