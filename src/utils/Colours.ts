export function getScoreColour(score: number): string {
    if (score >= 80) return "green";
    if (50 <= score && score <= 79) return "orange";
    return "red";
}

export function getCardColour(score: number): string {
    if (score >= 80) return "#95d669ec"
    if (50 <= score && score <= 79) return "#fdca86"
    return "#ffaaaa"
}

export function getShadowColour(score: number): string {
    if (score >= 80) return "rgb(34, 197, 94)"
    if (50 <= score && score <= 79) return "rgb(245, 143, 60)"
    return "rgb(239, 68, 68)"
}
