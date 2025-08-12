import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export const ThemeProvider = ({ children }: Props) => (
  <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </NextThemesProvider>
);

export default ThemeProvider;
