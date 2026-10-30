"use client";

import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "971521419334";
const SITE_URL = "https://tire-shop-nearme.com";

const WhatsAppLink = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const message = `Hi, I'm interested in tyre service. I'm messaging from this page: ${SITE_URL}${pathname}`;
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
};

export default WhatsAppLink;
