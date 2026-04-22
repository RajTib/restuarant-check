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

function getShadowColour(score: number): string {
    if (score >= 80) return "rgb(34, 197, 94)"
    if (50 <= score && score <= 79) return "rgb(245, 143, 60)"
    return "rgb(239, 68, 68)"
}

function RestaurantCard({ restaurant }: Props) {
    return (
        <div className="restaurantCard" style={{
            "--card-bg": getCardColour(restaurant.safetyScore),
            "--card-shadow": getShadowColour(restaurant.safetyScore)
        } as React.CSSProperties
        }>
            <div className="card-header">
                <h2>{restaurant.name}</h2>
                <span className="score-badge">Safety Score: {restaurant.safetyScore}</span>
            </div>
            <div className="progress-bar">
                <div className="progress-fill"
                    style={{
                        width: `${restaurant.safetyScore}%`,
                        backgroundColor: `${getScoreColour(restaurant.safetyScore)}`
                    }}
                ></div>
            </div>
            {/* {restaurant.issues.length > 0 ? (
                <ul>
                    {restaurant.issues.map((issue, index) => (
                        <li key={index}>{issue}</li>
                    ))}
                </ul>
            ) : (
                <p>No issues reported</p>
            )} */}
        </div>
    )
}

export default RestaurantCard
