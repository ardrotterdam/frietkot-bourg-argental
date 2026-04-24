export type RoomId = "delirium" | "duvel" | "queue-de-charrue";

export type RoomI18nKey = "delirium" | "duvel" | "queueDeCharrue";

import type { RoomIconType } from "@/app/components/room-icon";

export type BedType = "double" | "twin";

export interface Room {
  id: RoomId;
  i18nKey: RoomI18nKey;
  image: string;
  palette: {
    primary: string;
    secondary: string;
    accent: string;
  };
  icon: RoomIconType;
  capacity: number;
  bed: BedType;
}

export const rooms: Room[] = [
  {
    id: "delirium",
    i18nKey: "delirium",
    image: "/images/rooms/chambre-delirium-auberge-frietkot.webp",
    palette: {
      primary: "#E91E63",
      secondary: "#1A1A2E",
      accent: "#F8B5C8",
    },
    icon: "elephant",
    capacity: 2,
    bed: "double",
  },
  {
    id: "duvel",
    i18nKey: "duvel",
    image: "/images/rooms/chambre-duvel-auberge-frietkot.webp",
    palette: {
      primary: "#D32F2F",
      secondary: "#0A0A0A",
      accent: "#F4C430",
    },
    icon: "devil",
    capacity: 2,
    bed: "double",
  },
  {
    id: "queue-de-charrue",
    i18nKey: "queueDeCharrue",
    image: "/images/rooms/chambre-queue-de-charrue-auberge.webp",
    palette: {
      primary: "#3B5C5C",
      secondary: "#1F2937",
      accent: "#C9A24D",
    },
    icon: "plough",
    capacity: 2,
    bed: "double",
  },
];
