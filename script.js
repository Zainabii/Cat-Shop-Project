function submitOrder(event) {
    event.preventDefault(); // Prevent form submission (for demo purposes)
  
    // Get form values
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var catSelection = document.getElementById("catSelection").value;
    var quantity = document.getElementById("quantity").value;
    var additionalComments = document.getElementById("additionalComments").value;
  
    // Display submitted values (for demo purposes)
    var orderSummary = `
      <h2>Order Summary:</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Selected Cat:</strong> ${catSelection}</p>
      <p><strong>Quantity:</strong> ${quantity}</p>
      <p><strong>Additional Comments:</strong> ${additionalComments}</p>
    `;
  
    var orderSummaryContainer = document.getElementById("orderSummaryContainer");
    orderSummaryContainer.innerHTML = orderSummary;
  }