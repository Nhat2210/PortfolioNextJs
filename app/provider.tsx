"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemesProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemesProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
