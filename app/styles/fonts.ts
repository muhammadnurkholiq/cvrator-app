// Import the necessary functions from `next/font/google`
import { Inter, Roboto_Slab } from "next/font/google";

// Configure the fonts with the desired subsets and styles
export const inter = Inter({ subsets: ["latin"] });
export const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"]
});
