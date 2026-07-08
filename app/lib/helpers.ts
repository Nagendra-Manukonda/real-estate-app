import { Property } from "@/app/types/property";


const LIVING_IMG = "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80";
const KITCHEN_IMG = "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80";
const BEDROOM_IMG = "https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80";
const BATHROOM_IMG = "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80";
const GARDEN_IMG = "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80";


export function buildGallery(p: Pick<Property, "img" | "garden">): Property["images"] {
    return [
        { url: p.img, label: "Exterior" },
        { url: LIVING_IMG, label: "Living room" },
        { url: KITCHEN_IMG, label: "Kitchen" },
        { url: BEDROOM_IMG, label: "Bedroom" },
        { url: BATHROOM_IMG, label: "Bathroom" },
        { url: GARDEN_IMG, label: p.garden ? "Garden" : "Backyard" },
    ];
}

export function scrollToId(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}