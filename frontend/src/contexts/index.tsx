"use client";
import { RefProvider } from "@contexts/refs";
export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <anotherProvider> //respect the order of priority
    <RefProvider>{children}</RefProvider>
    // </anotherProvider>
  );
}
