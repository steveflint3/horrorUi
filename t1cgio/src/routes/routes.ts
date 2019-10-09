import * as React from 'react';

interface IRoute {
  component: React.ComponentClass | React.StatelessComponent<any>;
  path?: string;
  exact: boolean;
  title?: string;
}

const Services = React.lazy(() => import(/* webpackChunkName: "services" */ '@routes/services/components'));
const Home = React.lazy(() => import(/* webpackChunkName: "home" */ '@routes/home/components'));
const Technology = React.lazy(() =>
  import(/* webpackChunkName: "technology" */ '@routes/technology/components')
);
const Contact = React.lazy(() => import(/* webpackChunkName: "contact" */ '@routes/contact/components'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "home" */ '@routes/404/components'));
const About = React.lazy(() => import(/* webpackChunkName: "about" */ '@routes/about/components'));

const routes: IRoute[] = [
  {
    component: Home,
    exact: true,
    path: '/',
  },
  {
    component: Services,
    exact: true,
    path: '/services',
  },
  {
    component: Technology,
    exact: true,
    path: '/technology',
  },
  {
    component: Contact,
    exact: true,
    path: '/contact',
  },
  {
    component: About,
    exact: true,
    path: '/about',
  },
  {
    component: NotFound,
    exact: false,
  },
];

export default routes;
