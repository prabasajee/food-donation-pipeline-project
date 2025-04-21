
// Handle form submission
document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from reloading the page
  
    // Get form data
    const foodType = document.getElementById('foodType').value;
    const quantity = document.getElementById('quantity').value;
    const location = document.getElementById('location').value;
    const expiry = document.getElementById('expiry').value;
    const additionalInfo = document.getElementById('additionalInfo').value;
  
    // Create a donation object
    const donation = {
      foodType: foodType,
      quantity: quantity,
      location: location,
      expiry: expiry || 'N/A', // If no expiry, set 'N/A'
      additionalInfo: additionalInfo || 'None'
    };
  
    // Save the donation (simulating local storage for now)
    let donations = JSON.parse(localStorage.getItem('donations')) || [];
    donations.push(donation);
    localStorage.setItem('donations', JSON.stringify(donations));
  
    // Confirmation message
    alert('Your food donation has been posted successfully!');
  
    // Clear form fields
    document.getElementById('donationForm').reset();
  });
  