export const TodaysDate = () => {
  const todaysData = new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long',
  }).format(new Date());
  return (
    <time className="display-medium-16 text-text-default">{todaysData}</time>
  );
};
