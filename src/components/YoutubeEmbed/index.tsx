import styles from './styles.module.css';

type YoutubeEmbedProps = {
  videoId: string;
};

export default function YoutubeEmbed({videoId}: YoutubeEmbedProps) : JSX.Element {
  return (
    <div className={styles.wrapper}>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        className={styles.iframe}
        width="853"
        height="480"
        frame-border={0}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen />
    </div>
  );
}
