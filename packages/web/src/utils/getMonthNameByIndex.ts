const MONTHS = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
] as const;

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;

type Month = ElementType<typeof MONTHS>;

export default function getMonthNameByIndex(
  monthIndex: number,
): Month | undefined {
  if (monthIndex < 0 || monthIndex > MONTHS.length - 1) {
    return undefined;
  }

  return MONTHS[monthIndex - 1];
}
