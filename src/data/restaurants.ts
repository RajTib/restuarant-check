import type { Restaurant } from "../types/restaurant";

export const restaurants: Restaurant[] = [
    {
        id: "1",
        name: "Spicy Palace",
        safetyScore: 50,
        issues: ["Poor ventilation", "Rats"]
    },
    {
        id: "1",
        name: "Hot Bowl",
        safetyScore: 90,
        issues: ["No gloves"]
    },
    {
        id: "3",
        name: "Pizza Plaza",
        safetyScore: 30,
        issues: ["Poor ventilation", "Rats", "No gloves", "No haircap"]
    }
]
