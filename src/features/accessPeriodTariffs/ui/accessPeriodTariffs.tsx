import { FC, Fragment, useRef } from 'react';
import { Slider } from 'shared/ui/slider';
import { TypeSlider } from 'shared/types/types';
import styles from './accessPeriodTariffs.module.scss';

interface AccessPeriodTariffsProps {
  days: number;
  months: number;
  setDays: (days: number) => void;
  handleChangeMonths: (months: number) => void;
  totalDays: number;
}
export const AccessPeriodTariffs: FC<AccessPeriodTariffsProps> = ({
  days,
  months,
  setDays,
  handleChangeMonths,
  totalDays,
}) => {
  const daysSliderRef = useRef<HTMLDivElement>(null);
  const monthsSliderRef = useRef<HTMLDivElement>(null);

  return (
    <Fragment>
      <p className={styles.accessPeriodTitle}>Период доступа</p>
      <div className={styles.content}>
        <div className={styles.sliders}>
          <div className={styles.sliderBlock}>
            <p className={styles.sliderLabel}>
              Выберите количество <span>дней</span> доступа
            </p>
            <Slider
              type={TypeSlider.DAYS}
              disabled={months >= 12}
              min={0}
              max={30}
              value={days}
              onChange={setDays}
              refWrapper={daysSliderRef}
            />
            <div className={styles.sliderRange}>
              <span>0</span>
              <span>30</span>
            </div>
          </div>
          <div className={styles.sliderBlock}>
            <p className={styles.sliderLabel}>
              Выберите количество <span>месяцев</span> доступа
            </p>

            <Slider
              type={TypeSlider.MONTHS}
              min={0}
              max={12}
              value={months}
              onChange={handleChangeMonths}
              refWrapper={monthsSliderRef}
              disabled={false}
            />

            <div className={styles.sliderRange}>
              <span>0</span>
              <span>12</span>
            </div>
          </div>
        </div>
        <div className={styles.resultBlock}>
          <p className={styles.resultLabel}>
            Доступ на <span>период</span>
          </p>
          <div className={styles.resultValue}>
            <span>{totalDays}</span>
          </div>
          <p className={styles.resultLabel}>календарных дней</p>
        </div>
      </div>
    </Fragment>
  );
};
