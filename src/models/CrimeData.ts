export interface CrimeData {
    date: string;
    description: string;
    latitude: number;
    longitude: number;
    driving_danger_score: number;
    walking_danger_score: number;
    average_danger_score: number;
}