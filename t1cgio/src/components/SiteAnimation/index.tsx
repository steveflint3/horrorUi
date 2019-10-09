import * as React from 'react';

import combineClasses from '@util/combineClasses';

import styles from './index.scss';

import lottie from 'lottie-web';
// This data was generated with BodyMovin and After Effects
import animation from './data.json';

let loadInit = false;
if (!('IntersectionObserver' in window)) {
  // Load all images at once
  // @ts-ignore
  window.IntersectionObserver = () => ({
    observe: (): any => null,
  });
  loadInit = true;
}

const loadAnimation = (div: HTMLDivElement) => {
  lottie.loadAnimation({
    autoplay: true,
    container: div,
    loop: true,
    path: animation,
    renderer: 'svg',
  });
};

interface IState {
  loaded: boolean;
}

interface IProps {
  className?: string;
}

class SiteAnimation extends React.Component<IProps, IState> {
  public state = {loaded: loadInit};
  private animRef = React.createRef<HTMLDivElement>();

  // Prevent loading and playing of the animation until it is actually on screen
  private io = new IntersectionObserver(
    entries => {
      const anim = entries[0];
      if (anim) {
        if (anim.isIntersecting) {
          if (this.state.loaded) {
            lottie.play();
          } else {
            loadAnimation(this.animRef.current);
            this.setState({loaded: true});
          }
        } else {
          lottie.pause();
        }
      }
    },
    {threshold: [0]}
  );

  componentDidMount() {
    if (this.animRef.current) {
      this.io.observe(this.animRef.current);
    }

    if (loadInit) {
      loadAnimation(this.animRef.current);
    }
  }

  render() {
    return (
      <div className={combineClasses(styles.container, this.props.className)}>
        <div className={combineClasses(styles.square, styles.square1)} />
        <div className={combineClasses(styles.square, styles.square2)} />
        <div className={combineClasses(styles.square, styles.square3)} />
        <div className={combineClasses(styles.square, styles.square4)} />
        <div className={styles.wrapper}>
          <div ref={this.animRef} className={styles.animation} />
        </div>
      </div>
    );
  }
}
export default SiteAnimation;
