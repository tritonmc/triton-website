import styles from './styles.module.css';

type DiscordEmbedProps = {
  widgetId: string;
};

export default function DiscordEmbed({ widgetId }: DiscordEmbedProps): JSX.Element {
  return (
    <div className={styles.wrapper}>
      <iframe
        src={`https://discordapp.com/widget?id=${widgetId}&theme=dark`}
        allowTransparency
        frame-border={0}
        title="Discord"
        className={styles.iframe}
      ></iframe>
    </div>
  );
}
