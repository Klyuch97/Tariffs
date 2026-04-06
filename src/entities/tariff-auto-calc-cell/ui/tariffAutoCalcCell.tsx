import { ReactNode } from 'react';
import { Tooltip } from 'shared/ui/tooltip';
import { Icon } from 'shared/ui/icon';
import styles from './tariffAutoCalcCell.module.scss';

interface TariffAutoCalcCellProps {
  value: string;
  tooltipTitle: string | ReactNode;
  maxWidthTooltip?: number;
}

export function TariffAutoCalcCell({
  value,
  tooltipTitle,
  maxWidthTooltip,
}: TariffAutoCalcCellProps) {
  return (
    <div className={styles.wrapper} data-tariff-auto-calc="">
      <div className={styles.value}>{value}</div>
      <p className={styles.text}>автоматический расчёт</p>
      <Tooltip title={tooltipTitle} maxWidth={maxWidthTooltip}>
        <Icon
          className={styles.questionMarkIcon}
          name="questionMarkCircle"
          size={20}
          color="var(--color-gray-50)"
        />
      </Tooltip>
    </div>
  );
}
