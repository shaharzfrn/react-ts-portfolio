type UnitsProps = {
  [key: string]: number;
};

const UNITS: UnitsProps = {
  second: 1000,
  minute: 60 * 1000,
  hour: 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  month: (24 * 60 * 60 * 1000 * 365) / 12,
  year: 24 * 60 * 60 * 1000 * 365,
};

const RelativeTime = new Intl.RelativeTimeFormat('en', {
  style: 'long',
  numeric: 'auto',
});

function formatDate(date: string) {
  const diff = Date.now() - new Date(date).getTime();

  const units = Object.keys(UNITS).reduce((time, unit) => {
    return diff > UNITS[unit] || unit === 'second' ? unit : time;
  }, 'year');
  return RelativeTime.format(
    -Math.round(diff / UNITS[units]),
    units as Intl.RelativeTimeFormatUnit
  );
}

function formatDateString(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
  });
}

export { formatDate, formatDateString };
