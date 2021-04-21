import format from 'date-fns/format';

import styles from './styles.module.scss';

export default function Header(){
    const currentData = format(new Date(), 'EE, d MMMM');

    return (
        <header className={styles.headerContainer}>
            <img src="/logo.svg" alt="Podcastr"/>
            <p>Always the best for you to hear!</p>
            <span>{currentData}</span>
        </header>
    )
}