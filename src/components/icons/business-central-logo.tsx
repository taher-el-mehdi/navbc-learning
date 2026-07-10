import Image from "next/image";
import { cn } from "@/lib/utils";

interface BusinessCentralLogoProps {
  className?: string;
  priority?: boolean;
}

export function BusinessCentralLogo({
  className,
  priority = false,
}: BusinessCentralLogoProps) {
  return (
    <Image
      src="/images/business-central-logo.png"
      alt="Microsoft Dynamics 365 Business Central"
      width={320}
      height={320}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
