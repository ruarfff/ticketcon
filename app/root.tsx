import React from "react";
import type { LinksFunction, LoaderFunction } from "remix";
import { Meta, Links, Scripts, useLoaderData } from "remix";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import nivoLightboxStyle from "./css/nivo-lightbox.css";
import animateStyle from "./css/animate.css";
import mainStyle from "./css/main.css";
import responsiveStyle from "./css/responsive.css";
import globalStyle from "./styles/global.css";

import logo from "./img/logo.png";
import heroBG from "./img/hero-area.jpg";

declare global {
  interface Window {
    jQuery: any;
    $: any;
    WOW: any;
  }
}

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Open+Sans|Roboto:500,700",
    },
    { rel: "stylesheet", href: "https://cdn.lineicons.com/2.0/LineIcons.css" },
    {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    },
    { rel: "stylesheet", href: nivoLightboxStyle },
    { rel: "stylesheet", href: animateStyle },
    { rel: "stylesheet", href: mainStyle },
    { rel: "stylesheet", href: responsiveStyle },
    { rel: "stylesheet", href: globalStyle },
  ];
};

export let loader: LoaderFunction = () => {
  return { date: new Date() };
};

export default function App() {
  let data = useLoaderData();

  useEffect(() => {
    const load = async () => {
      window.$ = window.jQuery = require("jquery");
      require("bootstrap");
      require("./js/waypoint.js");
      require("./js/jquery.countdown.min.js");
      require("./js/jquery.counterup.min.js");
      require("./js/jquery.nav.js");
      require("./js/jquery.easing.min.js");
      require("./js/nivo-lightbox.js");
      require("./js/video.js");
      require("./js/main.js");

      const result = await fetch(`/__/firebase/init.json`);
      const firebaseConfig = await result.json();
      try {
        initializeApp(firebaseConfig);
        getAnalytics();
      } catch (err) {
        console.log(err);
      }
    };

    load();
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
        <Meta />
        <Links />
      </head>
      <body>
        <header id="header-wrap">
          <nav className="navbar navbar-expand-lg bg-inverse fixed-top scrolling-navbar">
            <div className="container">
              <a href="/" className="navbar-brand">
                <img src={logo} alt="logo" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarCollapse"
                aria-controls="navbarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="lni lni-menu"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                  <li className="nav-item active">
                    <a className="nav-link" href="#header-wrap">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#schedules">
                      Schedules
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team">
                      Speakers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pricing">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#sponsors">
                      Sponsors
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#google-map-area">
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
                      <i className="lni lni-mic"></i>
                    </div>
                    <p className="banner-info">
                      23, Aug 2021 - Kafka Hall, NY, United states
                    </p>
                    <h2 className="head-title">Ticket Conference</h2>
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
          <Outlet />
        </main>

        <footer>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-md-12 col-xs-12">
                <div
                  className="subscribe-inner wow fadeInDown"
                  data-wow-delay="0.3s"
                >
                  <h2 className="subscribe-title">To Get Updates</h2>
                  <form className="text-center form-inline">
                    <input
                      className="mb-20 form-control"
                      name="email"
                      placeholder="Enter Your Email Here"
                    />
                    <button
                      type="submit"
                      className="btn btn-common sub-btn"
                      data-style="zoom-in"
                      data-spinner-size="30"
                      name="submit"
                      id="submit"
                      onClick={() => {
                        alert(
                          "Congratulations. Your ticket to request updates has been closed. Reason: None given."
                        );
                      }}
                    >
                      <span className="ladda-label">
                        <i className="lni lni-check-box"></i> Subscribe
                      </span>
                    </button>
                  </form>
                </div>
                <div className="footer-logo">
                  <img src={logo} alt="logo" />
                </div>
                <div className="social-icons-footer">
                  <ul>
                    <li className="facebook">
                      <a target="_blank" href="#">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li className="twitter">
                      <a target="_blank" href="#">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li className="pinterest">
                      <a target="_blank" href="#">
                        <i className=" lni lni-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="site-info">
                  <p>
                    Based on template by{" "}
                    <a href="http://uideck.com" rel="nofollow">
                      UIdeck
                    </a>
                  </p>
                  <p>This page was rendered at {data.date.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <a href="#" className="back-to-top">
          <i className="lni lni-chevron-up"></i>
        </a>

        <div id="preloader">
          <div className="sk-circle">
            <div className="sk-circle1 sk-child"></div>
            <div className="sk-circle2 sk-child"></div>
            <div className="sk-circle3 sk-child"></div>
            <div className="sk-circle4 sk-child"></div>
            <div className="sk-circle5 sk-child"></div>
            <div className="sk-circle6 sk-child"></div>
            <div className="sk-circle7 sk-child"></div>
            <div className="sk-circle8 sk-child"></div>
            <div className="sk-circle9 sk-child"></div>
            <div className="sk-circle10 sk-child"></div>
            <div className="sk-circle11 sk-child"></div>
            <div className="sk-circle12 sk-child"></div>
          </div>
        </div>

        <Scripts />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }): JSX.Element {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/root.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  );
}
