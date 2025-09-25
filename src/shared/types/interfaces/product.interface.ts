export interface IProduct {
    id: number;
    name: string;
    description: string;
    release_year: string;
    cover_image: string;
    images: string[];
    price: number;
    available_colors: string[];
    available_sizes: string[];
}