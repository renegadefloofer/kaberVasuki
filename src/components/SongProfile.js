import styles from './SongProfile.module.css';
import Card from './ui/Card';

const SongProfile = (props) => {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img href={props.link} src={props.imgUrl} alt={props.title} />
        </div>
        <div className={styles.content}>
          <a href={props.link} target="_blank" rel="noreferrer">
            {props.title}
          </a>
        </div>
      </Card>
    </li>
  );
};

export default SongProfile;
