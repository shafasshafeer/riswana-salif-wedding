import React, { useEffect } from 'react';
import { MapPin, Calendar, Clock, Heart, Star, Navigation } from 'lucide-react';
import './App.css';

import heroBg from './assets/invitation-bg.webp';

// 📍 Reusable location constants
const VENUE_NAME = "RAK Plaza, Pulichod, Kerala";
const VENUE_COORDS = "10.30056648982072,76.14907167479784";
const VENUE_MAP_LINK = `https://www.google.com/maps/dir/?api=1&destination=${VENUE_COORDS}`;

function App() {
  
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');
    const parallaxElements = document.querySelectorAll('.parallax-element');
    const heroBgEl = document.querySelector('.hero-bg');

    const handleScroll = () => {
      revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementTop < windowHeight - 80) {
          el.classList.add('active');
        }
      });

      const scrolled = window.pageYOffset;

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed')) || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });

      // ⬇️ GENTLE ZOOM — no more over-cropping faces
      if (heroBgEl) {
        const scale = 1 + Math.min(scrolled * 0.0001, 0.05);
        const translateY = scrolled * 0.15;
        heroBgEl.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      
      {/* --- Sticky Nav --- */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#invitation">Invitation</a>
          <a href="#events">Events</a>
          <a href="#location">Location</a>
        </div>
      </nav>

      {/* --- HERO --- */}
      <section id="home" className="hero">
        
        <div 
          className="hero-bg" 
          style={{ backgroundImage: `url(${heroBg})` }}
        ></div>
        
        <div className="hero-overlay"></div>
        <div className="hero-pattern"></div>
        
        <div className="parallax-layer">
          <svg className="floating-flower parallax-element" data-speed="0.15" viewBox="0 0 100 100" fill="none">
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="#d4af37" opacity="0.5"/>
          </svg>
          <svg className="floating-flower parallax-element" data-speed="0.35" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" stroke="#fcf6ba" strokeWidth="1.5" opacity="0.5"/>
            <circle cx="50" cy="50" r="20" fill="#b39ddb" opacity="0.3"/>
          </svg>
          <svg className="floating-flower parallax-element" data-speed="0.25" viewBox="0 0 100 100" fill="none">
            <path d="M50 10 L90 50 L50 90 L10 50 Z" stroke="#fcf6ba" strokeWidth="1.5" opacity="0.6"/>
          </svg>
          <svg className="floating-flower parallax-element" data-speed="0.45" viewBox="0 0 100 100" fill="none">
            <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="#fcf6ba" opacity="0.4"/>
          </svg>
          <svg className="floating-flower parallax-element" data-speed="0.2" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="25" fill="#d4af37" opacity="0.25"/>
          </svg>
        </div>

        <div className="hero-content">
          <p className="hero-intro">We are getting married</p>
          <h1>Riswana</h1>
          <div className="ampersand">&</div>
          <h1>Muhammed Salif</h1>
          <p className="gold-text hero-hashtag">#RiswanaWedsSalif</p>
        </div>

        <div className="scroll-indicator">Scroll</div>
      </section>

      {/* --- QURANIC VERSE --- */}
      <section className="verse-section">
        <div className="container">
          <Star className="text-gold" size={32} style={{margin: '0 auto 25px', display: 'block'}} />
          <p className="verse-text reveal">
            "And among His signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts."
          </p>
          <p className="verse-ref reveal">Surah Ar-Rum 30:21</p>
        </div>
      </section>

      {/* --- INVITATION --- */}
      <section id="invitation" className="invitation-section">
        
        <div className="invitation-geometric"></div>
        
        <div className="container">
          <div className="invitation-card-wrapper reveal-scale">
            
            <div className="corner-flourish tl"></div>
            <div className="corner-flourish tr"></div>
            <div className="corner-flourish bl"></div>
            <div className="corner-flourish br"></div>

            <svg className="crescent-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 C30 10, 15 30, 15 50 C15 70, 30 90, 50 90 C38 82, 30 68, 30 50 C30 32, 38 18, 50 10 Z" fill="#ffffff"/>
              <polygon points="65,35 68,45 78,45 70,52 73,62 65,55 57,62 60,52 52,45 62,45" fill="#ffffff"/>
            </svg>

            <p className="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
            <p className="invitation-label">In the name of Allah, the Most Gracious, the Most Merciful</p>

            <div className="elegant-divider">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>

            <p className="invitation-intro">
              Together with their families,<br/>
              we joyfully invite you to the<br/>
              <strong>Wedding Reception</strong>
            </p>

 <div className="parents-info">
              S/o Mr. Sathar C.K. & Mrs. Faseela Sathar<br/>
              Chemboothum Parambil (H), Mathilakam<br/>
              Ph : 9048616068
            </div>

            <div className="couple-names-large">Muhammed Salif</div>
            <div className="with-text">with</div>
            <div className="couple-names-large">Riswana</div>

           

            <div className="elegant-divider">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>

            <p className="request-text">
              Request your Presence and blessing at the<br/>
              Wedding Reception of our beloved son
            </p>

            <div className="hexagon-grid">
              <div className="hex-item">
                <div className="hex-icon-box">
                  <Calendar size={26} />
                </div>
                <p>25th Sunday<br/><span>October 2026</span></p>
              </div>
              
              <a 
                className="hex-item clickable" 
                href={VENUE_MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open RAK Plaza location in Google Maps"
              >
                <div className="hex-icon-box">
                  <MapPin size={26} />
                </div>
                <p>Rak Plaza<br/><span>Pulichod</span></p>
              </a>

              <div className="hex-item">
                <div className="hex-icon-box">
                  <Clock size={26} />
                </div>
                <p>Reception Time<br/><span>6.00 pm</span></p>
              </div>
            </div>

            <div className="elegant-divider">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>

            <div className="blessing-text">
              May Allah Bless you both and unite<br/>
              you in goodness<br/>
              <span style={{fontSize: '0.9em', opacity: 0.8}}>(Quran 30:21)</span>
            </div>

            <div className="elegant-divider">
              <div className="line"></div>
              <div className="diamond"></div>
              <div className="line"></div>
            </div>

            <div className="brother-text">
              With warm regards and thanks<br/>
              from his brother
            </div>
            <div className="brother-name">Sahil CS</div>

          </div>
        </div>
      </section>

      {/* --- EVENTS --- */}
      <section id="events" className="section events-section">
        <div className="container text-center">
          <h2 className="script-font text-lavender reveal" style={{fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginBottom: '10px'}}>When & Where</h2>
          <p className="reveal" style={{color: '#666', letterSpacing: '4px', fontSize: '0.8rem', textTransform: 'uppercase'}}>Mark Your Calendars</p>
          
          <div className="event-cards">
            
            <div className="event-card reveal-left">
              <Calendar className="event-icon" size={45} />
              <h3>Reception</h3>
              <p>Sunday, 25th October 2026</p>
              <p style={{marginTop: '12px', fontSize: '0.9rem', color: '#7e57c2', fontWeight: '600', letterSpacing: '1px'}}>6:00 PM ONWARDS</p>
            </div>

            <a 
              className="event-card reveal-right"
              href={VENUE_MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open RAK Plaza location in Google Maps"
            >
              <MapPin className="event-icon" size={45} />
              <h3>Venue</h3>
              <p><strong>Rak Plaza</strong></p>
              <p>Pulichod</p>
              <p style={{marginTop: '12px', fontSize: '0.9rem', color: '#7e57c2', fontWeight: '600', letterSpacing: '1px'}}>KERALA, INDIA</p>
              <span className="click-tag">Tap for Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* --- MAP --- */}
      <section id="location" className="map-section">
        <div className="container text-center">
          <Navigation className="text-gold reveal" size={35} style={{margin: '0 auto 20px', display: 'block'}} />
          <h2 className="script-font reveal" style={{fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: '#fff'}}>Find Your Way</h2>
          <p className="reveal" style={{color: '#d1c4e9', letterSpacing: '4px', fontSize: '0.8rem', textTransform: 'uppercase'}}>Rak Plaza, Pulichod</p>
          
          <div className="map-container reveal-scale">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.5154959159445!2d76.14907167479784!3d10.30056648982072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081e3e7d50a399%3A0xfdf8ee609ac92a1!2sRAK%20Plaza!5e0!3m2!1sen!2sin!4v1789638712249!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
              title="Wedding Venue Map - RAK Plaza, Pulichod"
            ></iframe>
          </div>
          <div style={{marginTop: '40px'}} className="reveal">
            <a 
              href={VENUE_MAP_LINK}
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-premium"
            >
              <MapPin size={18} /> Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="container">
          <Heart color="var(--gold)" size={32} style={{marginBottom: '20px'}} />
          <h3 className="script-font reveal" style={{fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--lavender-deep)'}}>Riswana & Muhammed Salif</h3>
          <p className="reveal" style={{color: '#666', marginTop: '15px', fontSize: '0.9rem', fontWeight: '300'}}>We look forward to celebrating with you. Insha'Allah.</p>
          <div style={{margin: '30px auto', width: '80px', height: '2px', background: 'linear-gradient(to right, transparent, var(--gold), transparent)'}}></div>
          <p style={{color: '#999', fontSize: '0.8rem', letterSpacing: '1px'}}>Made with Love © 2024</p>
        </div>
      </footer>

    </div>
  );
}

export default App;