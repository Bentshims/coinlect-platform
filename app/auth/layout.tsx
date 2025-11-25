import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/auth/language-switcher";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-black px-4">
         {/* Header */}
      
      {/* Left Section - Form */}
      <div className="">
        <header className="p-8 flex items-center justify-between">
            <Link href="/" className="text-[#FF9900] text-2xl font-bold">
                Coinlect
            </Link>
            <LanguageSwitcher />
        </header>

      
      </div>s

      {/* Right Section - Image */}
      <div className="flex items-center relative ml-[35%] gap-x-20">
        <div className="">  <Image src="/auth-image.png" alt="Auth Background" width={450} height={400} className="rounded-tr-3xl rounded-bl-3xl border-2 border-dashed border-zinc-900" /></div>
        {/* Content */}
        <div className="flex">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </div>
  );
}

