import React from 'react';
import {withKnobs, text, boolean, number, select} from '@storybook/addon-knobs';

import {addDecorator, storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import centered from '@storybook/addon-centered';

import Button from '@components/Button';
import Footer from '@components/Footer';
import Nav from '@components/Nav';
import GetStarted from '@components/GetStarted';
import Header from '@components/Header';
import ArrowLink from '@components/ArrowLink';
import IconOverview from '@routes/home/components/IconOverview';
import ThreeDLogos from '@routes/home/components/ThreeDLogos.tsx';
import TextContent from '@components/TextContent';
import TextInput from '@components/TextInput';
import SiteAnimation from '@components/SiteAnimation';
import ContactForm from '@components/ContactForm';
import CloudManagement from '@routes/cloud/components/CloudManagement.tsx';

import '../../src/global/sass/main.scss';

import ConsultingIcon from '@assets/svg/homeIcons/consulting.svg';
import TrainingIcon from '@assets/svg/homeIcons/training.svg';
import CloudManagementIcon from '@assets/svg/homeIcons/cloudManagement.svg';
import AgileIcon from '@assets/svg/homeIcons/agile.svg';

storiesOf('Button', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('with text', () => <Button text={text('Label', 'See What We Do')} />);

storiesOf('TextContent', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <TextContent
      title={text('title', 'textContent title')}
      subtitle={text('subtitle', 'IT Advisory and Consulting')}
      textColor={text('textColor', 'dark')}
      className={text('className', 'textContent')}
      titleSpacing={number('titleSpacing', 20)}>
      {text('children', 'Text content child')}
    </TextContent>
  ));

// NAV
storiesOf('Nav', module)
  .addDecorator(StoryRouter())
  .add('desktop', () => <Nav />);

// GetStarted
storiesOf('GetStarted', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('with text', () => <GetStarted />);

// Header
storiesOf('Header', module)
  .addDecorator(StoryRouter())
  .addDecorator(withKnobs)
  .add('home page', () => <Header background={text('background', 'page3')} />);

// Footer
storiesOf('Footer', module)
  .addDecorator(StoryRouter())
  .add('home page', () => <Footer />);

// ArrowLink
storiesOf('ArrowLink', module)
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .add('with text', () => (
    <ArrowLink
      color={text('color', 'malibu')}
      url={text('url', 'http://www.google.com')}
      text={text('text', 'arrowLink')}
    />
  ));

storiesOf('3D Logos', module).add('Logos', () => (
  <>
    <div style={{height: '100vh'}} />
    <ThreeDLogos />
    <div style={{height: '100vh'}} />
  </>
));

// Icon Overview
storiesOf('Icon Overview', module)
  .addDecorator(StoryRouter())
  .addDecorator(centered)
  .addDecorator(withKnobs)
  .add('Consulting', () => (
    <IconOverview title={text('Title', 'IT Advisory and Consulting')} Icon={ConsultingIcon} link="#">
      {text(
        'Content',
        'We can provide assessment of current people, processes and technology to identify areas the can be improved to meet your organization’s strategic goals'
      )}
    </IconOverview>
  ))
  .add('Cloud Management', () => (
    <IconOverview title="Cloud Management" Icon={CloudManagementIcon} link="#">
      We apply the DevSecOps principles in managing the life cycle of cloud resources including hybrid cloud
      management
    </IconOverview>
  ))
  .add('Agile Development', () => (
    <IconOverview title="Agile Development" Icon={AgileIcon} link="#">
      Our development process follows the agile principles which means that our top focus is customer
      satisfaction through early and continuous delivery
    </IconOverview>
  ))
  .add('Training', () => (
    <IconOverview title="Training" Icon={TrainingIcon} link="#">
      Our development process follows the agile principles which means that our top focus is customer
      satisfaction through early and continuous delivery
    </IconOverview>
  ));

storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('first one', () => (
    <TextInput
      label={text('Label', 'This is the label')}
      placeHolder={text('Placeholder', 'Put your text here')}
      height={number('Height', 100)}
      barColor={text('Bar color', 'barRoyal')}
      labelColor={text('Label Color', 'labelRoyal')}
      multiline={text('multiline', false)}
      error={text('error', 'This is the error')}
    />
  ));

storiesOf('Site Animation', module).add('Logos', () => (
  <>
    <SiteAnimation />
  </>
));

storiesOf('ContactForm', module)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('form', () => <ContactForm />);
storiesOf('Cloud Management', module)
  .addDecorator(withKnobs)
  .addDecorator(StoryRouter())
  .addDecorator(centered)
  .add('Cloud Management', () => (
    <div style={{width: 'calc(100vw - 20px)', overflow: 'hidden', padding: '100px 0'}}>
      <CloudManagement />
    </div>
  ));
