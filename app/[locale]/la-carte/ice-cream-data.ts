export interface IceCreamFlavor {
  id: string;
  nameKey: string; // e.g. "flavors.vanille" (namespace: glaces)
  category: "classique" | "signature" | "gourmand" | "sorbet";
  color: string;
}

export const iceCreamFlavors: IceCreamFlavor[] = [
  { id: "vanille", nameKey: "flavors.vanille", category: "classique", color: "#F5E6C8" },
  { id: "chocolat", nameKey: "flavors.chocolat", category: "classique", color: "#4A2818" },
  { id: "fraise", nameKey: "flavors.fraise", category: "classique", color: "#E8447A" },
  { id: "pistache", nameKey: "flavors.pistache", category: "signature", color: "#93A957" },
  { id: "speculoos", nameKey: "flavors.speculoos", category: "signature", color: "#B8865C" },
  {
    id: "caramel-sale",
    nameKey: "flavors.caramelSale",
    category: "signature",
    color: "#D4A853",
  },
  {
    id: "stracciatella",
    nameKey: "flavors.stracciatella",
    category: "gourmand",
    color: "#F0EADC",
  },
  { id: "noisette", nameKey: "flavors.noisette", category: "gourmand", color: "#8B5A3C" },
  { id: "cafe", nameKey: "flavors.cafe", category: "gourmand", color: "#3B2418" },
  { id: "citron", nameKey: "flavors.citron", category: "sorbet", color: "#F4D03F" },
  { id: "framboise", nameKey: "flavors.framboise", category: "sorbet", color: "#C2185B" },
  { id: "mangue", nameKey: "flavors.mangue", category: "sorbet", color: "#F39C12" },
];

export type IceCreamCategory = IceCreamFlavor["category"];

export const categoryOrder: IceCreamCategory[] = [
  "classique",
  "signature",
  "gourmand",
  "sorbet",
];
