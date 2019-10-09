import Logo from '@assets/svg/t1cgLogo.svg';
import Button from '@components/Button';
import TextInput from '@components/TextInput';
import combineClasses from '@util/combineClasses';
import * as React from 'react';
import styles from './index.scss';

interface IProps {
  className?: string;
  onClose?: (event?: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

interface IState {
  firstName: string;
  lastName: string;
  email: string;
  submissionError: boolean;
  company: string;
  message: string;
  error: string;
  success: boolean;
}

class Contact extends React.Component<IProps, IState> {
  public state = {
    company: '',
    email: '',
    error: '',
    firstName: '',
    lastName: '',
    message: '',
    submissionError: false,
    success: false,
  };

  public handleInputChange = <T extends keyof IState>(e: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const newState: {[P in T]: IState[P]} = {
      [e.target.id]: e.target.value,
    };
    this.setState(newState);
  };

  handleMessageChange = (event: React.ChangeEvent<HTMLDivElement>) => {
    this.setState({message: ''});
  };

  submitForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (this.state.message.length === 0) {
      this.setState({
        error: 'Message required',
      });
      return;
    } else {
      this.setState({
        error: '',
      });
    }

    const message =
      `Name: ${this.state.firstName} ${this.state.lastName}\n\n` +
      `Company: ${this.state.company}\n\n` +
      `Email: ${this.state.email}\n\n` +
      `Message: ${this.state.message}`;

    const requestBody = {source: 't1cgIo', message, subject: this.state.company};
    const headers = {'Content-Type': 'application/json'};
    this.setState({submissionError: false});
    try {
      await fetch('https://v2tg8an6sb.execute-api.us-east-1.amazonaws.com/prod/api/contact', {
        body: JSON.stringify(requestBody),
        headers,
        method: 'POST',
      })

      this.setState({
        success: true,
      });
      setTimeout(() => {
        this.setState({
          success: false,
        });
        this.props.onClose();
      }, 3500);
    } catch (error) {
      this.setState({
        submissionError: true,
      });
    }
  };

  render() {
    return (
      <div
        className={combineClasses(styles.contactForm, this.props.className)}
        onClick={e => {
          e.stopPropagation();
        }}>
        {this.props.onClose && (
          <span className={styles.close} onClick={this.props.onClose}>
            &times;
          </span>
        )}
        <div className={styles.blueBar}>
          <div className={styles.barText}>
            <h1>Let's Chat</h1>
            <p>We'd love to hear about your next project</p>
          </div>
          <div className={styles.logoDiv}>
            <Logo className={styles.logo} />
            <span className={styles.name}>TIER 1 CONSULTING GROUP</span>
          </div>
        </div>
        <form onSubmit={this.submitForm} className={styles.form}>
          <h1>Tell us about yourself</h1>
          <TextInput
            className={styles.textinput}
            barColor="barRoyal"
            labelColor="labelCoalMine"
            label="First Name"
            multiline={false}
            id="firstName"
            handleInputChange={this.handleInputChange}
          />
          <TextInput
            className={styles.textinput}
            barColor="barRoyal"
            labelColor="labelCoalMine"
            label="Last Name"
            multiline={false}
            id="lastName"
            handleInputChange={this.handleInputChange}
          />
          <TextInput
            className={styles.textinput}
            barColor="barRoyal"
            labelColor="labelCoalMine"
            label="Email"
            multiline={false}
            id="email"
            handleInputChange={this.handleInputChange}
            inputType="email"
          />
          <TextInput
            className={styles.textinput}
            barColor="barRoyal"
            labelColor="labelCoalMine"
            label="Company"
            multiline={false}
            id="company"
            handleInputChange={this.handleInputChange}
          />
          <h1 style={{marginTop: '25px'}}>How can we help?</h1>
          <TextInput
            className={styles.textinput}
            barColor="barRoyal"
            labelColor="labelCoalMine"
            placeHolder="Give us a few details about your project"
            height={80}
            multiline={true}
            id="message"
            handleMessageChange={this.handleMessageChange}
            error={this.state.error}
          />
          <Button text="Send" color="secondary" />
          {this.state.success && <p className={styles.success}>Message Successfully Sent!</p>}
          {this.state.submissionError && <p className={styles.error}>Message Error</p>}
        </form>
      </div>
    );
  }
}

export default Contact;
