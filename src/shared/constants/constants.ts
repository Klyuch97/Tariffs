import { SidebarNavItem, TariffFeature } from 'shared/types/types';

export const NAV_ITEMS: SidebarNavItem[] = [
  { label: 'Тарифы', href: '/Tariffs', icon: 'database', active: true },
  { label: 'Связаться с нами', href: '/Tariffs', icon: 'phone' },
  { label: 'Документы', href: '/Tariffs', icon: 'folder' },
];

export const TARIFF_FEATURES: TariffFeature[] = [
  {
    id: 'users',
    icon: 'users',
    label: 'Доступ к базе кандидатов',
    active: true,
  },
  { id: 'vacancies', icon: 'remove', label: 'Публикация вакансий', disabled: true },
];

export const COST_FOR_DAY = 1666.0;
export const NDS_PERCENT = 22;

export const ADDITIONAL_RECRUITERS = [
  { value: '2', label: '+ 2' },
  { value: '9', label: '+ 9' },
  { value: '19', label: '+ 19' },
  { value: '29', label: '+ 29' },
];

export const INCLUDED_BENEFITS = [
  {
    title: 'доступ к базе по всей Российской Федерации',
    description: 'больше не нужно отдельно оплачивать доступ для каждого региона РФ',
    tooltipTitle:
      'Поиск кандидатов производится по всей базе данных кандидатов в РФ, за исключением применения фильтров по городам/регионам.Соответственно, доплачивать за доступы в регионы РФ не нужно.',
  },
  {
    title: 'нет ограничений по количеству контактов',
    description: 'все контакты кандидатов бесплатные и без ограничений по количеству',
    tooltipTitle:
      'В поисковой выдаче контакты кандидатов предоставляются бесплатно. Также нет ограничений по количеству данных контактов.',
  },
];
