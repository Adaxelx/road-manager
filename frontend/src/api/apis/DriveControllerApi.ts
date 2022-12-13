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

import * as runtime from "../runtime";
import type { VehicleDTO } from "../models";
import { VehicleDTOFromJSON, VehicleDTOToJSON } from "../models";

export interface RegisterVehicleRequest {
    vehicleDTO: VehicleDTO;
}

/**
 *
 */
export class DriveControllerApi extends runtime.BaseAPI {
    /**
     */
    async registerVehicleRaw(
        requestParameters: RegisterVehicleRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<object>> {
        if (
            requestParameters.vehicleDTO === null ||
            requestParameters.vehicleDTO === undefined
        ) {
            throw new runtime.RequiredError(
                "vehicleDTO",
                "Required parameter requestParameters.vehicleDTO was null or undefined when calling registerVehicle."
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        const response = await this.request(
            {
                path: `/drive`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: VehicleDTOToJSON(requestParameters.vehicleDTO),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async registerVehicle(
        vehicleDTO: VehicleDTO,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<object> {
        const response = await this.registerVehicleRaw(
            { vehicleDTO: vehicleDTO },
            initOverrides
        );
        return await response.value();
    }
}