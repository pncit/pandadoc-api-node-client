/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * OpenAPI spec version: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PricingTableRequestDataDiscount } from './PricingTableRequestDataDiscount';
import { HttpFile } from '../http/http';

export class PricingTableRequestData {
    'name'?: string;
    'description'?: string;
    'price'?: number;
    'cost'?: number;
    'qty'?: number;
    'sku'?: string;
    'discount'?: PricingTableRequestDataDiscount;
    'taxFirst'?: PricingTableRequestDataDiscount;
    'taxSecond'?: PricingTableRequestDataDiscount;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "price",
            "baseName": "price",
            "type": "number",
            "format": ""
        },
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number",
            "format": ""
        },
        {
            "name": "qty",
            "baseName": "qty",
            "type": "number",
            "format": ""
        },
        {
            "name": "sku",
            "baseName": "sku",
            "type": "string",
            "format": ""
        },
        {
            "name": "discount",
            "baseName": "discount",
            "type": "PricingTableRequestDataDiscount",
            "format": ""
        },
        {
            "name": "taxFirst",
            "baseName": "tax_first",
            "type": "PricingTableRequestDataDiscount",
            "format": ""
        },
        {
            "name": "taxSecond",
            "baseName": "tax_second",
            "type": "PricingTableRequestDataDiscount",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PricingTableRequestData.attributeTypeMap;
    }

    public constructor() {
    }
}
