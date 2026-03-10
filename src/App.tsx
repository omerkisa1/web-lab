import Button from './components/Button'
import Card from './components/Card'
import Input from './components/Input'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => document.documentElement.classList.toggle('dark')}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">&#9790;</span>
        <span className="hidden dark:inline">&#9728;</span>
      </button>

      {/* Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Ömer Kısa
          </h1>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  İletişim
                </a>
              </li>
              <li>
                <a
                  href="#/uikit"
                  className="px-3 py-1 rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors font-medium"
                >
                  UI Kit
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content">
        {/* Hakkımda */}
        <section id="hakkimda" className="py-16 px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
            <figure className="shrink-0">
              <img
                src="/profil.png"
                alt="Ömer Kısa profil fotoğrafı"
                className="w-40 h-40 rounded-full object-cover shadow-lg"
              />
            </figure>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                Hakkımda
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                Merhaba! Ben Ömer Kısa, Yazılım Mühendisliği bölümü
                öğrencisiyim. Web geliştirme, kullanıcı arayüzü tasarımı ve
                modern araçlar üzerine çalışıyorum.
              </p>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Kullandığım Teknolojiler
              </h3>
              <ul
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Beceri etiketleri"
              >
                {[
                  'HTML5',
                  'CSS3',
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Tailwind',
                  'Git',
                  'Vite',
                ].map((skill) => (
                  <li
                    key={skill}
                    className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Projeler */}
        <section
          id="projeler"
          className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
              Projelerim
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card
                variant="elevated"
                title="E-Ticaret Sitesi"
                image="/proje1.jpg"
                imageAlt="E-Ticaret sitesi anasayfa ekran görüntüsü"
              >
                <p>
                  React ve Node.js ile geliştirilmiş tam kapsamlı bir e-ticaret
                  uygulaması.
                </p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {['React', 'Node.js', 'MongoDB'].map((t) => (
                    <span
                      key={t}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
              <Card
                variant="elevated"
                title="Blog Uygulaması"
                image="/proje2.jpg"
                imageAlt="Blog uygulaması yazı listesi görünümü"
              >
                <p>Kişisel blog platformu. Markdown destekli yazı editörü.</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {['TypeScript', 'Next.js'].map((t) => (
                    <span
                      key={t}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
              <Card
                variant="elevated"
                title="Hava Durumu"
                image="/proje3.jpg"
                imageAlt="Hava durumu uygulaması arayüzü"
              >
                <p>OpenWeather API ile anlık hava durumu bilgisi.</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {['JavaScript', 'API'].map((t) => (
                    <span
                      key={t}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* İletişim */}
        <section id="iletisim" className="py-16 px-4">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
              İletişim
            </h2>
            <form className="space-y-4">
              <Input id="name" label="Ad Soyad" required />
              <Input
                id="email"
                label="E-posta"
                type="email"
                helpText="Örnek: ad@mail.com"
                required
              />
              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Konu
                </label>
                <select
                  id="subject"
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
              </div>
              <div className="space-y-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <Button variant="primary" size="lg" type="submit">
                Gönder
              </Button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>&copy; 2025 Ömer Kısa. Tüm hakları saklıdır.</p>
        <nav aria-label="Sosyal medya bağlantıları" className="mt-2">
          <ul className="flex justify-center gap-4">
            <li>
              <a
                href="https://github.com/omerkisa1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  )
}

export default App
