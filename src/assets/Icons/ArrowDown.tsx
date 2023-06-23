import { FC } from 'react'

type DownUpArrowPropTypes = {
  width?: number | string;
  height?: number | string;
  rotate?: boolean;
  variant?: string;
};

export const DownUpArrow: FC<DownUpArrowPropTypes> = ({
  rotate,
  width,
  height,
}) => (
  <span className='w-fit'>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 10}
      height={height || 15}
      viewBox="0 0 10.828 6.414"
    >
      <path
        id="chevron-down"
        d="M0,0,4,4,8,0"
        transform={
          rotate
            ? 'translate(9.14 5.414) rotate(180)'
            : 'translate(1.14 1.414) rotate(0)'
        }
        fill="none"
        stroke="#2675fe"
        style={{
          fill: 'none',
          stroke:'#fff',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          strokeWidth: '2px',
          transition: '0.2s'
        }}
      />
    </svg>
  </span>
)

export default DownUpArrow
