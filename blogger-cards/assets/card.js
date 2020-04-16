const template = document.createElement('template');

template.innerHTML = `<style>
.user-card {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  background: var(--lightgrey);
  border-bottom: .5rem solid var(--primary);
  border-radius: 4px;
  margin-bottom: 1rem;
}
.user-card img {
  width: 100%;
  border-top-left-radius: 4px;
}
.user-card h3 {
  font-size: 1.5rem;
  line-height: 1;
}
.user-card h3,
.user-card p {
  margin-top: 0;
  margin-bottom: 1rem;
}
.user-card button {
  cursor: pointer;
  background: var(--primary);
  color: var(--white);
  border: 0;
  border-radius: 1rem;
  padding: .5rem 1rem;
  font-size: .8rem;
  outline: none;
}
.user-card__info {
  display: none;
}
.user-card__body {
  padding: 1rem;
}
.user-card__bio {
  max-height: 240px;
  overflow: hidden;
}
</style>
<div class="user-card">
  <img />
  <div class="user-card__body">
    <h3></h3>
    <div class="user-card__info">
      <p><strong>Email Address</strong> <slot name="email" /></p>
      <p><strong>Website URL</strong> <slot name="url" /></p>
      <p class="user-card__bio"><strong>Short Bio</strong> <slot name="bio" /></p>
    </div>
    <button class="user-card__info-toggle">Hide Info</button>
  </div>
</div>`;

class BloggerCard extends HTMLElement {

  constructor() {

    super();

    this.showInfo = true;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerHTML = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('.user-card__info-toggle')
        .addEventListener('click', event => this.toggleUserInfo());
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector('.user-card__info-toggle')
        .removeEventListener();
  }

  toggleUserInfo() {

    const userInfo      = this.shadowRoot.querySelector('.user-card__info');
    const toggleInfoBtn = this.shadowRoot.querySelector('.user-card__info-toggle');

    if (this.showInfo = !this.showInfo) {

      userInfo.style.display  = 'none';
      toggleInfoBtn.innerText = 'Show Info';
    } else {

      userInfo.style.display  = 'block';
      toggleInfoBtn.innerText = 'Hide Info';
    }
  }
}

window.customElements.define('user-card', BloggerCard);