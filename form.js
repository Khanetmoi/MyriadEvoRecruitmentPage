
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('applyModal');
  const openBtns = document.querySelectorAll('.btn-apply'); // all Apply Now buttons
  const closeBtn = document.querySelector('.modal .close');

  // Open modal
  openBtns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // prevent background scroll
    });
  });

  // Close modal with X
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  });

  // Close modal when clicking outside the box
  window.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});


document.getElementById("contribForm").addEventListener("submit", function(e){
  e.preventDefault();

  const formData = {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    background: this.background.value,
    availability: this.availability.value,
    motivation: this.motivation.value,
    git: this.git.value,
    frontend: this.frontend.value,
    react: this.react.value,
    node: this.node.value,
    three: this.three.value,
    django: this.django.value,
    portfolio: this.portfolio.value,
    projects: this.projects.value
  };

  fetch("https://script.google.com/macros/s/AKfycbz1OlXKvQ98PL7SKYAkEf5aFcCAjUvAeHEiS1AWpoSBTio8rB6B383r8rmuckBtXP23ug/exec", {
    method: "POST",
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    alert("✅ Application submitted successfully!");
    document.getElementById("contribForm").reset();
  })
  .catch(err => {
    alert("❌ Something went wrong. Try again.");
    console.error(err);
  });
});

