const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);

 
};

 const handleSubmit = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const message = document.getElementById('message').value

    const url = `https://wa.me/2348102784460?text=Hello, my name is ${name}, ${message}`
    window.open(url,'_blank')
    
   document.getElementById('name').value = '' 
   document.getElementById('message').value = ''
  }

document.addEventListener("DOMContentLoaded", initApp);
