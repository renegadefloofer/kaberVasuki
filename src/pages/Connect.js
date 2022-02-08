import Card from '../components/ui/Card';
import SubscribeForm from '../components/SubscribeForm';
import { useNavigate } from 'react-router-dom';

import styles from './Connect.module.css';

const Connect = () => {
  const navigate = useNavigate();

  const subscribeHandler = (data) => {
    console.log(data);
    fetch('https://react-test-cfee1-default-rtdb.firebaseio.com/emails.json', {
      method: 'POST',
      body: JSON.stringify({
        email: data,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(() => {
      navigate('/', { replace: true });
    });
  };
  return (
    <>
      <Card>
        <div className={styles.badge}>E-mail</div>
        <div className={styles.badge}>Facebook</div>
        <div className={styles.badge}>Instagram</div>
        <div className={styles.badge}>Twitter</div>
        <div className={styles.badge}></div>
      </Card>
      <SubscribeForm onSubscribe={subscribeHandler}></SubscribeForm>
    </>
  );
};

export default Connect;
