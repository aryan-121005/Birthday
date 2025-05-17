// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Show content with delay to create a nice reveal effect
  setTimeout(() => {
    document.querySelector('.birthday-container').style.opacity = '1';
    document.querySelector('.shine-effect').style.opacity = '1';
  }, 500);
  
  // Generate stars randomly
  generateStars();
  
  // Generate confetti
  generateConfetti();
  
  // Generate balloons
  generateBalloons();
  
  // Show gift button after delay
  setTimeout(() => {
    const giftButton = document.getElementById('gift-button');
    giftButton.classList.add('show');
    giftButton.style.display = 'block';
  }, 4000);
  
  // Gift button click event
  document.getElementById('gift-button').addEventListener('click', function() {
    // Hide gift button
    this.style.display = 'none';
    
    // Show special message
    const specialMessage = document.getElementById('special-message');
    specialMessage.classList.add('show');
    specialMessage.style.display = 'block';
  });
});

// Generate stars randomly
function generateStars() {
  const starContainer = document.getElementById('star-background');
  const icons = ["fa-sparkle", "fa-star", "fa-diamond"];
  const colors = ["#FFD700", "#00CED1", "white", "#FF5BAC", "#FF6347"];
  
  for (let i = 0; i < 30; i++) {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const size = (Math.random() * 1.5 + 0.5).toFixed(1); // 0.5 to 2rem
    const delay = (Math.random() * 3).toFixed(1);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const icon = icons[Math.floor(Math.random() * icons.length)];
    
    const star = document.createElement('div');
    star.className = 'star';
    star.innerHTML = `<i class="fa-solid ${icon}"></i>`;
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    star.style.fontSize = `${size}rem`;
    star.style.color = color;
    star.style.animationDelay = `${delay}s`;
    
    starContainer.appendChild(star);
  }
}

// Generate confetti
function generateConfetti() {
  const confettiContainer = document.getElementById('confetti-container');
  const colors = ['#FF5BAC', '#FFD700', '#00CED1', '#8A2BE2', '#FF6347', '#ffffff'];
  const shapes = ['circle', 'square', 'triangle', 'rectangle'];
  
  for (let i = 0; i < 60; i++) {
    const left = Math.floor(Math.random() * 100);
    const delay = (Math.random() * 8).toFixed(1);
    const duration = (3 + Math.random() * 4).toFixed(1);
    const size = (5 + Math.random() * 10).toFixed(1);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];
    const rotation = Math.floor(Math.random() * 360);
    
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    
    // Apply different shapes
    if (shape === 'circle') {
      confetti.style.borderRadius = '50%';
    } else if (shape === 'triangle') {
      confetti.classList.add('clip-path-triangle');
    } else if (shape === 'rectangle') {
      confetti.style.width = '15px';
      confetti.style.height = '5px';
    }
    
    confetti.style.left = `${left}%`;
    confetti.style.top = '-20px';
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.transform = `rotate(${rotation}deg)`;
    confetti.style.animationDelay = `${delay}s`;
    confetti.style.animationDuration = `${duration}s`;
    
    confettiContainer.appendChild(confetti);
  }
}

// Generate balloons
function generateBalloons() {
  const balloonsContainer = document.getElementById('balloons-container');
  const balloonConfig = [
    { top: '70%', left: '10%', width: '16', height: '20', color: '#FF5BAC', delay: 0.2, duration: 4.0 },
    { top: '75%', left: '25%', width: '14', height: '18', color: '#FFD700', delay: 0.5, duration: 3.7 },
    { top: '80%', left: '40%', width: '16', height: '20', color: '#00CED1', delay: 0.8, duration: 4.2 },
    { top: '75%', left: '55%', width: '14', height: '18', color: '#8A2BE2', delay: 1.1, duration: 3.9 },
    { top: '70%', left: '70%', width: '16', height: '20', color: '#FF6347', delay: 1.4, duration: 4.1 },
    { top: '80%', left: '85%', width: '14', height: '18', color: '#FF5BAC', delay: 1.7, duration: 3.8 },
    { top: '85%', left: '5%', width: '16', height: '20', color: '#FFD700', delay: 2.0, duration: 4.3 },
    { top: '65%', left: '90%', width: '14', height: '18', color: '#00CED1', delay: 2.3, duration: 4.0 }
  ];
  
  for (let i = 0; i < balloonConfig.length; i++) {
    const config = balloonConfig[i];
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    
    balloon.style.top = config.top;
    balloon.style.left = config.left;
    balloon.style.width = `${config.width}rem`;
    balloon.style.height = `${config.height}rem`;
    balloon.style.backgroundColor = config.color;
    balloon.style.animationDelay = `${config.delay}s`;
    balloon.style.animationDuration = `${config.duration}s`;
    
    balloonsContainer.appendChild(balloon);
  }
}