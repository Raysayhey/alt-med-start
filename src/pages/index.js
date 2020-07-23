import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';
import logo_1 from '../assets/images/logo_1.png';


const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-7 my-auto">
            <div className="header-content mx-auto">
              <h1 className="mb-5">
                Alt-Med ist eine App aus Zürich von einem jungen Startup. 
              </h1>
              <Scroll type="id" element="download">
                <a href="#download" className="btn btn-outline btn-xl">
                  Jetzt ausprobieren
                </a>
              </Scroll>
            </div>
          </div>
          <div className="col-lg-5 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Beta startet im August 2020
            </h2>
            <p>
              Wir sind für Android und IoS vorhanden
            </p>
            <div className="badges">
              <a className="badge-link" href="/#">
                <img src={gplay} alt="" />
              </a>
              <a className="badge-link" href="/#">
                <img src={astore} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Services, Events & Deals </h2>
          <p className="text-muted">
            Alternativ Medizin einfach einfacher
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>spontan & flexibel</h3>
                    <p className="text-muted">
                      Finde alles was heute noch verfügbar ist. Buche was dir gefällt.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>gratis buchen</h3>
                    <p className="text-muted">
                      Buche deinen Service oder Event gratis - ohne Werbung
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Folge deinen lieblings Praktizierer</h3>
                    <p className="text-muted">
                      Du bekommst eine Nachricht wenn mal wieder etwas von deinen Favoriten verfügbar ist.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Alt-Med</h3>
                    <p className="text-muted">
                      Alles von Massage, Shiatsu, Akupunktur bis zu Yoga, Tai Chi & Sport alles in einem App
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            - suchen
            <br />
            - finden<br />
            - buchen
          </h2>
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Jetzt ausprobieren
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Alt-Med.app</h2>
          <p className="text-muted">
            Design & Anwendung
          </p>
          <hr />
        </div>
        <div className="row">


        <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Geolocation</h3>
                    <p className="text-muted">
                      Finde alles ganz in deiner Nähe. <br />
                      GPS bleibt immer optional.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Anmelden</h3>
                    <p className="text-muted">
                      Anmelden, mit SMS Code verifizieren und loslegen.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Benachrichtigungen Anpassungen</h3>
                    <p className="text-muted">
                      In den Einstellungen kannst du selbst entscheiden, wieviel Benachrichrichtigungen du möchtest.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Alt-Med</h3>
                    <p className="text-muted">
                      Stärke dein Immunsystem mit diversen Methoden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup iphone6_plus portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={demo1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>

    <section className="contact bg-t" id="contact">
      <div className="container">
        <h2>
          Wir  <span />
          <i className="fas fa-heart"></i>  <span />
          unsere Arbeit
        </h2>
        <a href="tel:0792016803">Telefon </a> 
        {/* <i className="fa fa-user"></i>  <span /> */}
        <i className="fas fa-blank"></i>  <span />
        <i className="fas fa-blank"></i>  <span />
        <i className="fas fa-blank"></i>  <span />
        <i className="fas fa-blank"></i>  <span />
        <i className="fas fa-blank"></i>  <span />
        <i className="fas fa-blank"></i>  <span />
        <i className="fas fa-blank"></i>  <span />
        <i className="fas fa-blank"></i>  <span />
        <i className="fas fa-blank"></i>  <span />
   




        {/* <i className="fa fa-envelope-open"></i>  <span /> */}

       <a href="mailto:ray@blocklab.ch">Mail </a> 
        <Social />

      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Alt-Med App</h2>
          <p className="text-muted">
            
          </p>
          <hr />
        </div>
        <div className="row">


        <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Bezahlung</h3>
                    <p className="text-muted">
                      Bezahl direkt beim Praktizierer nach dem Service oder Event.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Ohne Werbung</h3>
                    <p className="text-muted">
                      Wir sind kein Fan von Werbung.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Praktizierer </h3>
                    <p className="text-muted">
                      Praktizierer erstellen die Events und Services - Wir verdienen nur wenn nach erfolgreicher Buchung der Kunde auch auftaucht.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Alt-Med</h3>
                    <p className="text-muted">
                      Wir wollen eine Faire Plattform für Alles und Jeden.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 my-auto">
            <div className="device-container">
              <div className="device-mockup macbook portrait white">
                <div className="device">
                  <div className="screen">
                    <img src={logo_1} className="img-fluid" alt="" />
                  </div>
                  <div className="button"></div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
