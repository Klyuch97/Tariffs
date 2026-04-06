import { FC, Fragment, useMemo } from 'react';
import { NDS_PERCENT } from 'shared/constants/constants';
import { formatPrice } from 'shared/lib/formatPrice';
import { calcNdsAmount } from 'shared/lib/tariffCalculations';
import { Icon } from 'shared/ui/icon';
import styles from './totalCostOfAccess.module.scss';

interface TotalCostOfAccessProps {
  totalCostOfAccess: number;
  totalDays: number;
}
export const TotalCostOfAccess: FC<TotalCostOfAccessProps> = ({ totalCostOfAccess, totalDays }) => {
  const costForDay = useMemo(
    () => (totalDays > 0 ? totalCostOfAccess / totalDays : 0),
    [totalCostOfAccess, totalDays],
  );
  const ndsAmount = useMemo(() => calcNdsAmount(totalCostOfAccess), [totalCostOfAccess]);
  return (
    <Fragment>
      <p className={styles.totalCostOfAccessTitle}>Общая стоимость доступа</p>
      <div className={styles.totalCostOfAccessWrapper}>
        <div className={styles.priceBlock}>
          <div className={`${styles.priceItem} ${styles.priceItemTextRegular}`}>
            {formatPrice(costForDay)}
            <Icon className={styles.rubleIcon} name="ruble" size={20} />
          </div>
          <p className={styles.priceItemText}>
            Стоимость календарного
            <br /> дня с НДС {NDS_PERCENT}%
          </p>
        </div>
        <div className={styles.priceBlock}>
          <div className={`${styles.priceItem} ${styles.withBorder}`}>
            {formatPrice(totalCostOfAccess)}
            <Icon className={styles.rubleIcon} name="ruble" size={20} />
          </div>
          <p className={styles.priceItemText}>Общая стоимость за период</p>
        </div>
        <div className={styles.priceBlock}>
          <div className={`${styles.priceItem} ${styles.priceItemTextRegular}`}>
            {formatPrice(ndsAmount)}
            <Icon className={styles.rubleIcon} name="ruble" size={20} />
          </div>
          <p className={styles.priceItemText}>в том числе НДС {NDS_PERCENT}%</p>
        </div>
      </div>
    </Fragment>
  );
};
