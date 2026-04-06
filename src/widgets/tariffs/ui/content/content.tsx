import { useEffect, useState } from 'react';
import { TariffFeatureCard } from 'entities/tariff-feature';
import { TARIFF_FEATURES } from 'shared/constants/constants';
import { SettingsTariff } from '../settingsTariff/settingsTariff';
import styles from './content.module.scss';

export const TariffsContent = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 0);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={styles.content}>
      <h1 className={styles.title}>Тарифы</h1>
      <div className={styles.infoTariff}>
        <p className={styles.infoTariffText}>
          Доступ для кандидатов - <span className={styles.infoTariffTextSpan}>БЕСПЛАТНЫЙ</span>
        </p>
      </div>
      <div className={styles.infoTariff}>
        <p className={styles.infoTariffText}>
          Доступ для работодателей - <span className={styles.infoTariffTextSpan}>ПЛАТНЫЙ</span>
        </p>
        <div className={`${styles.features} ${hasScrolled ? styles.featuresCollapsed : ''}`}>
          {TARIFF_FEATURES.map((feature) => (
            <TariffFeatureCard
              key={feature.id}
              icon={feature.icon}
              label={feature.label}
              active={feature.active}
              disabled={feature.disabled}
            />
          ))}
        </div>
      </div>
      <SettingsTariff />
    </section>
  );
};
