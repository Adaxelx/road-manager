/* tslint:disable */
/* eslint-disable */
/**
 * Road Manager - OpenAPI 3.0
 * Road Manager API
 *
 * The version of the OpenAPI document: 1.0.11
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface JunctionDTO
 */
export interface JunctionDTO {
    /**
     *
     * @type {number}
     * @memberof JunctionDTO
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof JunctionDTO
     */
    latitude?: number;
    /**
     *
     * @type {number}
     * @memberof JunctionDTO
     */
    longitude?: number;
    /**
     *
     * @type {string}
     * @memberof JunctionDTO
     */
    name?: string;
}

/**
 * Check if a given object implements the JunctionDTO interface.
 */
export function instanceOfJunctionDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function JunctionDTOFromJSON(json: any): JunctionDTO {
    return JunctionDTOFromJSONTyped(json, false);
}

export function JunctionDTOFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): JunctionDTO {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        id: !exists(json, "id") ? undefined : json["id"],
        latitude: !exists(json, "latitude") ? undefined : json["latitude"],
        longitude: !exists(json, "longitude") ? undefined : json["longitude"],
        name: !exists(json, "name") ? undefined : json["name"],
    };
}

export function JunctionDTOToJSON(value?: JunctionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        id: value.id,
        latitude: value.latitude,
        longitude: value.longitude,
        name: value.name,
    };
}