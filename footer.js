class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1e293b;
          color: white;
          padding: 3rem 1rem;
          text-align: center;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .social-links {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .social-links a {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-3px);
        }
        .copyright {
          margin-top: 1rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
        }
        .made-with {
          margin-top: 1rem;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
        }
      </style>
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="social-links">
              <a href="https://wa.me/6281234567890" target="_blank"><i data-feather="message-circle"></i></a>
              <a href="https://instagram.com/arifmustofa_editor" target="_blank"><i data-feather="instagram"></i></a>
              <a href="https://tiktok.com/@arifmustofa_editor" target="_blank"><i data-feather="youtube"></i></a>
              <a href="mailto:arif.mustofa@example.com"><i data-feather="mail"></i></a>
            </div>
            <p class="copyright">&copy; ${new Date().getFullYear()} Arif Mustofa - Profesional Video Editor. All rights reserved.</p>
            <p class="made-with">Made with <i data-feather="heart" style="width: 14px; height: 14px; color: #ef4444;"></i> in Indonesia</p>
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
