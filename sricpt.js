// JavaScript untuk navigasi dinamis
const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        
        // Sembunyikan semua section
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Tampilkan section yang dipilih
        document.getElementById(targetId).classList.add('active');
    });
});

// Tambahan: Handler untuk form kontak (sederhana, tanpa backend)
const contactForm = document.getElementById('contact-form');
const formResponse = document.getElementById('form-response');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Simulasi pengiriman (dalam praktik nyata, kirim ke server)
    formResponse.textContent = `Terima kasih, ${name}! Pesan Anda telah dikirim. Kami akan menghubungi Anda di ${email}.`;
    
    // Reset form
    contactForm.reset();
});