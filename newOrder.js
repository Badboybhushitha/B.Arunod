document.getElementById("newOrderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const customerName = document.getElementById("customerName").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const customerPhone = document.getElementById("customerPhone").value;
    const productCode = document.getElementById("productCode").value;
    const stock = document.getElementById("stock").value;
    const userPrice = document.getElementById("userPrice").value;

    // Delivery charge
    const deliveryCharge = 400;
    const profit = userPrice - stock;
    const totalAmount = parseFloat(userPrice) + deliveryCharge;

    const receipt = `
        <h2>Receipt</h2>
        <p>Customer Name: ${customerName}</p>
        <p>Product Code: ${productCode}</p>
        <p>Stock: ${stock}</p>
        <p>User Price: Rs. ${userPrice}</p>
        <p>Delivery Charge: Rs. ${deliveryCharge}</p>
        <p>Profit: Rs. ${profit}</p>
        <p>Total Amount: Rs. ${totalAmount}</p>
    `;

    alert("Order placed successfully!");

    // Optionally, send receipt data to WhatsApp or generate a downloadable receipt image here
    document.body.innerHTML = receipt;  // Display receipt as HTML, could be enhanced to generate an image
});
