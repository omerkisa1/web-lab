import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <div className="header-inner">
          <span className="logo">Ömer Kısa</span>
          <nav aria-label="Ana navigasyon">
            <ul>
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">

        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h1 id="hakkimda-baslik">Hakkımda</h1>
          <div className="about-content">
            <figure>
              <div className="profil-img" aria-label="Ömer Kısa profil avatarı" role="img">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="160" height="160">
                  <circle cx="50" cy="50" r="50" fill="#dbeafe" />
                  <circle cx="50" cy="38" r="18" fill="#2563eb" />
                  <ellipse cx="50" cy="85" rx="28" ry="20" fill="#2563eb" />
                </svg>
              </div>
              <figcaption>Ömer Kısa</figcaption>
            </figure>
            <div>
              <p>Merhaba! Ben Ömer Kısa, Yazılım Mühendisliği bölümü öğrencisiyim. Web geliştirme, kullanıcı arayüzü tasarımı ve modern araçlar üzerine çalışıyorum.</p>
              <h2>Kullandığım Teknolojiler</h2>
              <ul className="tech-list">
                <li>HTML5 &amp; CSS3</li>
                <li>JavaScript &amp; TypeScript</li>
                <li>React</li>
                <li>Git &amp; GitHub</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>
          <div className="projects-grid">
            <article className="project-card">
              <h3>Web LAB-1 — Ortam Kurulumu</h3>
              <p>Vite + React + TypeScript ile oluşturulan ilk geliştirme ortamı projesi. Node.js, npm, Git ve VS Code kurulumunu kapsar.</p>
              <ul className="project-tags">
                <li>React</li>
                <li>TypeScript</li>
                <li>Vite</li>
                <li>Git</li>
              </ul>
            </article>
            <article className="project-card">
              <h3>Web LAB-2 — Semantik Portföy</h3>
              <p>Semantik HTML5, erişilebilirlik (a11y) ilkeleri ve form doğrulama konularını kapsayan kişisel portföy sayfası.</p>
              <ul className="project-tags">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>a11y</li>
                <li>ARIA</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim" aria-labelledby="iletisim-baslik">
          <h2 id="iletisim-baslik">İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select id="subject" name="subject" required aria-describedby="subject-error">
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                ></textarea>
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>

      </main>

      <footer>
        <p>&copy; 2025 Ömer Kısa. Tüm hakları saklıdır.</p>
        <nav aria-label="Sosyal medya bağlantıları">
          <ul>
            <li><a href="https://github.com/omerkisa1" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default App
