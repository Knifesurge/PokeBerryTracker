import { Berry, LocationArea } from '@/src/app/constants/types';

class PokeApiClient {
    private baseUrl = "https://pokeapi.co/api/v2";

    private async request<T>(endpoint: string): Promise<T> {
        const res = await fetch(`${this.baseUrl}/${endpoint}`);
        if (!res.ok) {
            throw new Error(`Error fetching endpoint: ${endpoint}: ${res.status}`);
        }

        return res.json();
    }

    // Get a Berry by name or id
    async getBerry(nameOrId:string | number) {
        return this.request<Berry>(`berry/${nameOrId}`);
    }

    async getAllBerries(limit: number = 100) {
        return this.request<{ results: { name: string; url: string; }[] }>(
            `berry?limit=${limit}`
        );
    }

    async getRoute(nameOrId: string | number) {
        return this.request<LocationArea>(`location-area/${nameOrId}`);
    }

    async getAllRoutes(limit: number = 100) {
        return this.request<{ results: { name: string; url: string; }[] }>(
            `location-area?limit=${limit}`
        );
    }
}

export default PokeApiClient;