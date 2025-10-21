// Represents an area in a Pokemon game
type LocationArea = {
    id: number;
    name: string;
    location: {
        name: string
    };
    pokemon_encounters: Array<{
        pokemon: {
            name: string
        }
    }>;
};

type Berry = {
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    firmness: { 
        name: string
    };
    flavors: Array<{
        potency: number;
        flavor: {
            name: string;
        };
    }>;
    item: {
        name: string;
        url: string;
    };
    natural_gift_type: {
        name: string;
        url: string;
    };
}

export {
    Berry,
    // API types
    LocationArea
};

