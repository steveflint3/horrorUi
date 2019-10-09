declare module '*.scss' {
  const content: {[key: string]: string};
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

declare module 'lighthouse' {
  const lighthouse: any;
  export default lighthouse;
}

declare module '*.svg' {
  const content: import('react').StatelessComponent<{className?: string}>;
  export default content;
}
declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.ico' {
  const content: string;
  export default content;
}

declare module 'lottie-web' {
  interface LoadAnimationData {
    container: any;
    renderer: 'svg';
    loop: boolean;
    autoplay: boolean;
    path: string;
  }

  const lottie: {
    loadAnimation: (data: LoadAnimationData) => {};
    stop: () => {};
    pause: () => {};
    play: () => {};
  };

  export default lottie;
}

declare module 'storybook-react-router' {
  const content: () => import('@storybook/react').StoryDecorator;
  export default content;
}

declare module '@storybook/addon-a11y' {
  export const withA11Y: import('@storybook/react').StoryDecorator;
}
