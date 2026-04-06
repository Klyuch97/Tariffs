import { FC, RefObject } from 'react';
import { Slider as AntdSlider } from 'antd';
import { TypeSlider } from 'shared/types/types';
import styles from './slider.module.scss';

const getPeriodSliderClassNames = (variant: TypeSlider) => {
  return {
    root: `${styles.periodSlider}${variant === TypeSlider.MONTHS ? ` ${styles.monthsPeriodSlider}` : ''}`,
    rail: styles.periodSliderRail,
    track: styles.periodSliderTrack,
    handle: styles.periodSliderHandle,
  };
};

const periodSliderTooltipBase = {
  align: { offset: [4, -4] },
  autoAdjustOverflow: false,
  arrow: false,
  styles: {
    container: {
      minHeight: 'auto',
      padding: 0,
      fontSize: 12,
      fontWeight: 700,
      lineHeight: '16px',
      color: 'var(--primary-main-40)',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      fontFamily: 'Inter',
    },
  },
};

interface SliderProps {
  refWrapper: RefObject<HTMLDivElement | null>;
  value: number;
  min: number;
  max: number;
  disabled: boolean;
  onChange: (value: number) => void;
  type: TypeSlider;
}
export const Slider: FC<SliderProps> = ({
  refWrapper,
  value,
  min,
  max,
  disabled,
  onChange,
  type,
}) => {
  return (
    <div
      ref={refWrapper}
      className={`${styles.sliderWrapper}${disabled ? ` ${styles.sliderWrapperDisabled}` : ''}`}
    >
      <AntdSlider
        disabled={disabled}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        classNames={getPeriodSliderClassNames(type)}
        tooltip={{
          ...periodSliderTooltipBase,
          open: disabled ? false : true,
          style: {
            container: styles.tooltipContainer,
          },
          getPopupContainer: () => refWrapper.current ?? document.body,
        }}
      />
    </div>
  );
};
