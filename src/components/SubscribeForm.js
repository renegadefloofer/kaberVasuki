import { useRef } from 'react';
import styles from './SubscribeForm.module.css';
import Card from './ui/Card';
const SubscribeForm = (props) => {
  const emailInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    props.onSubscribe(enteredEmail);
  };
  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="email">E-mail Address</label>
          <input type="text" required id="email" ref={emailInputRef} />
        </div>
        <div className={styles.action}>
          <button>Subscribe</button>
        </div>
      </form>
    </Card>
  );
};

export default SubscribeForm;
