import { FC, Fragment, useMemo } from 'react';
import { Select } from 'antd';
import { TariffAutoCalcCell } from 'entities/tariff-auto-calc-cell';
import { TariffIncludedBenefit } from 'entities/tariff-included-benefit';
import { ADDITIONAL_RECRUITERS, INCLUDED_BENEFITS, NDS_PERCENT } from 'shared/constants/constants';
import { formatPrice } from 'shared/lib/formatPrice';
import {
  calcDiscountText,
  calcRecruitersDiscountText,
  calcNdsAmount,
  getRecruitersPercent,
} from 'shared/lib/tariffCalculations';
import { Icon } from 'shared/ui/icon';
import styles from './basicAccessCost.module.scss';

interface BasicAccessCostProps {
  totalDays: number;
  costForDayWithDiscount: number;
  discountPercent: number;
  additionalRecruiters: string;
  setAdditionalRecruiters: (value: string) => void;
}

export const BasicAccessCost: FC<BasicAccessCostProps> = ({
  totalDays,
  costForDayWithDiscount,
  discountPercent,
  additionalRecruiters,
  setAdditionalRecruiters,
}) => {
  const recruitersPercent = useMemo(
    () => getRecruitersPercent(additionalRecruiters),
    [additionalRecruiters],
  );
  const recruitersDiscountText = useMemo(
    () => calcRecruitersDiscountText(recruitersPercent),
    [recruitersPercent],
  );
  const discountText = useMemo(() => calcDiscountText(discountPercent), [discountPercent]);

  const totalCost = useMemo(
    () => totalDays * costForDayWithDiscount,
    [totalDays, costForDayWithDiscount],
  );
  const ndsAmount = useMemo(() => calcNdsAmount(totalCost), [totalCost]);

  const renderTooltipTitle = () => {
    return (
      <Fragment>
        <p>Приобретая доступ на максимальный период, вы получаете максимальные скидки:</p>
        <ul className={styles.tooltipList}>
          <li>до 1 месяца - без скидок</li>
          <li>от 1 до 3 месяцев - скидка 5%</li>
          <li>от 3 до 6 месяцев - скидка 10%</li>
          <li>от 6 месяцев до 1 года - скидка 20%</li>
        </ul>
      </Fragment>
    );
  };
  return (
    <div className={styles.basicAccessCostWrapper}>
      <p className={styles.basicAccessCostTitle}>Базовая стоимость доступа</p>
      <div className={styles.priceWrapper}>
        <TariffAutoCalcCell
          value={discountText}
          tooltipTitle={renderTooltipTitle()}
          maxWidthTooltip={270}
        />
        <div className={styles.priceBlock}>
          <div className={`${styles.priceItem} ${styles.priceItemTextRegular}`}>
            {formatPrice(totalCost)}
            <Icon className={styles.rubleIcon} name="ruble" size={20} />
          </div>
          <p className={styles.priceItemText}>Базовая стоимость за период</p>
        </div>
        <div className={styles.priceBlock}>
          <div className={`${styles.priceItem} ${styles.priceItemTextRegular}`}>
            {formatPrice(ndsAmount)}
            <Icon className={styles.rubleIcon} name="ruble" size={20} />
          </div>
          <p className={styles.priceItemText}>в том числе НДС {NDS_PERCENT}%</p>
        </div>
      </div>
      <p className={styles.basicAccessCostTitle}>включено в стоимость</p>
      <div className={styles.includedBenefitsWrapper}>
        {INCLUDED_BENEFITS.map(({ title, description, tooltipTitle }) => (
          <TariffIncludedBenefit
            key={title}
            title={title}
            description={description}
            tooltipTitle={tooltipTitle}
          />
        ))}
      </div>
      <p className={styles.basicAccessCostTitle}>добавить в стоимость</p>
      <div className={styles.addInCostWrapper}>
        <Select
          classNames={{
            root: styles.tariffSelectRoot,
            content: styles.tariffSelectContent,
            suffix: styles.tariffSelectSuffix,
            popup: {
              root: styles.tariffSelectDropdown,
              listItem: styles.tariffSelectOption,
            },
          }}
          value={additionalRecruiters}
          onChange={setAdditionalRecruiters}
          options={ADDITIONAL_RECRUITERS}
        />
        <div className={styles.addInCostTextWrapper}>
          <p className={styles.addInCostTextTitle}>дополнительных рекрутеров под одной компанией</p>
          <p className={styles.addInCostTextDescription}>
            по умолчанию бесплатно включены 2 рекрутера
          </p>
        </div>
        <TariffAutoCalcCell
          maxWidthTooltip={260}
          value={recruitersDiscountText}
          tooltipTitle="По умолчанию и бесплатно можно пригласить в компанию 2х сотрудников («рекрутеров»).
Если нужно предоставить доступ более чем 2м сотрудникам, то добавьте их на этапе приобритения доступа или после (через Личный кабинет).
При этом сами приглашаемые сотрудники («рекрутеры») за доступ не платят, но могут работать только через вашу компанию.
"
        />
      </div>
    </div>
  );
};
