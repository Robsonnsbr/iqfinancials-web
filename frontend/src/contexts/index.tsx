"use client";
import { ScrollProvider } from "./refs";
export default function AppProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <anotherProvider> //respect the order of priority
    <ScrollProvider>{children}</ScrollProvider>
    // </anotherProvider>
  );
}
