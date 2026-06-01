import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DropBox",
  description: "Create by Akash. You can upload your images folders ",
  icons:{icon:"/box.png"}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const clerkPublishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {clerkPublishableKey ? (
          <ClerkProvider publishableKey={clerkPublishableKey}>
            <Providers>{children}</Providers>
          </ClerkProvider>
        ) : (
          // When running builds locally without Clerk keys we still need to
          // render a ClerkProvider to avoid `useClerk` errors. Pass the
          // internal bypass flag. The cast is necessary because the prop is
          // internal to Clerk's types.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          <ClerkProvider {...({ __internal_bypassMissingPublishableKey: true } as any)}>
            <Providers>{children}</Providers>
          </ClerkProvider>
        )}
      </body>
    </html>
  );
}
