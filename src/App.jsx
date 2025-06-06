import "./App.css"

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="logo-icon"></div>
            <span className="logo-text">PORTFOLIO</span>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link active">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#services" className="nav-link">
              Services
            </a>
            <a href="#portfolio" className="nav-link">
              Portfolio
            </a>
            <a href="#page" className="nav-link">
              Page
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
          <button className="cta-button">Get Free Consultant</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="decorative-circle"></div>
              <p className="hero-subtitle">GET EVERY SINGLE SOLUTIONS.</p>
              <h1 className="hero-title">
                I'm Designer
                <br />
                Haris F. Watson
              </h1>
              <p className="hero-description">
                Ipsum ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Quis ipsum suspendisse ultrices gravida.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary">Learn More</button>
                <button className="btn-secondary">Hire Me</button>
              </div>
            </div>
            <div className="hero-right">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Haris F. Watson - Designer"
                className="hero-image"
              />
            </div>
          </div>
        </div>
        <div className="wave-decoration"></div>
      </section>

      {/* Bottom Section */}
      <section className="bottom-section">
        <div className="container">
          <div className="bottom-content">
            <div className="bottom-left">
              <h2>Designing With Passion While Exploring The World.</h2>
            </div>
            <div className="bottom-right">
              <h2>Any Type Of Query & Discussion.</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
