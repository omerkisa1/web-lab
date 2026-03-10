import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'
import Alert from '../components/Alert'

export default function UIKit() {
    const [showError, setShowError] = useState(true)

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 p-8 space-y-12">
            {/* Dark Mode Toggle */}
            <button
                onClick={() => document.documentElement.classList.toggle('dark')}
                className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
                aria-label="Tema değiştir"
            >
                <span className="dark:hidden">&#9790;</span>
                <span className="hidden dark:inline">&#9728;</span>
            </button>

            <div className="max-w-5xl mx-auto space-y-12">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-bold">UI Kit</h1>
                    <a
                        href="#/"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        ← Portföye Dön
                    </a>
                </div>

                {/* --- BUTTONS --- */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">
                        Buttons
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        4 renk varyantı × 3 boyut. Primary, Secondary, Danger ve Ghost.
                    </p>

                    {/* Varyant 1-4: Renk varyantları */}
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="danger">Danger</Button>
                        <Button variant="ghost">Ghost</Button>
                    </div>

                    {/* Boyut varyantları */}
                    <div className="flex flex-wrap items-end gap-3">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>

                    {/* Disabled durumu */}
                    <div className="flex flex-wrap gap-3">
                        <Button variant="primary" disabled>
                            Disabled Primary
                        </Button>
                        <Button variant="secondary" disabled>
                            Disabled Secondary
                        </Button>
                    </div>
                </section>

                {/* --- INPUTS --- */}
                <section className="space-y-4 max-w-md">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">
                        Inputs
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Normal, hatalı, yardım metni ve devre dışı varyantları.
                    </p>

                    {/* Varyant 5: Normal Input */}
                    <Input
                        id="ui-name"
                        label="Normal Input"
                        placeholder="Bir şey yazın..."
                    />

                    {/* Varyant 6: Hatalı Input */}
                    <Input
                        id="ui-err"
                        label="Hatalı Input"
                        error="Bu alan zorunludur"
                    />

                    {/* Varyant 7: Help Text */}
                    <Input
                        id="ui-help"
                        label="Help Text"
                        type="email"
                        helpText="E-posta adresinizi girin"
                    />

                    {/* Varyant 8: Disabled */}
                    <Input
                        id="ui-dis"
                        label="Disabled"
                        disabled
                        value="Düzenlenemez"
                    />
                </section>

                {/* --- CARDS --- */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">
                        Cards
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Elevated (gölgeli), Outlined (çerçeveli) ve Filled (dolgulu)
                        varyantları.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Varyant 9: Elevated */}
                        <Card variant="elevated" title="Elevated Card">
                            <p>Gölge ile yükseltilmiş kart.</p>
                        </Card>

                        {/* Varyant 10: Outlined */}
                        <Card variant="outlined" title="Outlined Card">
                            <p>Çerçeveli kart.</p>
                        </Card>

                        {/* Varyant 11: Filled */}
                        <Card
                            variant="filled"
                            title="Filled Card"
                            footer={<Button size="sm">Detay</Button>}
                        >
                            <p>Dolgulu arka plan, footer ile.</p>
                        </Card>
                    </div>
                </section>

                {/* --- ALERTS --- */}
                <section className="space-y-4 max-w-xl">
                    <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2">
                        Alerts
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Info, Success, Warning ve Error varyantları. Error dismissible.
                    </p>

                    {/* Varyant 12: Info */}
                    <Alert variant="info" title="Bilgi">
                        Bilgilendirme mesajı.
                    </Alert>

                    {/* Varyant 13: Success */}
                    <Alert variant="success" title="Başarılı">
                        İşlem tamamlandı!
                    </Alert>

                    {/* Varyant 14: Warning */}
                    <Alert variant="warning" title="Uyarı">
                        Dikkat edilmesi gereken durum.
                    </Alert>

                    {/* Varyant 15: Error + Dismissible */}
                    {showError && (
                        <Alert
                            variant="error"
                            title="Hata"
                            dismissible
                            onDismiss={() => setShowError(false)}
                        >
                            Bağlantı kurulamadı. Tekrar deneyin.
                        </Alert>
                    )}
                </section>
            </div>
        </div>
    )
}
