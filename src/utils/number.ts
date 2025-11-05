interface FormatMoneyProps {
  amount: number | null | undefined;
  defaultAmount?: number;
  locale?: string;
}

// 格式化金额
export function formatMoney(
  options: FormatMoneyProps & Intl.NumberFormatOptions
): string {
  const { amount, defaultAmount, locale = "en-US", ...option } = options;
  const moneyFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...option
  });
  const def = defaultAmount ?? 0;
  return moneyFormatter.format(amount ?? def);
}
