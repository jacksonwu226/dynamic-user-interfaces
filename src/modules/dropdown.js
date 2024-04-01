class Dropdown {
  constructor() {
    this.initializeDom();
    this.cacheDom();
    this.initializeDropdown();
  }

  cacheDom() {
    this.body = document.querySelector('body');
    this.dropdowns = document.querySelector('.dropdown-script');
    this.toggleButton = document.querySelector('.dropdown-toggle');
    this.dropdownContent = document.querySelector('.dropdown-content');
  }

  initializeDom() {
    this.body = document.querySelector('body');
    this.body.innerHTML += `
    <div class="dropdown-script">
    <button class='dropdown-toggle'>Food Click</button>
    <div class="dropdown-content">
      <a href="">Apple</a>
      <a href="">Banana</a>
      <a href="">Orange</a>
    </div>
  </div>
    <div class="dropdown">
      <button>Food Hover</button>
      <div class="content">
        <a href="">Apple</a>
        <a href="">Banana</a>
        <a href="">Orange</a>
      </div>
    </div>`;
  }

  initializeDropdown() {
    this.toggleButton.addEventListener('click', () => {
      this.dropdownContent.classList.toggle('show');
    });
    this.dropdowns.addEventListener('mouseleave', () => {
      this.dropdownContent.classList.remove('show');
    });
  }
}

export default Dropdown;
