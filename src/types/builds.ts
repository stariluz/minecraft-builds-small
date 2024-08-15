interface Dimensions {
    length: number;
    width: number;
    height: number;
}

interface Content {
    description: string;
    dimensions: Dimensions;
    interiors: "Yes" | "No" | "No apply";
    versions: string;
    characteristics: string[];
}

interface DownloadData {
    javaSchematic: string[];
    javaWorld: string[];
    minecraftBedrock: string[]; // Typically this would have one element ".mcworld file"
}

interface Building {
    id: number;
    title: string;
    price: number;
    discount: number; // Percentage
    rating: number; // Base 5
    content: Content;
    downloadData: DownloadData;
    threeDModel: string; // URL to 3D model
    images: string[]; // Array of image URLs
}
