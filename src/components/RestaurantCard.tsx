import type { Restaurant } from "../types/restaurant";
import { getCardColour } from "../utils/Colours";
import { getShadowColour } from "../utils/Colours";
import { getScoreColour } from "../utils/Colours";
import "../main.css"

type Props = {
    restaurant: Restaurant;
};

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
