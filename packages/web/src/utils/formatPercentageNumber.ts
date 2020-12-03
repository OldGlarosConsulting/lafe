export default function formatPercentageNumber(
  value?: number,
): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  if (!value) {
    return undefined;
  }

  return value.toLocaleString('pt-br', {
    style: 'percent',
    minimumFractionDigits: 2,
  });
}
