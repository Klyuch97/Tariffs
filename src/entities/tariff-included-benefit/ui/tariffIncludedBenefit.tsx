import { Icon } from 'shared/ui/icon';
import { Tooltip } from 'shared/ui/tooltip';
import styles from './tariffIncludedBenefit.module.scss';

interface TariffIncludedBenefitProps {
  title: string;
  description: string;
  tooltipTitle: string;
}

export function TariffIncludedBenefit({
  title,
  description,
  tooltipTitle,
}: TariffIncludedBenefitProps) {
  return (
    <div className={styles.wrapper}>
      <Icon name="checkCircle" size={30} />
      <div className={styles.textWrapper}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <Tooltip title={tooltipTitle} maxWidth={260}>
        <Icon
          color="var(--color-gray-50)"
          className={styles.questionMarkIcon}
          name="questionMarkCircle"
          size={20}
        />
      </Tooltip>
    </div>
  );
}
