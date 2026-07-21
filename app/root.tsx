import { useEffect, useState, type FormEvent } from "react";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getApp, getApps, initializeApp } from "firebase/app";

import HomePage from "./routes/index";
import logo from "./img/logo.png";
import heroBG from "./img/hero-area.jpg";

function useFirebaseAnalytics() {
  useEffect(() => {
    let cancelled = false;

    async function initializeAnalytics() {
      try {
        const response = await fetch("/__/firebase/init.json", {
          headers: { Accept: "application/json" },
        });
        const contentType = response.headers.get("content-type") ?? "";

        if (!response.ok || !contentType.includes("application/json")) {
          return;
        }

        const firebaseConfig = await response.json();
        if (cancelled || !(await isSupported())) {
          return;
        }

        const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
        getAnalytics(app);
      } catch {
        // Analytics should never prevent the static site from rendering.
      }
    }

    void initializeAnalytics();

    return () => {
      cancelled = true;
    };
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useFirebaseAnalytics();

  useEffect(() => {
    function updateNavigation() {
      setScrolled(window.scrollY > 200);
    }

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    return () => window.removeEventListener("scroll", updateNavigation);
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.alert(
      "Congratulations. Your ticket to request updates has been closed. Reason: None given.",
    );
  }

  return (
    <>
      <header id="header-wrap">
        <nav
          className={`navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar${
            scrolled ? " top-nav-collapse" : ""
          }`}
        >
          <div className="container">
            <a href="#header-wrap" className="navbar-brand" onClick={closeMenu}>
              <img src={logo} alt="TicketCon" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              aria-controls="navbarCollapse"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <i className="lni lni-menu" aria-hidden="true"></i>
            </button>
            <div
              className={`collapse navbar-collapse${menuOpen ? " show" : ""}`}
              id="navbarCollapse"
            >
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="nav-item active">
                  <a className="nav-link" href="#header-wrap" onClick={closeMenu}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about" onClick={closeMenu}>
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#schedules" onClick={closeMenu}>
                    Schedules
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team" onClick={closeMenu}>
                    Speakers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing" onClick={closeMenu}>
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#sponsors" onClick={closeMenu}>
                    Sponsors
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#google-map-area"
                    onClick={closeMenu}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div
          id="hero-area"
          className="hero-area-bg"
          style={{
            backgroundImage: `url(${heroBG})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="overlay"></div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9 col-sm-12">
                <div className="contents text-center">
                  <div className="icon">
                    <i className="lni lni-mic" aria-hidden="true"></i>
                  </div>
                  <p className="banner-info">
                    23, Aug 2027 - Kafka Hall, NY, United States
                  </p>
                  <h1 className="head-title">Ticket Conference</h1>
                  <p className="banner-desc">
                    A place for ticket culture enthusiasts. Tickets are eating
                    the world. We are the pioneers bringing true value to the
                    industries of today ensuring everybody understands the
                    power of the ticket.
                  </p>
                  <div className="banner-btn">
                    <a href="#contact-map" className="btn btn-common">
                      Get Ticket
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <HomePage />
      </main>

      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="subscribe-inner">
                <h2 className="subscribe-title">To Get Updates</h2>
                <form
                  className="text-center form-inline"
                  onSubmit={handleSubscribe}
                >
                  <input
                    type="email"
                    className="mb-20 form-control"
                    name="email"
                    placeholder="Enter Your Email Here"
                    aria-label="Email address"
                    required
                  />
                  <button
                    type="submit"
                    className="btn btn-common sub-btn"
                    name="submit"
                    id="submit"
                  >
                    <span className="ladda-label">
                      <i className="lni lni-check-box" aria-hidden="true"></i>{" "}
                      Subscribe
                    </span>
                  </button>
                </form>
              </div>
              <div className="footer-logo">
                <img src={logo} alt="TicketCon" />
              </div>
              <div className="social-icons-footer">
                <ul>
                  <li className="facebook">
                    <a href="#" aria-label="Facebook">
                      <i
                        className="lni lni-facebook-filled"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a href="#" aria-label="Twitter">
                      <i
                        className="lni lni-twitter-filled"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </li>
                  <li className="pinterest">
                    <a href="#" aria-label="Pinterest">
                      <i className="lni lni-pinterest" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="site-info">
                <p>
                  Based on template by{" "}
                  <a href="https://uideck.com" rel="nofollow">
                    UIdeck
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {scrolled && (
        <a href="#header-wrap" className="back-to-top" aria-label="Back to top">
          <i className="lni lni-chevron-up" aria-hidden="true"></i>
        </a>
      )}
    </>
  );
}
