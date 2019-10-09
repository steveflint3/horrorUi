declare module 'storybook-react-router' {
  const content: () => import('@storybook/react').StoryDecorator;
  export default content;
}

declare module '@storybook/addon-a11y' {
  export const withA11Y: import('@storybook/react').StoryDecorator;
}
