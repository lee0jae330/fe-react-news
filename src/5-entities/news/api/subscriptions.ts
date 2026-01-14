export const getSubscriptions = async () => {
  const response = await fetch('/api/presses/subscriptions');
  if (!response.ok) {
    throw new Error('Failed to fetch subscription count');
  }
  const data = await response.json();

  return data;
};
