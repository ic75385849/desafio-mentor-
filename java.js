function togglePricing() {
    const basicPrice = document.getElementById('basic-price');
    const professionalPrice = document.getElementById('professional-price');
    const masterPrice = document.getElementById('master-price');
    
    if (document.getElementById('toggle').checked) {
        basicPrice.textContent = '$15.99';
        professionalPrice.textContent = '$25.49';
        masterPrice.textContent = '$35.99';
    } else {
        basicPrice.textContent = '$35.99';
        professionalPrice.textContent = '$65.99';
        masterPrice.textContent = '$95.99';
    }
}