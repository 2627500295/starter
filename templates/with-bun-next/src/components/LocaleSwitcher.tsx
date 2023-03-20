import { useLocale, useTranslations } from "next-intl";

import Link from "next/link";

function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  const otherLocale = locale === "en-US" ? "zh-CN" : "en-US";

  return (
    <Link href={"/" + otherLocale} prefetch={false}>
      {t("switchLocale", { locale: otherLocale })}
    </Link>
  );
}

export default LocaleSwitcher;
