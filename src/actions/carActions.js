export function addFeature(newFeature) {
    return { type: "ADD_FEATURE", payload: newFeature };
}

export function removeFeature(feature) {
    return { type: "REMOVE_FEATURE", payload: feature };
}
