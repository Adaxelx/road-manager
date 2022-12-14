/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
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
     * @type {string}
     * @memberof JunctionDTO
     */
    name?: string;
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
        name: !exists(json, "name") ? undefined : json["name"],
        latitude: !exists(json, "latitude") ? undefined : json["latitude"],
        longitude: !exists(json, "longitude") ? undefined : json["longitude"],
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
        name: value.name,
        latitude: value.latitude,
        longitude: value.longitude,
    };
}
