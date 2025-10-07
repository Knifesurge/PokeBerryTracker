// Represents an area in a Pokemon game
type LocationArea = {
    id: number;
    name: string;
    location: { name: string };
    pokemon_encounters: { pokemon: {name: string } }[];
};

export {
    // API types
    LocationArea
};

