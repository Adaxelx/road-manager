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
import type {
    SubscriptionDTO,
    SubscriptionPaymentDTO,
    SubscriptionTypeDTO,
} from "../models";
import {
    SubscriptionDTOFromJSON,
    SubscriptionDTOToJSON,
    SubscriptionPaymentDTOFromJSON,
    SubscriptionPaymentDTOToJSON,
    SubscriptionTypeDTOFromJSON,
    SubscriptionTypeDTOToJSON,
} from "../models";

export interface AddSubscriptionRequest {
    subscriptionPaymentDTO: SubscriptionPaymentDTO;
}

/**
 *
 */
export class SubscriptionControllerApi extends runtime.BaseAPI {
    /**
     * Add subscription. When subscription\'s id == null, system will return bad request.Otherwise system adds new subscription to the database.
     */
    async addSubscriptionRaw(
        requestParameters: AddSubscriptionRequest,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<SubscriptionPaymentDTO>> {
        if (
            requestParameters.subscriptionPaymentDTO === null ||
            requestParameters.subscriptionPaymentDTO === undefined
        ) {
            throw new runtime.RequiredError(
                "subscriptionPaymentDTO",
                "Required parameter requestParameters.subscriptionPaymentDTO was null or undefined when calling addSubscription."
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters["Content-Type"] = "application/json";

        const response = await this.request(
            {
                path: `/addSubscription`,
                method: "POST",
                headers: headerParameters,
                query: queryParameters,
                body: SubscriptionPaymentDTOToJSON(
                    requestParameters.subscriptionPaymentDTO
                ),
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            SubscriptionPaymentDTOFromJSON(jsonValue)
        );
    }

    /**
     * Add subscription. When subscription\'s id == null, system will return bad request.Otherwise system adds new subscription to the database.
     */
    async addSubscription(
        subscriptionPaymentDTO: SubscriptionPaymentDTO,
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<SubscriptionPaymentDTO> {
        const response = await this.addSubscriptionRaw(
            { subscriptionPaymentDTO: subscriptionPaymentDTO },
            initOverrides
        );
        return await response.value();
    }

    /**
     */
    async getSubscriptionTypesRaw(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<Array<SubscriptionTypeDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request(
            {
                path: `/getSubscriptionTypes`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            jsonValue.map(SubscriptionTypeDTOFromJSON)
        );
    }

    /**
     */
    async getSubscriptionTypes(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<Array<SubscriptionTypeDTO>> {
        const response = await this.getSubscriptionTypesRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async getSubscriptionsRaw(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<runtime.ApiResponse<Array<SubscriptionDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request(
            {
                path: `/getSubscriptions`,
                method: "GET",
                headers: headerParameters,
                query: queryParameters,
            },
            initOverrides
        );

        return new runtime.JSONApiResponse(response, (jsonValue) =>
            jsonValue.map(SubscriptionDTOFromJSON)
        );
    }

    /**
     */
    async getSubscriptions(
        initOverrides?: RequestInit | runtime.InitOverrideFunction
    ): Promise<Array<SubscriptionDTO>> {
        const response = await this.getSubscriptionsRaw(initOverrides);
        return await response.value();
    }
}
