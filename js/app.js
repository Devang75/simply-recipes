// Helper function to get DOM elements
const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (!element) {
    throw new Error(`Element not found: ${selector}`);
  }
  return element;
};

// Navigation functionality
const initNavigation = () => {
  const links = getElement('.nav-links');
  const navBtn = getElement('.nav-btn');

  navBtn.addEventListener('click', () => {
    links.classList.toggle('show-links');
  });
};

// Date functionality 
const updateCopyright = () => {
  const dateElement = getElement('#date');
  dateElement.textContent = new Date().getFullYear();
};

// Initialize everything
initNavigation();
updateCopyright();
