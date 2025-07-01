/** @jsxImportSource @emotion/react */
import * as styles from './navBar.style';
import { NAV_ITEMS } from '../../../constants/navItems';

export default function NavBar() {
    return (
        <nav css={styles.navContainer}>
            {NAV_ITEMS.map((item) => (
                <div key={item.id} css={styles.navItem}>
                    <img
                        src={item.icon}
                        alt={item.name}
                        css={[
                            styles.iconStyle,
                            item.id === 'commu' || item.id === 'ques' ? styles.largeIcon : null,
                        ]}
                    />
                    <span css={styles.labelStyle}>{item.name}</span>
                </div>
            ))}
        </nav>
    );
}
