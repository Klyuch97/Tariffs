import { Icon, IconName } from 'shared/ui/icon';
import commingSoonSrc from 'shared/assets/comingSoon.png';
import styles from './tariffFeatureCard.module.scss';

interface TariffFeatureCardProps {
  icon: IconName;
  label: string;
  active?: boolean;
  disabled?: boolean;
}

export function TariffFeatureCard({ icon, label, active, disabled }: TariffFeatureCardProps) {
  return (
    <article
      className={styles.card}
      data-active={active || undefined}
      data-disabled={disabled || undefined}
      role="button"
    >
      <div className={styles.icons}>
        <div className={styles.iconWrapper}>
          <Icon name={icon} size={20} />
        </div>
        <Icon
          name="ai"
          size={22}
          color={active ? 'var(--primary-main-40)' : 'var(--color-gray-30)'}
        />
      </div>
      <p className={styles.label}>{label}</p>
      {disabled && <img width={42} height={35} className={styles.comingSoonImg} src={commingSoonSrc} alt="coming soon" />}
    </article>
  );
}
