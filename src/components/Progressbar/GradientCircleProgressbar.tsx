interface GradientCircleProgressbarProps {
  percentage: number;
  text?: string;
  width?: number;
  strokeWidth?: number;
  primaryColor?: string[];
  secondaryColor?: string;
  fill?: string;
  hidePercentageText?: boolean;
  strokeLinecap?: 'round' | 'square' | 'butt';
}

function GradientCircleProgressbar({
  percentage,
  text = '',
  width = 200,
  strokeWidth = 5,
  strokeLinecap = 'round',
  primaryColor = ['#11FFBD', '#11FFBD'],
  secondaryColor = '#f0f0f0',
  fill = 'transparent',
  hidePercentageText = false,
}: GradientCircleProgressbarProps) {
  const R = width / 2 - strokeWidth * 2;
  const circumference = 2 * Math.PI * R;
  const offset = circumference - (percentage / 100) * circumference;
  const gradientId = `${primaryColor[0]}${primaryColor[1]}`.replace(/#/g, '');

  return (
    <div className="progressbar-circle" style={{ width }}>
      {!hidePercentageText ? (
        <div className="progressbar-circle-percentage">
          <span>{text || percentage}</span>
        </div>
      ) : null}

      <svg width="100%" height="100%">
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor[0]} />
          <stop offset="100%" stopColor={primaryColor[1]} />
        </linearGradient>
        <circle
          strokeWidth={strokeWidth}
          fill="transparent"
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={secondaryColor}
          strokeDasharray={`${circumference} ${circumference}`}
        />
        <circle
          className="circle"
          strokeWidth={strokeWidth}
          fill={fill}
          r={R}
          cx={width / 2}
          cy={width / 2}
          stroke={`url(#${gradientId})`}
          strokeLinecap={strokeLinecap}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
}

export default GradientCircleProgressbar;
