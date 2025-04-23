
const donations = [
    {
      type: "Rice",
      name: "🍛 Rice & Curry",
      quantity: "20 portions",
      time: "2025-04-18T16:00",
      location: "Dehiwala"
    },
    {
      type: "Sandwiches",
      name: "🥪 Sandwiches",
      quantity: "15 portions",
      time: "2025-04-18T18:30",
      location: "Colombo 03"
    },
    {
      type: "Pizza",
      name: "🍕 Pizza Slices",
      quantity: "12 slices",
      time: "2025-04-19T13:00",
      location: "Mount Lavinia"
    }
  ];

  const listContainer = document.getElementById("donationsList");
  const spinner = document.getElementById("spinner");
  const noDonationsMessage = document.getElementById("noDonationsMessage");

  function renderDonations(data) {
    listContainer.innerHTML = "";
    if (data.length === 0) {
      noDonationsMessage.innerHTML = "No donations match your filter.";
      return;
    }
    data.forEach(item => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <h3>${item.name}</h3>
        <p><strong>Quantity:</strong> ${item.quantity}</p>
        <p><strong>Pickup Time:</strong> ${new Date(item.time).toLocaleString()}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        <button class="reserve-btn" onclick="alert('Reserved successfully!')">Reserve</button>
      `;
      listContainer.appendChild(card);
    });
  }

  function applyFilters() {
    // Show loading spinner
    spinner.style.display = 'block';
    noDonationsMessage.innerHTML = '';

    const area = document.getElementById("filterArea").value.toLowerCase();
    const date = document.getElementById("filterDate").value;
    const type = document.getElementById("filterType").value;

    setTimeout(() => {
      const filtered = donations.filter(d => {
        const matchesArea = d.location.toLowerCase().includes(area);
        const matchesDate = !date || d.time.startsWith(date);
        const matchesType = !type || d.type === type;
        return matchesArea && matchesDate && matchesType;
      });

      // Hide loading spinner and render data
      spinner.style.display = 'none';
      renderDonations(filtered);
    }, 500); // Simulate network delay
  }

  document.getElementById("filterArea").addEventListener("input", applyFilters);
  document.getElementById("filterDate").addEventListener("change", applyFilters);
  document.getElementById("filterType").addEventListener("change", applyFilters);

  // Initial load
  renderDonations(donations);

