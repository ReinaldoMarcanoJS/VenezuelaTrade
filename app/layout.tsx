import type { ReactNode } from "react";
import { StoreProvider } from "./StoreProvider";
import "./styles/globals.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="es">
        <body className="bg-gradient-to-t  to-[#0a4169be] via-[#0a416939] from-transparent">
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
