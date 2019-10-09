import * as React from 'react';
import {RouteComponentProps} from 'react-router-dom';

class ScrollToTop extends React.Component<RouteComponentProps> {
  componentDidUpdate(prevProps: RouteComponentProps) {
    if (this.props.location !== prevProps.location) {
      if (this.props.location.hash === '') {
        // Scroll to the top on a new
        setTimeout(() => {
          document.getElementById('nav').scrollIntoView();
        }, 0);
      }

      // Update the Google Analytics page when route changes
      if ((window as any).gtag) {
        (window as any).gtag('config', 'UA-108905166-1', {
          page_path: `${this.props.location.pathname}`,
        });
      }
    }
  }

  render() {
    return this.props.children;
  }
}

export default ScrollToTop;
