import { LoginForm } from "@/app/login/login-form";
import Cart from "@/components/shopping-cart";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Page() {
  const t = useTranslations();

  return (
    <main>
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <Image
          src="/banner-about-us.jpg?height=400&width=1600"
          alt="Aimei Global Business banner image"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <header className="flex justify-between items-center py-4 border-b px-6">
        <h1 className="text-xl text-primary">{t("login")}</h1>
        <Cart />
      </header>

      <LoginForm />
    </main>
  );
}
