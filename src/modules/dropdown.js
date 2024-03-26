class Dropdown {
  constructor() {
    this.initializeDom();
    this.cacheDom();
    this.initializeDropdowns();
  }

  cacheDom() {
    this.body = document.querySelector('body');
    this.dropdowns = document.querySelectorAll('.dropdown');
  }

  initializeDom() {
    this.body = document.querySelector('body');
    this.body.innerHTML = `<div class="dropdown">
    <button class="dropdown-toggle">Menu</button>
    <ul class="dropdown-menu">
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
    </ul>
    </div>`;
  }

  initializeDropdowns() {
    this.dropdowns.forEach((dropdown) => {
      const toggleButton = dropdown.querySelector('.dropdown-toggle');
      const menu = dropdown.querySelector('.dropdown-menu');

      toggleButton.addEventListener('click', () => {
        menu.classList.toggle('show');
      });

      dropdown.addEventListener('mouseleave', () => {
        menu.classList.remove('show');
      });
    });
  }
}

export default Dropdown;
