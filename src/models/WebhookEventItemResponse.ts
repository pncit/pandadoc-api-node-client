/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WebhookEventErrorEnum } from './WebhookEventErrorEnum';
import { WebhookEventTriggerEnum } from './WebhookEventTriggerEnum';
import { HttpFile } from '../http/http';

export class WebhookEventItemResponse {
    /**
    * Unique webhook subscription event identifier
    */
    'uuid'?: string;
    /**
    * Webhook subscription name
    */
    'name'?: string;
    'type'?: WebhookEventTriggerEnum;
    /**
    * Webhook subscription event response http status code
    */
    'httpStatusCode'?: number;
    'error'?: WebhookEventErrorEnum;
    /**
    * Webhook subscription event delivery time
    */
    'deliveryTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "WebhookEventTriggerEnum",
            "format": ""
        },
        {
            "name": "httpStatusCode",
            "baseName": "http_status_code",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "WebhookEventErrorEnum",
            "format": ""
        },
        {
            "name": "deliveryTime",
            "baseName": "delivery_time",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return WebhookEventItemResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
