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

    // Create WhatsApp message content
    const message = `Order Details:
Customer Name: ${customerName}
Customer Address: ${customerAddress}
Customer Email: ${customerEmail}
Customer Phone 1: ${customerPhone1}
Customer Phone 2: ${customerPhone2}
District: ${customerDistrict}
City: ${customerCity}
Product Code: ${productCode}
Stock: ${stock}
User Price: Rs ${userPrice}
Delivery Charge: Rs ${deliveryCharge}
Total Price: Rs ${totalPrice}`;

    // Define WhatsApp number (without leading zero and country code included)
    const whatsappNumber = "94788054702";
    
    // Construct WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappURL, "_blank");

    // Display receipt details for user confirmation
    document.getElementById("receiptDetails").innerText = message;
    document.getElementById("totalPrice").innerText = totalPrice;
    document.getElementById("receipt").style.display = "block";
}

// Function to download receipt
function downloadReceipt(format) {
    const receiptElement = document.getElementById("receipt");

    if (format === 'pdf') {
        // Download as PDF using jsPDF library
        const doc = new jsPDF();
        doc.text(receiptElement.innerText, 10, 10);
        doc.save("receipt.pdf");
    } else if (format === 'image') {
        // Download as image using html2canvas
        html2canvas(receiptElement).then((canvas) => {
            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "receipt.png";
            link.click();
        });
    }
        }
