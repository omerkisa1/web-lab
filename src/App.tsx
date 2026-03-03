import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <span className="site-title">Ömer Kısa</span>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">

        <section id="hakkimda" aria-labelledby="hakkimda-baslik">
          <h2 id="hakkimda-baslik">Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img
                src="/profil.png"
                alt="Ömer Kısa profil fotoğrafı"
                className="profil-img"
                width="160"
                height="160"
              />
              <figcaption>Ömer Kısa</figcaption>
            </figure>
            <div>
              <p>Merhaba! Ben Ömer Kısa, Yazılım Mühendisliği bölümü öğrencisiyim. Web geliştirme, kullanıcı arayüzü tasarımı ve modern araçlar üzerine çalışıyorum.</p>
              <h3>Kullandığım Teknolojiler</h3>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Git</li>
                <li>Vite</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler" aria-labelledby="projeler-baslik">
          <h2 id="projeler-baslik">Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img
                src="/proje1.jpg"
                alt="E-Ticaret sitesi anasayfa ekran görüntüsü"
              />
              <h3>E-Ticaret Sitesi</h3>
              <p>React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret uygulaması.</p>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </article>
            <article className="project-card">
              <img
                src="/proje2.jpg"
                alt="Blog uygulaması yazı listesi görünümü"
              />
              <h3>Blog Uygulaması</h3>
              <p>Kişisel blog platformu. Markdown destekli yazı editörü.</p>
              <ul className="skill-tags">
                <li>TypeScript</li>
                <li>Next.js</li>
              </ul>
            </article>
            <article className="project-card">
              <img
                src="/proje3.jpg"
                alt="Hava durumu uygulaması arayüzü"
              />
              <h3>Hava Durumu</h3>
              <p>OpenWeather API ile anlık hava durumu bilgisi.</p>
              <ul className="skill-tags">
                <li>JavaScript</li>
                <li>API</li>
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
