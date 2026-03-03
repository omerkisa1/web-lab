# CSS Kararları

## 1. Breakpoint Seçimi
- **640px** ve **1024px** breakpoint'lerini seçtim çünkü bu değerler yaygın olarak kabul görmüş kırılım noktalarıdır ve içeriğimin okunabilirliği bu noktalarda optimize edilebilir.
- 640px altında içerik tek sütun halinde dikey yığılır (mobil telefonlar). 640px–1024px arasında hakkımda bölümü yatay düzene geçer ve form butonu tam genişlikten çıkar (tablet). 1024px üzerinde içerik max-width ile sınırlanır ve proje kartları 3 sütuna geçer (masaüstü).

## 2. Layout Tercihleri
- **Header** için **Flexbox** seçtim çünkü navigasyon çubuğu tek boyutlu (yatay) bir düzen gerektirir. Logo sola, nav linkleri sağa hizalamak `justify-content: space-between` ile kolayca çözülür. Mobilde `flex-direction: column` ile dikey yığına geçiş yaparız.
- **Proje kartları** için **CSS Grid** seçtim çünkü kartlar iki boyutlu bir ızgara düzeni oluşturur. `repeat(auto-fit, minmax(280px, 1fr))` ile media query yazmadan responsive grid elde ettim.
- **auto-fit** kullandım çünkü boş sütunlar olduğunda mevcut kartların genişlemesini istiyorum. auto-fill boş sütunları korurdu ve kartlar arasında gereksiz boşluk kalırdı.

## 3. Design Tokens
- **Renk paleti** olarak mavi tonlarını seçtim (`#1E3A8A` primary, `#2563EB` secondary). Bu renkler profesyonel ve güvenilir bir izlenim verir, kontrast oranı erişilebilirlik standartlarını karşılar.
- **Spacing skalası** olarak 4px tabanlı bir ölçek kullandım (0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem). Bu tutarlı bir görsel ritim sağlar.
- **Fluid typography** için `clamp()` fonksiyonunu `rem + vw` karışımıyla kullandım. Örneğin `clamp(1rem, 0.9rem + 0.5vw, 1.125rem)` — bu sayede yazı boyutu ekran genişliğiyle akıcı şekilde ölçeklenir ve kullanıcı zoom yaptığında da doğru büyür.

## 4. Responsive Stratejiler
- **Mobile-first** yaklaşımı uyguladım: Tüm CSS kuralları önce mobil (dar ekran) için yazıldı, ardından `min-width` media query'leri ile tablet (640px+) ve masaüstü (1024px+) için kurallar eklendi.
- Breakpoint'lerde değişen elemanlar: header düzeni (column → row), about-content yönü (column → row), section padding'leri, buton genişliği, proje grid sütun sayısı, main max-width sınırı.
- Görselleri `max-width: 100%`, `height: auto` ve `object-fit: cover` ile yönettim. Proje kartlarındaki görseller sabit yükseklik (200px) ile `object-fit: cover` kullanarak orantısız uzamadan korunuyor.
