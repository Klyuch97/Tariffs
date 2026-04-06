export const formatPrice = (value: number | string, decimals = 2): string => {
  const num = typeof value === 'string' ? parseFloat(value) : value;

  if (Number.isNaN(num) || num === 0) return '0';

  const [integer, fraction] = num.toFixed(decimals).split('.');
  const formatted = integer.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

  return fraction ? `${formatted},${fraction}` : formatted;
};
