/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DocumentCreateByTemplateRequestTokens } from './DocumentCreateByTemplateRequestTokens';
import { DocumentUpdateRequestRecipients } from './DocumentUpdateRequestRecipients';
import { PricingTableRequest } from './PricingTableRequest';
import { HttpFile } from '../http/http';

export class DocumentUpdateRequest {
    /**
    * The list of recipients you're sending the document to. The ID or email are required. If the ID is passed, an existing recipient will be updated. If the email is passed, a new recipient will be added to CC.
    */
    'recipients'?: Array<DocumentUpdateRequestRecipients>;
    /**
    * You may pass a list of fields/values which exist in a document. Please use `Merge Field` property of the fields like the key.
    */
    'fields'?: any;
    /**
    * You can pass a list of tokens/values. If a token name exists in a document then the value will be updated. Otherwise, a new token will be added to the document.
    */
    'tokens'?: Array<DocumentCreateByTemplateRequestTokens>;
    /**
    * You can pass arbitrary data in the key-value format to associate custom information with a document. This information is returned in any API requests for the document details by id. If metadata exists in a document then the value will be updated. Otherwise, metadata will be added to the document.
    */
    'metadata'?: any;
    'pricingTables'?: Array<PricingTableRequest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recipients",
            "baseName": "recipients",
            "type": "Array<DocumentUpdateRequestRecipients>",
            "format": ""
        },
        {
            "name": "fields",
            "baseName": "fields",
            "type": "any",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<DocumentCreateByTemplateRequestTokens>",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "any",
            "format": ""
        },
        {
            "name": "pricingTables",
            "baseName": "pricing_tables",
            "type": "Array<PricingTableRequest>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DocumentUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
