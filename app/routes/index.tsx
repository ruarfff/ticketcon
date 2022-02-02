import type { MetaFunction, LinksFunction } from "remix";

import stylesUrl from "../styles/index.css";

import logo1 from "../img/sponsors/microsoft.jpg";
import logo2 from "../img/sponsors/snow.png";
import logo3 from "../img/sponsors/atlassian.png";
import logo4 from "../img/sponsors/remedy.png";

import img1 from "../img/about/img1.png";

import speaker1 from "../img/speaker/speakers-1.jpg";
import speaker2 from "../img/speaker/speakers-2.jpg";
import speaker3 from "../img/speaker/speakers-3.jpg";

import dante from "../img/speaker/dante.jpg";
import arnimzola from "../img/speaker/arnimzola.png";
import pinhead from "../img/speaker/pinhead.jpg";
import krang from "../img/speaker/krang.jpg";
import antax from "../img/speaker/antax.jpg";

import trump from "../img/speaker/trump.jpg";
import jong from "../img/speaker/jong.jpg";
import koch from "../img/speaker/koch.jpg";
import murdock from "../img/speaker/rupert-murdoch.jpg";
import janus from "../img/speaker/janus.png";
import shodan from "../img/speaker/SHODAN.jpg";

import blogImg1 from "../img/blog/img-1.jpg";
import blogImg2 from "../img/blog/img-2.jpg";
import blogImg3 from "../img/blog/img-3.jpg";

import winkImg from "../img/wink.jpg";

import backgroundImg from "../img/background/countdown.jpg";

import eventVideo from "../video/event.webm";

