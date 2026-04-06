import { TariffsContent } from 'widgets/tariffs';
import { Sidebar } from 'shared/ui/sidebar';
import { NAV_ITEMS } from 'shared/constants/constants';
import logoSrc from 'shared/assets/logo.png';
import styles from './tariffsPage.module.scss';

export function TariffsPage() {
  return (
    <div className={styles.layout}>
      <Sidebar
        logoNode={
          <div className={styles.logoWrapper}>
            <img className={styles.logoImg} src={logoSrc} alt="Job AI" />
          </div>
        }
        items={NAV_ITEMS}
      />
      <TariffsContent />
    </div>
  );
}
