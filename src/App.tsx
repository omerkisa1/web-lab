import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Web Tasarımı ve Programlama</h1>
      <h2>LAB-1</h2>
      <div className="info-card">
        <p><strong>Ad Soyad:</strong> Ömer Kısa</p>
        <p><strong>Öğrenci No:</strong> [Öğrenci Numaranı Buraya Yaz]</p>
        <p><strong>Bölüm:</strong> Bilgisayar Mühendisliği</p>
      </div>
      <div className="tech-stack">
        <h3>Kullanılan Teknolojiler</h3>
        <ul>
          <li>⚡ Vite</li>
          <li>⚛️ React 18</li>
          <li>🔷 TypeScript</li>
        </ul>
      </div>
    </div>
  )
}

export default App
