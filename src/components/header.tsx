"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LocaleSwitcher from "./locale-switcher";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/lib/locale";

const listVariant = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const languages = [
  // { code: "zh-TW", label: "繁體" },
  // { code: "zh-CN", label: "简体" },
  // { code: "ja", label: "日本語" },
  // { code: "ko", label: "한국어" },
  // { code: "id", label: "Indonesia" },
  // { code: "th", label: "แบบไทย" },
  { code: "vi", label: "Việt" },
  { code: "en", label: "English" },
];

export default function Header() {
  const t = useTranslations("");

  const [showBlur, setShowBlur] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleOnClick = () => {
    setShowBlur(false);
    setHidden(true);

    setTimeout(() => {
      setHidden(false);
    }, 100);
  };

  const handleToggleMenu = () => {
    setOpen((prev) => {
      document.body.style.overflow = prev ? "" : "hidden";
      return !prev;
    });
  };

  const links = [
    {
      id: 1,
      name: t("about-us"),
      href: "/about",
    },
    {
      id: 2,
      name: t("product"),
      children: [
        {
          name: t("all-products"),
          href: "/products",
        },
        {
          name: "Checkout",
          href: "#",
          items: [
            {
              name: t("cart"),
              href: "/cart",
            },
            {
              name: t("checkout"),
              href: "/checkout",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: t("latest-news"),
      children: [
        {
          name: t("latest-news"),
          href: "/news",
        },
        {
          name: t("calendar"),
          href: "/calendar",
        },
      ],
    },
    {
      id: 4,
      name: t("members-area"),
      children: [
        {
          name: t("organization"),
          href: "#",
          items: [
            {
              name: t("organizational-chart"),
              href: "/mem_giveaccline",
            },
            {
              name: t("organization-tree-table"),
              href: "/mem_upaccline",
            },
            {
              name: t("organization-tree-diagram"),
              href: "/mem_upacclinegraph",
            },
            {
              name: t("membership-roster"),
              href: "/mem_memlist",
            },
            {
              name: t("organization-query"),
              href: "/mem_orgsearch",
            },
          ],
        },
        {
          name: t("announcement"),
          href: "#",
          items: [
            {
              name: t("personal-information"),
              href: "/member",
            },
            {
              name: t("member-announcement"),
              href: "/member_news",
            },
          ],
        },
        {
          name: t("bonus-inquiry"),
          href: "#",
          items: [
            {
              name: t("current-bonus-inquiry"),
              href: "/bonus",
            },
            {
              name: t("history-bonus-inquiry"),
              href: "/bonushistory",
            },
          ],
        },
        {
          name: t("e-wallet"),
          href: "#",
          items: [
            {
              name: t("e-wallet-transfer"),
              href: "/ewallettransfer",
            },
            {
              name: t("e-wallet-convert-cash"),
              href: "/ewallettocash",
            },
            {
              name: t("e-wallet-inquiry"),
              href: "/ewalletquery",
            },
          ],
        },
        {
          name: t("point-history"),
          href: "#",
          items: [
            {
              name: t("point-history"),
              href: "/historyExp",
            },
            {
              name: t("point-value-transfer"),
              href: "/exptransfer",
            },
          ],
        },
        {
          name: t("order-information"),
          href: "#",
          items: [
            {
              name: t("consumption-record-query"),
              href: "/buy_history",
            },
            {
              name: t("today-order"),
              href: "/mem_memorder",
            },
          ],
        },
        {
          name: t("information-change"),
          href: "#",
          items: [
            {
              name: t("data-change"),
              href: "/mem_changedata",
            },
            {
              name: t("password-change"),
              href: "/forget-password",
            },
          ],
        },
        {
          name: t("join-online"),
          href: "/join",
        },
      ],
    },
    {
      id: 5,
      name: t("contact-us"),
      href: "contact",
    },
  ];

  const locale = useLocale();

  function onChangeCurrentLang(value: string) {
    const locale = value as Locale;
    setUserLocale(locale);
  }

  return (
    <header className="sticky top-0 z-50 w-full px-2 md:px-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex justify-end pt-2 text-sm">
          <div className="flex items-center gap-2">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              {t("login")}
            </Link>
            <span className="text-gray-300">|</span>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1">
                {languages.find((item) => item.code === locale)?.label}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => onChangeCurrentLang(lang.code)}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Nav */}
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/logo.png"
              alt="Ame Healthy Global Logo"
              width={100}
              height={40}
            />
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center divide-x-2 divide-gray-400 gap-4 mr-4">
            <ul className="relative md:flex items-center gap-6">
              {links.map((link) => {
                if (link.href) {
                  return (
                    <Link
                      key={link.id}
                      className="text-sm uppercase font-medium hover:text-primary"
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  );
                }

                return (
                  <li
                    key={link.id}
                    className="group"
                    onMouseEnter={() => setShowBlur(true)}
                    onMouseLeave={() => setShowBlur(false)}
                  >
                    <span className="h-8 items-center justify-center text-sm font-medium transition-opacity hover:opacity-70 duration-200 px-3 py-2 inline-flex text-secondary-foreground cursor-pointer uppercase">
                      {link.name}
                    </span>

                    {link.children && (
                      <div
                        className={cn(
                          "absolute top-9 -left-4 -right-4 flex h-0 group-hover:h-[440px] overflow-hidden transition-all duration-300 ease-in-out border-l border-r bg-gray-300",
                          hidden && "hidden",
                          link.name === t("product") && "group-hover:h-[120px]",
                          link.name === t("latest-news") &&
                            "group-hover:h-[64px]"
                        )}
                      >
                        <div className="p-4 mt-2 grid grid-cols-1 md:grid-cols-3 gap-8">
                          {link.children.map((child) => {
                            return (
                              <div key={child.name}>
                                <Link
                                  onClick={handleOnClick}
                                  href={child.href}
                                  className="flex space-x-2 items-center transition-opacity hover:opacity-70 hover:underline duration-200"
                                >
                                  <span className="text-xs font-medium uppercase">
                                    {child.name}
                                  </span>
                                </Link>

                                <ul className="mt-2">
                                  {child.items &&
                                    child.items.map(({ name, href }) => {
                                      return (
                                        <li key={name}>
                                          <Link
                                            onClick={handleOnClick}
                                            href={href}
                                            className="text-xs text-muted-foreground hover:opacity-70 hover:underline duration-200"
                                          >
                                            {name}
                                          </Link>
                                        </li>
                                      );
                                    })}
                                </ul>
                              </div>
                            );
                          })}
                        </div>

                        <div className="absolute bottom-0 w-full border-b-[1px]" />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile */}
          <Button
            className="md:hidden"
            size="icon"
            variant="ghost"
            onClick={() => handleToggleMenu()}
          >
            <Menu className="h-6 w-6" />
          </Button>

          {isOpen && (
            <motion.div
              className="fixed bg-background -top-[2px] right-0 left-0 bottom-0 h-screen z-10 px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="mt-4 flex justify-between p-3 px-4 relative ml-[1px]">
                <button
                  type="button"
                  className="ml-auto md:hidden p-2 absolute right-[10px] top-2"
                  onClick={handleToggleMenu}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    className="fill-primary"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                </button>
              </div>

              <div className="h-screen pb-[150px] overflow-auto">
                <motion.ul
                  initial="hidden"
                  animate="show"
                  className="px-3 pt-8 text-xl space-y-8 mb-8 overflow-auto"
                  variants={listVariant}
                >
                  {links.map(({ id, name, href, children }) => {
                    if (href) {
                      return (
                        <motion.li variants={itemVariant} key={id}>
                          <Link href={href} onClick={handleToggleMenu}>
                            {name}
                          </Link>
                        </motion.li>
                      );
                    }

                    return (
                      <li key={id}>
                        <Accordion collapsible type="single">
                          <AccordionItem value="item-1" className="border-none">
                            <AccordionTrigger className="flex items-center justify-between w-full font-normal p-0 hover:no-underline">
                              <span>{name}</span>
                            </AccordionTrigger>

                            {children && (
                              <AccordionContent className="text-xl">
                                <ul className="space-y-8 ml-4 mt-6" key={id}>
                                  {children.map((child) => {
                                    return (
                                      <div>
                                        <li key={child.name}>
                                          <Link
                                            onClick={handleToggleMenu}
                                            href={child.href}
                                          >
                                            <span>{child.name}</span>
                                          </Link>
                                        </li>

                                        <ul className="mt-2 ml-4">
                                          {child.items &&
                                            child.items.map(
                                              ({ name, href }) => {
                                                return (
                                                  <li key={name}>
                                                    <Link
                                                      onClick={handleToggleMenu}
                                                      href={href}
                                                      className="text-sm text-gray-800"
                                                    >
                                                      {name}
                                                    </Link>
                                                  </li>
                                                );
                                              }
                                            )}
                                        </ul>
                                      </div>
                                    );
                                  })}
                                </ul>
                              </AccordionContent>
                            )}
                          </AccordionItem>
                        </Accordion>
                      </li>
                    );
                  })}
                </motion.ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
}
