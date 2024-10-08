// Import the necessary functions from `next/font/google`
import { Roboto_Slab, Roboto_Condensed } from "next/font/google";

// Configure the fonts with the desired subsets and styles
export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"]
});

export const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"]
});
