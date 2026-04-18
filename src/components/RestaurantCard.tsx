import type { Restaurant } from "../types/restaurant";
import "./main.css"

type Props = {
    restaurant: Restaurant;
};

function RestaurantCard({ restaurant }: Props) {
    return (
        <div className="restaurantCard">
            <h2>{restaurant.name}</h2>
            <p>Safety Score: {restaurant.safetyScore}</p>

            {restaurant.issues.length > 0 ? (
                <ul>
                    {restaurant.issues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                    ))}
                </ul>
            ) : (
                <p>No issues reported</p>
            )}
        </div>
    )
}

export default RestaurantCard
