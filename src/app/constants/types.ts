type BerrySlot = {
    id: string;
    berry: string|null;
};

type RouteBox = {
    id: string;
    route: string|null;
    berries: BerrySlot[];
};

type Berry = {
    id: number;
    name: string;
    firmness: { name: string};
    flavors: { flavor: { name: string}; potency: number };
    item: { name: string };
    natural_gift_power: number;
};

// Represents an area in a Pokemon game
type LocationArea = {
    id: number;
    name: string;
    location: { name: string };
    pokemon_encounters: { pokemon: {name: string } }[];
};

export {
    Berry, BerrySlot,
    // API types
    LocationArea, RouteBox
};

