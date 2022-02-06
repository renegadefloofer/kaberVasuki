import styles from './Article.module.css';

const Article = (props) => {
  return (
    <div className={styles.newsclip}>
      <h2 className={styles.headline}>{props.title}</h2>
      <div className={styles.source}>
        <h3>{props.source}</h3>
        <h3>{props.published}</h3>
      </div>
      <p>{props.content}</p>
    </div>
  );
};

export default Article;
