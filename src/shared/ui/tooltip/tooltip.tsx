import { FC, ReactNode } from 'react';
import { Tooltip as AntdTooltip } from 'antd';
import styles from './tooltip.module.scss';

interface TooltipProps {
  title: ReactNode;
  children: ReactNode;
  maxWidth?: number;
}

export const Tooltip: FC<TooltipProps> = ({ title, children, maxWidth }) => (
  <AntdTooltip
    arrow={false}
    classNames={{ container: styles.tooltipContainer }}
    color="#E6E8EC"
    styles={{
      root: maxWidth !== undefined ? { maxWidth } : undefined,
      container: maxWidth !== undefined ? { maxWidth } : undefined,
    }}
    title={title}
  >
    {children}
  </AntdTooltip>
);
