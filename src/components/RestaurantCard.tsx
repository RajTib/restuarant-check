import type { Restaurant } from "../types/restaurant";
import "../main.css"

type Props = {
    restaurant: Restaurant;
};

function getScoreColour(score: number): string {
    if (score >= 80) return "green";
    if (50 <= score && score <= 79) return "orange";
    return "red";
}

function getCardColour(score: number): string {
    if (score >= 80) return "#95d669ec"
    if (50 <= score && score <= 79) return "#fdca86"
    return "#ffaaaa"
}

function RestaurantCard({ restaurant }: Props) {
    return (
        <div className="restaurantCard" style={{ backgroundColor: getCardColour(restaurant.safetyScore) }}>
            <h2>{restaurant.name}</h2>
            <p>Safety Score: {restaurant.safetyScore}</p>
            <div className="progress-bar">
                <div className="progress-fill"
                    style={{
                        width: `${restaurant.safetyScore}%`,
                        backgroundColor: `${getScoreColour(restaurant.safetyScore)}`
                    }}
                ></div>
            </div>
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
