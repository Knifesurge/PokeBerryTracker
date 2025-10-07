interface Berry {
    id: string;
    name: string;
};

interface Box {
    id: string;
    routeName: string;
    berries: Berry[];
};

interface BoxesState {
    items: Box[];
};

const initialState: BoxesState = {
    items: [],
};

export { Berry, Box, BoxesState, initialState };
