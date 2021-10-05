import { Municipality } from "./municipalities"

export interface SourceLoc {
    name: string;
    lat: number;
    lon: number;
}

export function distance(lat, lon) {
    return Math.sqrt(Math.pow(lat - lat, 2) + Math.pow(lon - lon, 2))
}

export function getBestDistanceByMunicipality(municipality: Municipality, sourceLocationArray: SourceLoc[]) {
    let bestSource = sourceLocationArray[0]
    let bestDistance = distance(municipality.lat, municipality.lon)

    for (let i = 0; i < sourceLocationArray.length; i++) {
        let tempSource = sourceLocationArray[i]
        let tempDistance = distance(municipality.lat, municipality.lon)
        if (tempDistance < bestDistance) {
            bestSource = tempSource
            bestDistance = tempDistance
        }
    }

    return bestSource
}

export function curateMunicipality(municipalityName) {
    return municipalityName
        .toLowerCase()
        .replace('á', 'a')
        .replace('é', 'e')
        .replace('í', 'i')
        .replace('ó', 'o')
        .replace('ú', 'u')
        .replace('ü', 'u')
        .replace('ñ', 'n')
        .replace('-', '')
}
