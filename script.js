// JavaScript untuk interaktivitas tambahan

// Fungsi untuk menampilkan pesan saat kartu diklik
function showAlert(cardId) {
    alert("Anda telah mengklik: " + cardId);
}

// Validasi form pemesanan
document.getElementById("order-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Mencegah form untuk refresh halaman
    
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    if (!date) {
        alert("Silakan pilih tanggal pemesanan.");
        return;
    }

    alert(`Pemesanan Layanan: ${service}\nTanggal: ${date}\nTerima kasih telah melakukan pemesanan!`);
});

// Efek hover pada navigasi
const navItems = document.querySelectorAll("nav ul li a");
navItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.style.transform = "scale(1.1)";
    });
    item.addEventListener("mouseout", () => {
        item.style.transform = "scale(1)";
    });
});
