export const dummyProgressData = [
  { id: 1, value: 37800, percentage: 20 },
  { id: 2, value: 56700, percentage: 30 },
  { id: 3, value: 76100, percentage: 40 },
  { id: 4, value: 14620, percentage: 10 },
  { id: 5, value: 3780, percentage: 5 },
];

export const totalValue = dummyProgressData.reduce(
  (total, item) => total + item.value,
  0
);
