function processOrder() {
    const customerName = document.getElementById("customerName").value;
    const customerAddress = document.getElementById("customerAddress").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const customerPhone1 = document.getElementById("customerPhone1").value;
    const customerPhone2 = document.getElementById("customerPhone2").value;
    const customerDistrict = document.getElementById("customerDistrict").value;
    const customerCity = document.getElementById("customerCity").value;
    const productCode = document.getElementById("productCode").value;
    const stock = document.getElementById("stock").value;
    const userPrice = parseFloat(document.getElementById("userPrice").value);
    const deliveryCharge = 400;
    const totalPrice = userPrice + deliveryCharge;

    // Prepare WhatsApp message
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
    \nUser Price: Rs ${userPrice}
    \nDelivery Charge: Rs ${deliveryCharge}
    \nTotal Price: Rs ${totalPrice}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");

    // Display receipt details
    document.getElementById("receiptDetails").innerText = message;
    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("receipt").style.display = "block";
}

function downloadPDF() {
    const receiptContent = document.getElementById("receipt");
    const pdf = new jsPDF();
    pdf.fromHTML(receiptContent, 15, 15, {
        'width': 170
    });
    pdf.save("OrderReceipt.pdf");
}

function downloadImage() {
    html2canvas(document.getElementById("receipt"), {
        onrendered: function(canvas) {
            const link = document.createElement('a');
            link.href = canvas.toDataURL("image/png");
            link.download = 'OrderReceipt.png';
            link.click();
        }
    });
        }
