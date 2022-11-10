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
import type { JunctionDTO } from "./JunctionDTO";
import {
    JunctionDTOFromJSON,
    JunctionDTOFromJSONTyped,
    JunctionDTOToJSON,
} from "./JunctionDTO";

/**
 *
 * @export
 * @interface RoadSegmentDTO
 */
export interface RoadSegmentDTO {
    /**
     *
     * @type {JunctionDTO}
     * @memberof RoadSegmentDTO
     */
    end?: JunctionDTO;
    /**
     *
     * @type {number}
     * @memberof RoadSegmentDTO
     */
    id?: number;
    /**
     *
     * @type {number}
     * @memberof RoadSegmentDTO
     */
    length?: number;
    /**
     *
     * @type {JunctionDTO}
     * @memberof RoadSegmentDTO
     */
    start?: JunctionDTO;
}

/**
 * Check if a given object implements the RoadSegmentDTO interface.
 */
export function instanceOfRoadSegmentDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoadSegmentDTOFromJSON(json: any): RoadSegmentDTO {
    return RoadSegmentDTOFromJSONTyped(json, false);
}

export function RoadSegmentDTOFromJSONTyped(
    json: any,
    ignoreDiscriminator: boolean
): RoadSegmentDTO {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        end: !exists(json, "end")
            ? undefined
            : JunctionDTOFromJSON(json["end"]),
        id: !exists(json, "id") ? undefined : json["id"],
        length: !exists(json, "length") ? undefined : json["length"],
        start: !exists(json, "start")
            ? undefined
            : JunctionDTOFromJSON(json["start"]),
    };
}

export function RoadSegmentDTOToJSON(value?: RoadSegmentDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        end: JunctionDTOToJSON(value.end),
        id: value.id,
        length: value.length,
        start: JunctionDTOToJSON(value.start),
    };
}