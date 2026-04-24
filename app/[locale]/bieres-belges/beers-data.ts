export type BeerCategory = "trappiste" | "abbaye" | "blonde-forte" | "special";

export type BeerColor = "blonde" | "ambrée" | "brune" | "dorée";

export type GlassType = "goblet" | "tulip" | "chalice" | "kwak" | "flute";

export type BeerMessageKey =
  | "chimayBleue"
  | "chimayRouge"
  | "westmalleTripel"
  | "orval"
  | "duvel"
  | "leffeBlonde"
  | "delirium"
  | "kwak"
  | "paljas"
  | "herbergBrune";

export interface Beer {
  id: string;
  name: string;
  brewery: string;
  region: string;
  category: BeerCategory;
  color: BeerColor;
  hexColor: string;
  abv: number;
  glassType: GlassType;
  /** Namespace `bieres` in messages: e.g. chimayBleue → t('chimayBleue.tagline') */
  msg: BeerMessageKey;
}

export const beers: Beer[] = [
  {
    id: "chimay-bleue",
    name: "Chimay Bleue",
    brewery: "Abbaye de Scourmont",
    region: "Wallonie",
    category: "trappiste",
    color: "brune",
    hexColor: "#3D1F0E",
    abv: 9,
    glassType: "chalice",
    msg: "chimayBleue",
  },
  {
    id: "chimay-rouge",
    name: "Chimay Rouge (Première)",
    brewery: "Abbaye de Scourmont",
    region: "Wallonie",
    category: "trappiste",
    color: "ambrée",
    hexColor: "#6B2F18",
    abv: 7,
    glassType: "chalice",
    msg: "chimayRouge",
  },
  {
    id: "westmalle-tripel",
    name: "Westmalle Tripel",
    brewery: "Abdij Westmalle",
    region: "Vlaanderen",
    category: "trappiste",
    color: "dorée",
    hexColor: "#E8A93D",
    abv: 9.5,
    glassType: "chalice",
    msg: "westmalleTripel",
  },
  {
    id: "orval",
    name: "Orval",
    brewery: "Abbaye d'Orval",
    region: "Wallonie",
    category: "trappiste",
    color: "ambrée",
    hexColor: "#C87A2F",
    abv: 6.2,
    glassType: "goblet",
    msg: "orval",
  },
  {
    id: "duvel",
    name: "Duvel",
    brewery: "Brouwerij Duvel Moortgat",
    region: "Vlaanderen",
    category: "blonde-forte",
    color: "dorée",
    hexColor: "#F0C544",
    abv: 8.5,
    glassType: "tulip",
    msg: "duvel",
  },
  {
    id: "leffe-blonde",
    name: "Leffe Blonde",
    brewery: "Abbaye de Leffe",
    region: "Wallonie",
    category: "abbaye",
    color: "blonde",
    hexColor: "#E8B540",
    abv: 6.6,
    glassType: "chalice",
    msg: "leffeBlonde",
  },
  {
    id: "delirium-tremens",
    name: "Delirium Tremens",
    brewery: "Brouwerij Huyghe",
    region: "Vlaanderen",
    category: "blonde-forte",
    color: "dorée",
    hexColor: "#F0C868",
    abv: 8.5,
    glassType: "tulip",
    msg: "delirium",
  },
  {
    id: "kwak",
    name: "Pauwel Kwak",
    brewery: "Brouwerij Bosteels",
    region: "Vlaanderen",
    category: "special",
    color: "ambrée",
    hexColor: "#B8692B",
    abv: 8.4,
    glassType: "kwak",
    msg: "kwak",
  },
  {
    id: "paljas-blonde",
    name: "Paljas Blonde",
    brewery: "Brouwerij Anders!",
    region: "Vlaanderen",
    category: "abbaye",
    color: "blonde",
    hexColor: "#E8B540",
    abv: 6,
    glassType: "tulip",
    msg: "paljas",
  },
  {
    id: "herberg-brune",
    name: "Herberg Brune",
    brewery: "Brouwerij Herberg",
    region: "Vlaanderen",
    category: "abbaye",
    color: "brune",
    hexColor: "#4A2411",
    abv: 6.5,
    glassType: "goblet",
    msg: "herbergBrune",
  },
];
