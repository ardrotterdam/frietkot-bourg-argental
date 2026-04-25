export interface IceCreamFlavor {
  id: string;
  nameKey: string;
  descriptionKey: string;
  category: "classique" | "signature" | "gourmand" | "sorbet";
  color: string;
}

export const iceCreamFlavors: IceCreamFlavor[] = [
  {
    id: "vanille",
    nameKey: "flavors.vanille",
    descriptionKey: "flavorDescriptions.vanille",
    category: "classique",
    color: "#F5E6C8",
  },
  {
    id: "chocolat",
    nameKey: "flavors.chocolat",
    descriptionKey: "flavorDescriptions.chocolat",
    category: "classique",
    color: "#4A2818",
  },
  {
    id: "fraise",
    nameKey: "flavors.fraise",
    descriptionKey: "flavorDescriptions.fraise",
    category: "classique",
    color: "#E8447A",
  },
  {
    id: "pistache",
    nameKey: "flavors.pistache",
    descriptionKey: "flavorDescriptions.pistache",
    category: "signature",
    color: "#93A957",
  },
  {
    id: "speculoos",
    nameKey: "flavors.speculoos",
    descriptionKey: "flavorDescriptions.speculoos",
    category: "signature",
    color: "#B8865C",
  },
  {
    id: "caramel-sale",
    nameKey: "flavors.caramelSale",
    descriptionKey: "flavorDescriptions.caramelSale",
    category: "signature",
    color: "#D4A853",
  },
  {
    id: "stracciatella",
    nameKey: "flavors.stracciatella",
    descriptionKey: "flavorDescriptions.stracciatella",
    category: "gourmand",
    color: "#F0EADC",
  },
  {
    id: "noisette",
    nameKey: "flavors.noisette",
    descriptionKey: "flavorDescriptions.noisette",
    category: "gourmand",
    color: "#8B5A3C",
  },
  {
    id: "cafe",
    nameKey: "flavors.cafe",
    descriptionKey: "flavorDescriptions.cafe",
    category: "gourmand",
    color: "#3B2418",
  },
  {
    id: "citron",
    nameKey: "flavors.citron",
    descriptionKey: "flavorDescriptions.citron",
    category: "sorbet",
    color: "#F4D03F",
  },
  {
    id: "framboise",
    nameKey: "flavors.framboise",
    descriptionKey: "flavorDescriptions.framboise",
    category: "sorbet",
    color: "#C2185B",
  },
  {
    id: "mangue",
    nameKey: "flavors.mangue",
    descriptionKey: "flavorDescriptions.mangue",
    category: "sorbet",
    color: "#F39C12",
  },
];

export type IceCreamCategory = IceCreamFlavor["category"];

export const categoryOrder: IceCreamCategory[] = [
  "classique",
  "signature",
  "gourmand",
  "sorbet",
];
