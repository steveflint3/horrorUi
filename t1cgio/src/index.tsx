import * as React from 'react';
import {render} from 'react-dom';
import {Helmet} from 'react-helmet';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';

import {ContactContext} from './global/context/ContactForm';

import ScrollToTop from '@components/ScrollToTop';

import ContactForm from '@components/ContactForm';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Nav from '@components/Nav';
import routes from './routes/routes';

import '@styles/main.scss';

import styles from './index.scss';

import androidicon192 from '@assets/icons/android-icon-192x192.png';
import appleicon114 from '@assets/icons/apple-icon-114x114.png';
import appleicon120 from '@assets/icons/apple-icon-120x120.png';
import appleicon144 from '@assets/icons/apple-icon-144x144.png';
import appleicon152 from '@assets/icons/apple-icon-152x152.png';
import appleicon180 from '@assets/icons/apple-icon-180x180.png';
import appleicon57 from '@assets/icons/apple-icon-57x57.png';
import appleicon60 from '@assets/icons/apple-icon-60x60.png';
import appleicon72 from '@assets/icons/apple-icon-72x72.png';
import appleicon76 from '@assets/icons/apple-icon-76x76.png';
import favicon16 from '@assets/icons/favicon-16x16.png';
import favicon32 from '@assets/icons/favicon-32x32.png';
import favicon96 from '@assets/icons/favicon-96x96.png';
import favicon from '@assets/icons/favicon.ico';
import manifest from '@assets/icons/manifest.json';

const ScrollTopW = withRouter(ScrollToTop as React.ComponentClass<any>);

interface IState {
  show: boolean;
  toggleShow: () => void;
}

class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.toggleShow = this.toggleShow.bind(this);
    this.closeContact = this.closeContact.bind(this);

    this.state = {
      show: false,
      toggleShow: this.toggleShow,
    };
  }

  public toggleShow() {
    this.setState(state => ({
      show: !state.show,
    }));
  }

  public closeContact() {
    this.setState({
      show: false,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <>
          <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <link rel="apple-touch-icon" sizes="57x57" href={appleicon57} />
            <link rel="apple-touch-icon" sizes="60x60" href={appleicon60} />
            <link rel="apple-touch-icon" sizes="72x72" href={appleicon72} />
            <link rel="apple-touch-icon" sizes="76x76" href={appleicon76} />
            <link rel="apple-touch-icon" sizes="114x114" href={appleicon114} />
            <link rel="apple-touch-icon" sizes="120x120" href={appleicon120} />
            <link rel="apple-touch-icon" sizes="144x144" href={appleicon144} />
            <link rel="apple-touch-icon" sizes="152x152" href={appleicon152} />
            <link rel="apple-touch-icon" sizes="180x180" href={appleicon180} />
            <link rel="shortcut icon" type="image/x-icon" href={favicon} />
            <link rel="icon" type="image/png" sizes="192x192" href={androidicon192} />
            <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
            <link rel="icon" type="image/png" sizes="96x96" href={favicon96} />
            <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
            <link rel="manifest" href={manifest} />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
          </Helmet>
          <ScrollTopW>
            <ContactContext.Provider value={this.state}>
              <div className={styles.parallaxContainer}>
                <Nav />
                <React.Suspense
                  fallback={
                    <div style={{height: '70vh'}}>
                      <Header background="page4" />
                    </div>
                  }>
                  <Switch>
                    {routes.map(route => {
                      return <Route key={r.path ? r.path : 'not-found'} {...r} />;
                    })}
                  </Switch>
                </React.Suspense>
                <Footer />
              </div>
            </ContactContext.Provider>
            {this.state.show && (
              <div className={styles.shade} onClick={this.closeContact}>
                <ContactForm className={styles.form} onClose={this.closeContact} />
              </div>
            )}
          </ScrollTopW>
        </>
      </BrowserRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
