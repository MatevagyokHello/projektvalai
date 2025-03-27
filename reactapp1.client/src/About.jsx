// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Style/About.css";

function About() {
    return (
        <div className="about-container">
            {/* Fejléc – fix navigáció */}
            <header className="header">
                <nav>
                    <ul>
                        <li><a href="/mainpage2">Főoldal</a></li>
                        <li><a href="/mainpage3">Termékeink</a></li>
                        <li><a href="/stores">Üzleteink</a></li>
                        <li><a href="/mainpage">Bejelentkezés</a></li>
                        <li><a href="/registration">Regisztráció</a></li>
                        <li><a href="/admin/login">Admin</a></li>
                    </ul>
                </nav>
            </header>

            {/* Tartalom – extra padding a fejléc miatt */}
            <div className="about-content">
                <h1>Rólunk – Valai Pékség története</h1>
                <p className="intro-text">
                    A Valai Pékség egy több generációra visszatekintő családi vállalkozás, amely a hagyományos kézműves pékség szeretetére épül. Küldetésünk, hogy minden egyes falatban érezhető legyen a törődés, az odaadás és a minőségi alapanyagok ereje.
                </p>

                <div className="about-section">
                    <div className="about-image">
                        <img src="/img/kedvcsinalo.jpg" alt="Pékség" />
                    </div>
                    <div className="about-text">
                        <h2>Hagyomány és minőség kéz a kézben</h2>
                        <p>
                            A pékségünk története még nagyszüleink idejére nyúlik vissza, akik egyszerű, de őszinte receptekkel dolgoztak...
                        </p>
                        <p>
                            Csak a legkiválóbb hozzávalókkal dolgozunk...
                        </p>
                        <p>
                            A sütés nálunk nemcsak munka – szenvedély...
                        </p>
                    </div>
                </div>

                <div className="sustainability">
                    <h2>Fenntarthatóság és felelős gondolkodás</h2>
                    <ul>
                        <li>✅ Helyi termelőktől szerezzük be alapanyagainkat.</li>
                        <li>✅ Minimalizáljuk az élelmiszer-pazarlást.</li>
                        <li>✅ Környezetbarát csomagolásokat használunk.</li>
                        <li>✅ Folyamatosan fejlesztjük üzleteink energiahatékonyságát is.</li>
                    </ul>
                </div>

                <div className="contact-info">
                    <h2>Látogass el hozzánk!</h2>
                    <p>📍 Valai Pékség, 8254 Kővágóőrs, Fő utca 3.</p>
                    <p>🕘 Nyitvatartás: Hétfőtől Szombatig, 5:30 – 12:00</p>
                    <p>📞 Telefon: +36 30 123 4567</p>
                    <p>🌐 <a href="https://www.valaipekseg.hu">www.valaipekseg.hu</a></p>
                    <p>📧 <a href="mailto:info@valaipekseg.hu">info@valaipekseg.hu</a></p>
                </div>
            </div>
        </div>
    );
}

export default About;
