import type { Restaurant } from "../types/restaurant";
import { getCardColour } from "../utils/Colours";
import { getShadowColour } from "../utils/Colours";
import { getScoreColour } from "../utils/Colours";
import "../main.css"

type Props = {
    restaurant: Restaurant;
    onSelect: (r: Restaurant) => void;
};

function RestaurantCard({ restaurant, onSelect }: Props) {
    return (
        <div className={`restaurantCard`} style={{
            "--card-bg": getCardColour(restaurant.safetyScore),
            "--card-shadow": getShadowColour(restaurant.safetyScore)
        } as React.CSSProperties
        } onClick={() => { console.log("clicked", restaurant.name); onSelect(restaurant) }}>
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
        </div>
    )
}

export default RestaurantCard
