// সিম্পল স্ক্রিপ্ট ফর বাটন ক্লিক
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent === 'View Case Study') {
            alert('Case Study: Increased engagement by 50% through Reddit strategies.');
        }
    });
});

// স্মুথ স্ক্রল ফর নেভিগেশন
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});