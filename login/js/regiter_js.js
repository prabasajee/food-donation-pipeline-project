function switchForm(role) {
    const restaurantBtn = document.querySelector('.tab-buttons button:nth-child(1)');
    const ngoBtn = document.querySelector('.tab-buttons button:nth-child(2)');
    const restaurantForm = document.getElementById('restaurant-form');
    const ngoForm = document.getElementById('ngo-form');

    if (role === 'restaurant') {
      restaurantBtn.classList.add('active');
      ngoBtn.classList.remove('active');
      restaurantForm.style.display = 'block';
      ngoForm.style.display = 'none';
    } else {
      ngoBtn.classList.add('active');
      restaurantBtn.classList.remove('active');
      restaurantForm.style.display = 'none';
      ngoForm.style.display = 'block';
    }
  }