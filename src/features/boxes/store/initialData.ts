import mockData from '@/src/mockdata/MockData.json';
import { nanoid } from "nanoid";
import { Box } from './types';

export const berriesList: string[] = mockData[1].berries!;
export const routesList: string[] = mockData[0].routes!;

export const createInitialBoxes = (): Box[] => {
    
    return routesList.map((routeName) => ({
        id: nanoid(),
        routeName: `Route ${routeName}`,
        berries: [],
    }));
};