export let meta: MetaFunction = () => {
  return {
    title: "TicketCon",
    description:
      "Home of ticketing culture and the convention where the tickets submit us.",
  };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Index() {
  return (
    <>
      <section id="count">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="count-wrapper text-center">
                <div
                  className="time-countdown wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div id="clock" className="time-count"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="img-thumb">
                <img className="img-fluid" src={img1} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-xs-12">
              <div className="about-content">
                <div>
                  <div className="about-text">
                    <h2>About The Conference</h2>
                    <p>
                      Do you measure your productivity by tickets closed? Do you
                      have a healthy distrust of any software that isn't COTS
                      provided with a hefty enterprise license and a team of
                      contractors for support? Do you have a general distrust of
                      any automation created in your own company? If you
                      answered yes to any of those, this is the conference for
                      you!
                    </p>
                  </div>
                  <ul className="stylish-list mb-3">
                    <li>
                      <i className="lni lni-checkmark-circle"></i>Networking
                      with ticket system vendors
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>Learn cutting
                      edge techniques such as 'one ticket to rule them all' and
                      'using four ticketing systems for the same thing but
                      respond to only one of them randomly'
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>Get inspired
                      by record breaking ticket closers
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>The most fun
                      and obscure field names you should be using and making
                      required in a ticket
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>Throw rotten
                      garbage at developers
                    </li>
                  </ul>
                  <a className="btn btn-common" href="#information-bar">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="ready-to-play">
        <video id="bgvid" className="stop" loop>
          <source src={eventVideo} type="video/mp4" />
        </video>
        <div id="polina" className="video-text">
          <div className="tb-t">
            <div className="tb-c">
              <div className="polina">
                <button>
                  <i className="lni lni-play"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="information-bar">
        <div className="container">
          <div className="row inforation-wrapper">
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni lni-map-marker"></i>
                </li>
                <li>
                  <span>
                    <b>Location</b> Kafka Hall, NY, USA
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni lni-calendar"></i>
                </li>
                <li>
                  <span>
                    <b>Date & Time</b> 10am - 7pm, 23rd Aug
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni lni-mic"></i>
                </li>
                <li>
                  <span>
                    <b>Speakers</b> 45 Professionals
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12">
              <ul>
                <li>
                  <i className="lni lni-user"></i>
                </li>
                <li>
                  <span>
                    <b>Seats</b> 1000 People
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="intro" className="intro section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Why You Should Join?
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  It's time to take ticketing culture to the next level. Take
                  control. Stop mindless productivity. Track everything. <br />{" "}
                  Be part of the ticketing revolution where instead of following
                  the crowd and making change, we're stopping change!
                </p>
              </div>
            </div>
          </div>
          <div className="row intro-wrapper">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni lni-microphone"></i>
                <h3>Great Speakers</h3>
                <p>
                  Hear from the best in the ticketing business. All your
                  favourite ticket culture personalities at one event.
                </p>
                <span className="count-number">01</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text">
                <i className="lni lni-users"></i>
                <h3 className="ts-title">Like Minded People</h3>
                <p>
                  Enjoy the company of people who detest idiots who can't fill
                  in a ticket exactly right, just as much as you do.
                </p>
                <span className="count-number">02</span>
              </div>
              <div className="border-shap left"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni lni-bullhorn"></i>
                <h3>Global Event</h3>
                <p>
                  Learn how tickets are being leveraged all around the world to
                  maximise meta work.
                </p>
                <span className="count-number">03</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni lni-heart"></i>
                <h3>Get Inspired</h3>
                <p>
                  Did you know you can get highly skilled knowledge workers to
                  spend most of their time filling in tickets? Be inspired by
                  stories like this.
                </p>
                <span className="count-number">04</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni lni-cup"></i>
                <h3>Ticket Awards</h3>
                <p>
                  See how the best in the world are doing it. Most tickets
                  closed in a day. Fastest rejected ticket. Most fields in a
                  ticket and much much more.
                </p>
                <span className="count-number">05</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni lni-gallery"></i>
                <h3>Create Tickets with Friends</h3>
                <p>
                  Get to try out the latest in ticket creation technology with
                  your friends and colleagues.
                </p>
                <span className="count-number">06</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="counter-section section-padding"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni lni-mic"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">45</div>
                  <p>Speakers</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni lni-bulb"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">1000</div>
                  <p>Seats</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni lni-briefcase"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">4</div>
                  <p>Sponsors</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-xs-12 work-counter-widget">
              <div className="counter">
                <div className="icon">
                  <i className="lni lni-coffee-cup"></i>
                </div>
                <div className="counter-content">
                  <div className="counterUp">56</div>
                  <p>Sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="schedules" className="schedule section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Event Schedules
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Learn from the best in this amazing array of workshops from
                  the top names in the industry <br /> Note: You must{" "}
                  <a href="#contact-map">open a ticket</a> to get access to an
                  event.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 mb-5 text-center">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="monday-tab"
                    data-toggle="tab"
                    href="#monday"
                    role="tab"
                    aria-controls="monday"
                    aria-expanded="true"
                  >
                    <div className="item-text">
                      <h4>Day 01</h4>
                      <h5>23 August 2022</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="tuesday-tab"
                    data-toggle="tab"
                    href="#tuesday"
                    role="tab"
                    aria-controls="tuesday"
                  >
                    <div className="item-text">
                      <h4>Day 02</h4>
                      <h5>24 August 2022</h5>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="wednesday-tab"
                    data-toggle="tab"
                    href="#wednesday"
                    role="tab"
                    aria-controls="wednesday"
                  >
                    <div className="item-text">
                      <h4>Day 03</h4>
                      <h5>25 August 2022</h5>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12">
              <div
                className="schedule-area row wow fadeInDown"
                data-wow-delay="0.3s"
              >
                <div className="schedule-tab-content col-12 clearfix">
                  <div className="tab-content" id="myTabContent">
                    {[
                      {
                        day: "monday",
                        events: [
                          {
                            show: true,
                            time: "9.30 - 10.30 AM",
                            title: "The Divine Ticket Comedy",
                            description:
                              "Are you and your team constantly trying to get to ticket paradise but seem to be stuck in ticket purgatory? In this session you will learn techniques to keep your team on the right track, maximising ticket production and sending anti tickets, self service loving detractors straight to the inferno.",
                            location: "Purgatorio Room, 1st Floor.",
                            speaker: { image: dante, name: "Dante Alighieri" },
                          },
                          {
                            time: "10.30 - 11.30 AM",
                            title:
                              "9 Heads (Ticketing Systems) are Better Than One",
                            description:
                              "Any good ticket aficionado knows that a single source of truth only means a single source of failure and responsibility. By leveraging many systems at once, e.g. Remedy, ServiceNow and Jira, you keep the ticket skills in your company sharp and the numbers of tickets high. In this session you will learn the techniques to properly employ multiple systems simultaneously. How to randomly pick which one to respond to each day and how to appropriately punish those who can't figure out the right system to use at any given time.",
                            location:
                              "The Paperclip Room, 2nd Floor. Heil Hydra!",
                            speaker: { image: arnimzola, name: "Arnim Zola" },
                          },
                          {
                            time: "11.30 - 12.30 AM",
                            title: "Mastering the Art of the Ticket",
                            description:
                              'There has been a troubling trend in our industry towards making tickets "simpler" or "easy". This is wrong. In this session we will look at how to make a ticket so beautiful and complex it could act as a Lemarchand Configuration with the power to summon the Cenobites. Let us bring life back to the art that is a ticket configuration and sort the weak from the strong in our organisations.',
                            location: "The Toll Room, 1st Floor",
                            speaker: { image: pinhead, name: "Pinhead" },
                          },
                        ],
                      },
                      {
                        day: "tuesday",
                        events: [
                          {
                            show: true,
                            time: "9.30 - 10.30 AM",
                            title: "Not Smart Enough",
                            description:
                              "No one, nothing is smarter than The Krang. That said, you, a ticket author, may come close. We will look at how to make the smartest tickets possible. So smart that you can easily spot your idiot coworkers who don't know how to fill it in correctly. Learn how to spot an idiot ticket and how to feel justified in immediately closing it without explanation.",
                            location: "Technodrome Room, 2nd Floor",
                            speaker: { image: krang, name: "Krang" },
                          },
                          {
                            time: "10.30 - 11.30 AM",
                            title: "The Ticket Swamp of Sadness",
                            description:
                              "Your colleagues need to be more like Atreyu when it comes to tickets. Much like the swamp of sadness, they need to really believe to get through the processes we create. My role was to show what happens to those who stop believing. You think all these tickets are useless? You stop listening to the ticket-masters? Gloop! You're gone. In this session we will look at how to ensure you weed out all the non believers and your organisation becomes, in the truest sense, a Swamp of Sadness.",
                            location: "The Never-ending Room, 1st Floor",
                            speaker: { image: antax, name: "Artax" },
                          },
                          {
                            time: "11.30 - 12.30 AM",
                            title: "Fractal Ticketing",
                            description:
                              "How to automate your ticket workflows to ensure all redundant tickets assigned to 19 people who don't know each other stay in sync.",
                            location: "Transition Room, 2nd Floor",
                            speaker: { image: janus, name: "Janus" },
                          },
                        ],
                      },
                      {
                        day: "wednesday",
                        events: [
                          {
                            show: true,
                            time: "9.30 - 10.30 AM",
                            title: "Ticket Driven Development",
                            description:
                              "How to ensure not a single line of code exists that cannot be traced back to an immortal, perfect ticket.",
                            location: "Citadel Room, 3rd Floor",
                            speaker: { image: shodan, name: "SHODAN" },
                          },
                          {
                            time: "10.30 - 11.30 AM",
                            title: "TBD 3",
                            description: "TBD",
                            location: "someplace",
                            speaker: { image: speaker2, name: "TBD 3" },
                          },
                          {
                            time: "11.30 - 12.30 AM",
                            title: "TBD 4",
                            description: "TBD",
                            location: "someplace",
                            speaker: { image: speaker3, name: "TBD 4" },
                          },
                        ],
                      },
                    ].map((day, idx) => (
                      <div
                        key={day.day}
                        className={`tab-pane fade ${
                          idx == 0 ? "show active" : ""
                        }`}
                        id={day.day}
                        role="tabpanel"
                        aria-labelledby={day.day + "-tab"}
                      >
                        <div id={`accordion${idx}`}>
                          {day.events.map((event, i) => (
                            <div
                              className="card"
                              key={`${event.title}${idx}${i}`}
                            >
                              <div id={`heading${idx}${i}`}>
                                <div className="schedule-slot-time">
                                  <span>{event.time} </span>
                                  Workshop
                                </div>
                                <div
                                  className="collapsed card-header"
                                  data-toggle="collapse"
                                  data-target={`#collapse${idx}${i}`}
                                  aria-expanded="false"
                                  aria-controls={`collapse${idx}${i}`}
                                >
                                  <div className="images-box">
                                    <img
                                      className="img-fluid"
                                      src={event.speaker.image}
                                      alt=""
                                    />
                                  </div>
                                  <h4>{event.title}</h4>
                                  <h5 className="name">{event.speaker.name}</h5>
                                </div>
                              </div>
                              <div
                                id={`collapse${idx}${i}`}
                                className={`collapse show`}
                                aria-labelledby={`heading${idx}${i}`}
                                data-parent={`accordion${idx}`}
                              >
                                <div className="card-body">
                                  <p>{event.description}</p>
                                  <div className="location">
                                    <span>Location:</span> {event.location}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        Î
      </section>

      <section id="team" className="section-padding text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Our Speakers
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Tickets are not merely a tool or simply a part of your
                  workflow. They're a way of life. <br /> Hear from the people
                  living and breathing tickets each and every day.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-bt">
            {[
              {
                name: "Donal Trump",
                title: "Ticket philantorpist",
                image: trump,
              },
              {
                name: "Kim Jong Un",
                title: "Global leader and ticket enthusiast",
                image: jong,
              },
              {
                name: "Rupert Murdoch",
                title: "Ticket publisher",
                image: murdock,
              },
              {
                name: "Charles Koch",
                title: "Ticket magnate",
                image: koch,
              },
            ].map((speaker) => (
              <div key={speaker.name} className="col-lg-3 col-md-6 col-xs-12">
                <div className="team-item wow fadeInUp" data-wow-delay="0.2s">
                  <div className="team-img">
                    <img className="img-fluid" src={speaker.image} alt="" />
                    <div className="team-overlay">
                      <div className="overlay-social-icon text-center">
                        <ul className="social-icons">
                          <li>
                            <a href="#">
                              <i
                                className="lni lni-twitter-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni lni-google"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni lni-facebook-filled"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i
                                className="lni lni-pinterest"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="info-text">
                    <h3>
                      <a href="#">{speaker.name}</a>
                    </h3>
                    <p>{speaker.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://www.fbi.gov/wanted/topten"
            target="_blank"
            className="btn btn-common mt-30 wow fadeInUp"
            data-wow-delay="1.9s"
          >
            Meet all speakers
          </a>
        </div>
      </section>

      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Ticket Pricing
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  We have prices for all budgets <br /> assuming it's the budget
                  of a large global corporation.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xa-12 mb-3">
              <div
                className="price-block-wrapper wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="colmun-title">
                  <h5>Basic Pass</h5>
                </div>
                <div className="price">
                  <h2>$290</h2>
                  <span>Per Day</span>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Entrance</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Coffee Break</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Lunch on all days</span>
                    </li>
                    <li>
                      <i className="lni lni-close"></i>
                      <span className="text">Access to all areas</span>
                    </li>
                    <li>
                      <i className="lni lni-close"></i>
                      <span className="text">Certificate</span>
                    </li>
                    <li>
                      <i className="lni lni-close"></i>
                      <span className="text">Double Certificate</span>
                    </li>
                    <li>
                      <i className="lni lni-close"></i>
                      <span className="text">
                        Hunt people who like automation like in the movie Hard
                        Target
                      </span>
                    </li>
                  </ul>
                </div>
                <a href="#contact-map" className="btn btn-common">
                  Buy Ticket
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xa-12 mb-3">
              <div
                className="price-block-wrapper active wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="colmun-title">
                  <h5>Standard Pass</h5>
                </div>
                <div className="price">
                  <h2>$400</h2>
                  <span>Per Day</span>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Entrance</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Coffee Break</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Lunch on all days</span>
                    </li>
                    <li>
                      <i className="lni lni-close"></i>
                      <span className="text">Access to all areas</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Certificate</span>
                    </li>
                    <li>
                      <i className="lni lni-close"></i>
                      <span className="text">Double Certificate</span>
                    </li>
                    <li>
                      <i className="lni lni-close"></i>
                      <span className="text">
                        Hunt people who like automation like in the movie Hard
                        Target
                      </span>
                    </li>
                  </ul>
                </div>
                <a href="#contact-map" className="btn btn-common">
                  Buy Ticket
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xa-12 mb-3">
              <div
                className="price-block-wrapper wow fadeInRight"
                data-wow-delay="0.4s"
              >
                <div className="colmun-title">
                  <h5>Premium Pass</h5>
                </div>
                <div className="price">
                  <h2>$1000</h2>
                  <span>Per Day</span>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Entrance</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Coffee Break</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Lunch on all days</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Access to all areas</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Certificate</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">Double Certificate</span>
                    </li>
                    <li>
                      <i className="lni lni-checkmark-circle"></i>
                      <span className="text">
                        Hunt people who like automation like in the movie Hard
                        Target
                      </span>
                    </li>
                  </ul>
                </div>
                <a href="#" className="btn btn-common">
                  Buy Ticket
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Latest News
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Here's what's happening in the ticketing world
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img className="img-fluid" src={blogImg1} alt="" />
                  </a>
                </div>
                <div className="descr">
                  <div className="icon">
                    <i className="lni lni-image"></i>
                  </div>
                  <h3 className="title">
                    <a href="#">Learn Something New</a>
                  </h3>
                  <p>
                    Ticketing systems and circuses never seemed to have too much
                    in common... until now!
                  </p>
                </div>
                <div className="meta-tags">
                  <span className="date">
                    <i className="lni lni-calendar"></i> Jan 20, 2023
                  </span>
                  <span className="comments">
                    <i className="lni lni-comment-alt"></i>{" "}
                    <a href="#"> 0 Comment</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img className="img-fluid" src={blogImg2} alt="" />
                  </a>
                </div>
                <div className="descr">
                  <div className="icon">
                    <i className="lni lni-arrow-right"></i>
                  </div>
                  <h3 className="title">
                    <a href="#">Call for sponsors</a>
                  </h3>
                  <p>
                    Give us money and we'll convince people you are good and
                    wholesome.
                  </p>
                </div>
                <div className="meta-tags">
                  <span className="date">
                    <i className="lni lni-calendar"></i> March 15, 2023
                  </span>
                  <span className="comments">
                    <i className="lni lni-comment-alt"></i>{" "}
                    <a href="#"> 0 Comment</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-12">
              <div className="blog-item">
                <div className="blog-image">
                  <a href="#">
                    <img className="img-fluid" src={blogImg3} alt="" />
                  </a>
                </div>
                <div className="descr">
                  <div className="icon">
                    <i className="lni lni-camera"></i>
                  </div>
                  <h3 className="title">
                    <a href="#">How ticketing systems saved my marriage</a>
                  </h3>
                  <p>
                    I almost closed that ticket with no explanation but a quirky
                    bug in the ticketing system changed everything.
                  </p>
                </div>
                <div className="meta-tags">
                  <span className="date">
                    <i className="lni lni-calendar"></i> April 2, 2023
                  </span>
                  <span className="comments">
                    <i className="lni lni-comment-alt"></i>{" "}
                    <a href="#"> 0 Comment</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 text-center">
              <a
                href="https://allthatsinteresting.com/horror-stories"
                target="_blank"
                className="btn btn-common"
              >
                View all Blog
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="sponsors"
        className="section-padding"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Sponsors
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  A big thank you to all our sponsors for supporting ticketing
                  culture!
                </p>
              </div>
            </div>
          </div>
          <div
            className="row mb-30 text-center wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <div className="col-lg-12">
              <div className="sponsors-logo text-center">
                <a href="">
                  <img src={logo1} alt="logo1" />
                </a>
                <a href="">
                  <img src={logo2} alt="logo2" />
                </a>
                <a href="">
                  <img src={logo3} alt="logo3" />
                </a>
                <a href="">
                  <img src={logo4} alt="logo4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-map" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Contact Us
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Please fill out the form below which will create a ticket in
                  our system to send you a ticket if you choose the "I want to
                  buy a ticket" option.
                </p>
                <h6>
                  We have a 5 day SLA for responding to requests for tickets
                </h6>
                <img className="img-fluid wink" src={winkImg} alt="" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div
                className="container-form wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="form-wrapper">
                  <form
                    role="form"
                    method="post"
                    id="contactForm"
                    name="contact-form"
                    data-toggle="validator"
                  >
                    <div className="row">
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="email"
                            placeholder="First Name"
                            required
                            data-error="Please enter your name"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-6 form-line">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            data-error="Please enter your Email"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 form-line">
                        <div className="form-group">
                          <input
                            type="tel"
                            className="form-control"
                            id="msg_subject"
                            name="subject"
                            placeholder="Subject"
                            required
                            data-error="Please enter your message subject"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 form-line">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="msg_ticket"
                            name="ticket"
                            placeholder="I want to buy a ticket"
                            required
                            data-error="Please enter whether or not you want to buy a ticket"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 form-line">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="msg_family"
                            name="family"
                            placeholder="Exactly how may people are in your entire family?"
                            required
                            data-error="Please enter whether how many people are in your family"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 form-line">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="msg_color"
                            name="color"
                            placeholder="What is your favourite colour?"
                            required
                            data-error="Please enter your favourite colour"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12 form-line">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="msg_riddle"
                            name="riddle"
                            placeholder="You answer me, although I never ask you questions. What am I?"
                            required
                            data-error="Please answer that question"
                          />
                          <div className="help-block with-errors"></div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            className="form-control"
                            rows={4}
                            id="message"
                            name="message"
                            required
                            data-error="Write your message"
                          ></textarea>
                        </div>
                        <div className="form-submit">
                          <button
                            type="submit"
                            className="btn btn-common"
                            id="form-submit"
                            onClick={() => {
                              alert(
                                "Congratulations. Your ticket to contact us has been closed. Reason: None given."
                              );
                            }}
                          >
                            <i
                              className="fa fa-paper-plane"
                              aria-hidden="true"
                            ></i>{" "}
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="google-map-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <object
                style={{ border: 0, height: "450px", width: "100%" }}
                data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4887.11298000666!2d5.534714431860156!3d52.23327508990309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6362af67df9bd%3A0xde428797ccc55baa!2s3882%20SM%20Hell%2C%20Netherlands!5e0!3m2!1sen!2sie!4v1618855623543!5m2!1sen!2sie"
              ></object>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-text">
        <div className="container">
          <div className="row contact-wrapper">
            <div className="col-lg-4 col-md-5 col-xs-12">
              <ul>
                <li>
                  <i className="lni lni-home"></i>
                </li>
                <li>
                  <span>Submitter McTicket</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 col-xs-12">
              <ul>
                <li>
                  <i className="lni lni-phone"></i>
                </li>
                <li>
                  <span>+01 234 567 89</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-3 col-xs-12">
              <ul>
                <li>
                  <i className="lni lni-envelope"></i>
                </li>
                <li>
                  <span>support@ticketcon.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
