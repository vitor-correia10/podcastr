import { SSL_OP_CRYPTOPRO_TLSEXT_BUG } from 'node:constants';
import styles from './styles.module.scss';

export default function Player(){

    return (
        <div className={styles.playerContainer}>
            <header>
                <img src="./playing.svg" alt="Playing Now"/>
                <strong>Playing now</strong>
            </header>

            <div className={styles.emptyPlayer}>
                <strong>Select a podcast</strong>
            </div>

            <footer className={styles.empty}>
                <div className={styles.progress}>
                    <span>00:00</span>
                    <div className={styles.slider}>
                        <div className={styles.emptySlider}></div>
                    </div>
                    <span>00:00</span>
                </div>
                <div className={styles.buttons}>
                    <button type="button">
                        <img src="./shuffle.svg" alt="Shuffle"/>
                    </button>
                    <button type="button">
                        <img src="./play-previous.svg" alt="Previous button"/>
                    </button>
                    <button type="button" className={styles.playButton}>
                        <img src="./play.svg" alt="Play button"/>
                    </button>
                    <button type="button">
                        <img src="./play-next.svg" alt="Next button"/>
                    </button>
                    <button type="button">
                        <img src="./repeat.svg" alt="Repeat button"/>
                    </button>
                </div>
            </footer>
        </div>
    )
}