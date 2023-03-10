import BRETTONIA from "../../assets/factions/fantasy/brettonia.jpg";
import CATHAY from "../../assets/factions/fantasy/cathay.jpg";
import CHAOS from "../../assets/factions/fantasy/chaos.jpg";
import DARK_ELVES from "../../assets/factions/fantasy/dark_elves.jpg";
import DWARF from "../../assets/factions/fantasy/dwarf.jpg";
import EMPIRE from "../../assets/factions/fantasy/empire.jpg";
import HIGH_ELVES from "../../assets/factions/fantasy/high_elves.jpg";
import ORCS_AND_GOBLINS from "../../assets/factions/fantasy/orcs_and_goblins.jpg";
import NIPPON from "../../assets/factions/fantasy/nippon.jpg";
import SKAVEN from "../../assets/factions/fantasy/skaven.jpg";
import ARABS from "../../assets/factions/dark_ages/arab.jpg";
import CELTS from "../../assets/factions/dark_ages/celt.jpg";
import NORMANS from "../../assets/factions/dark_ages/normans.jpg";
import ROMANS from "../../assets/factions/dark_ages/romans.jpg";
import SAXONS from "../../assets/factions/dark_ages/saxons.jpg";
import VIKINGS from "../../assets/factions/dark_ages/vikings.jpg";
import { Faction } from "../../types";

export interface FactionButton {
  id: Faction;
  name: string;
  image: string;
}

const FantasyFactions: FactionButton[] = [
  {
    id: "Brettonia",
    name: "Brettonia",
    image: BRETTONIA,
  },
  {
    id: "Cathay",
    name: "Cathay",
    image: CATHAY,
  },
  {
    id: "Chaos",
    name: "Chaos",
    image: CHAOS,
  },
  {
    id: "Dark_Elves",
    name: "Dark Elves",
    image: DARK_ELVES,
  },
  {
    id: "Dwarf",
    name: "Dwarf",
    image: DWARF,
  },
  {
    id: "Empire",
    name: "Empire",
    image: EMPIRE,
  },
  {
    id: "High_Elves",
    name: "High Elves",
    image: HIGH_ELVES,
  },
  {
    id: "Orcs_and_Goblins",
    name: "Orcs and Goblins",
    image: ORCS_AND_GOBLINS,
  },
  {
    id: "Nippon",
    name: "Nippon",
    image: NIPPON,
  },
  {
    id: "Skaven",
    name: "Skaven",
    image: SKAVEN,
  },
];
const DarkAgesFactions: FactionButton[] = [
  {
    id: "Arabs",
    name: "Arabs",
    image: ARABS,
  },
  {
    id: "Celts",
    name: "Celts",
    image: CELTS,
  },
  {
    id: "Normans",
    name: "Normans",
    image: NORMANS,
  },
  {
    id: "Romans",
    name: "Romans",
    image: ROMANS,
  },
  {
    id: "Saxons",
    name: "Saxons",
    image: SAXONS,
  },
  {
    id: "Vikings",
    name: "Vikings",
    image: VIKINGS,
  },
];

export default {
  fantasy: FantasyFactions,
  dark_ages: DarkAgesFactions,
};
