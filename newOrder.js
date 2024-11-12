function sendWhatsAppMessage() {
    const customerName = document.getElementById("customerName").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const customerPhone1 = document.getElementById("customerPhone1").value;
    const customerPhone2 = document.getElementById("customerPhone2").value;
    const customerDistrict = document.getElementById("customerDistrict").value;
    const customerCity = document.getElementById("customerCity").value;
    const productCode = document.getElementById("productCode").value;
    const stock = document.getElementById("stock").value;
    const userPrice = document.getElementById("userPrice").value;

    const whatsappNumber = "94788054702";
    const message = `Order Details:
    \nCustomer Name: ${customerName}
    \nCustomer Address: ${customerAddress}
    \nCustomer Email: ${customerEmail}
    \nCustomer Phone 1: ${customerPhone1}
    \nCustomer Phone 2: ${customerPhone2}
    \nDistrict: ${customerDistrict}
    \nCity: ${customerCity}
    \nProduct Code: ${productCode}
    \nStock: ${stock}
    \nUser Price: ${userPrice}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
}
