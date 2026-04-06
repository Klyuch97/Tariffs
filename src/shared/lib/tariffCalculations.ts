import { COST_FOR_DAY, NDS_PERCENT } from 'shared/constants/constants';

export const getDiscountPercent = (totalDays: number): number => {
  if (totalDays <= 30) return 0;
  if (totalDays <= 90) return 5;
  if (totalDays <= 180) return 10;
  return 20;
};

export const getRecruitersPercent = (recruiters: string): number => {
  if (recruiters === '2') return 0;
  if (recruiters === '9') return 5;
  if (recruiters === '19') return 10;
  return 15;
};

export const calcDiscountText = (discountPercent: number): string =>
  discountPercent === 0 ? 'Без скидок' : `Скидка ${discountPercent}%`;

export const calcRecruitersDiscountText = (recruitersPercent: number): string =>
  recruitersPercent === 0 ? '0%' : `+${recruitersPercent}%`;

export const calcCostPerDayWithDiscount = (discountPercent: number): number =>
  COST_FOR_DAY * (1 - discountPercent / 100);

export const calcNdsAmount = (cost: number): number =>
  (cost * (NDS_PERCENT / 100)) / (1 + NDS_PERCENT / 100);

export const calcTotalCost = (
  totalDays: number,
  discountPercent: number,
  recruitersPercent: number,
): number =>
  totalDays * calcCostPerDayWithDiscount(discountPercent) * (1 + recruitersPercent / 100);
