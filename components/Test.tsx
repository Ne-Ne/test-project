"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export async function Test() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return <h1>Test.tsx</h1>;
}
