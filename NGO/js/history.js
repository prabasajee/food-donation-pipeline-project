const historyContainer = document.getElementById("donationHistory");
const donations = JSON.parse(localStorage.getItem("donations")) || [];

if (donations.length === 0) {
  historyContainer.innerHTML = "<p>No donations posted yet.</p>";
} else {
  donations.reverse().forEach((donation, index) => {
    const entry = document.createElement("div");
    entry.className = "donation-entry";
    entry.innerHTML = `
      <h3>Donation #${donations.length - index}</h3>
      <p><strong>Food Type:</strong> ${donation.foodType}</p>
      <p><strong>Quantity:</strong> ${donation.quantity}</p>
      <p><strong>Location:</strong> ${donation.location}</p>
      <p><strong>Expiry:</strong> ${donation.expiry}</p>
      <p><strong>Info:</strong> ${donation.additionalInfo}</p>
    `;
    historyContainer.appendChild(entry);
  });
}
