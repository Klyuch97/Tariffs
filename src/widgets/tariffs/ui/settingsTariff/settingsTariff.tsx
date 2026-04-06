import { useMemo, useState } from 'react';
import { AccessPeriodTariffs } from 'features/accessPeriodTariffs';
import { BasicAccessCost } from 'features/basicAccessCost';
import { TotalCostOfAccess } from 'features/totalCostOfAccess';
import {
  getDiscountPercent,
  getRecruitersPercent,
  calcCostPerDayWithDiscount,
  calcTotalCost,
} from 'shared/lib/tariffCalculations';
import styles from './settingsTariff.module.scss';

export const SettingsTariff = () => {
  const [days, setDays] = useState(9);
  const [months, setMonths] = useState(6);
  const [additionalRecruiters, setAdditionalRecruiters] = useState('2');

  const totalDays = useMemo(() => days + months * 30, [days, months]);
  const discountPercent = useMemo(() => getDiscountPercent(totalDays), [totalDays]);
  const recruitersPercent = useMemo(
    () => getRecruitersPercent(additionalRecruiters),
    [additionalRecruiters],
  );
  const costForDayWithDiscount = useMemo(
    () => calcCostPerDayWithDiscount(discountPercent),
    [discountPercent],
  );
  const totalCostOfAccess = useMemo(
    () => calcTotalCost(totalDays, discountPercent, recruitersPercent),
    [totalDays, discountPercent, recruitersPercent],
  );

  const handleChangeMonths = (value: number) => {
    if (value >= 12) {
      setDays(0);
    }
    setMonths(value);
  };
  return (
    <div className={styles.settingsTariff}>
      <AccessPeriodTariffs
        days={days}
        months={months}
        setDays={setDays}
        handleChangeMonths={handleChangeMonths}
        totalDays={totalDays}
      />
      <BasicAccessCost
        additionalRecruiters={additionalRecruiters}
        setAdditionalRecruiters={setAdditionalRecruiters}
        totalDays={totalDays}
        costForDayWithDiscount={costForDayWithDiscount}
        discountPercent={discountPercent}
      />
      <TotalCostOfAccess totalCostOfAccess={totalCostOfAccess} totalDays={totalDays} />
      <button className={styles.connectButton}>Подключить</button>
    </div>
  );
};
