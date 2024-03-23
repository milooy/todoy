// app/providers.tsx
'use client';

import ClientSideQueryClientProvider from '@/components/global/ClientSideQueryClientProvider';
import { NextUIProvider } from '@nextui-org/react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ClientSideQueryClientProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </ClientSideQueryClientProvider>
  );
}
