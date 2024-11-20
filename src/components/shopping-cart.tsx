import { ShoppingCartIcon } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Cart() {
  const t = useTranslations();

  return (
    <div className="flex justify-end md:justify-center">
      <div className="flex items-center text-gray-600">
        <ShoppingCartIcon className="mr-2 h-5 w-5" />
        <span>{t("shopping-cart")}: </span>
        <span className="ml-1 text-blue-600">0 {t("product")}</span>
      </div>
    </div>
  );
}
