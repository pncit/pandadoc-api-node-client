/**
 * PandaDoc Public API
 * PandaDoc Public API documentation
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UploadSectionStatusEnum } from './UploadSectionStatusEnum';
import { HttpFile } from '../http/http';

export class UploadSectionResponse {
    'uuid'?: string;
    'name'?: string;
    'documentUuid'?: string;
    'status'?: UploadSectionStatusEnum;
    'sectionsUuids'?: Array<string>;
    'dateCreated'?: string;
    'dateModified'?: string;
    'dateCompleted'?: string;
    'infoMessage'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "documentUuid",
            "baseName": "document_uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "UploadSectionStatusEnum",
            "format": ""
        },
        {
            "name": "sectionsUuids",
            "baseName": "sections_uuids",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateModified",
            "baseName": "date_modified",
            "type": "string",
            "format": ""
        },
        {
            "name": "dateCompleted",
            "baseName": "date_completed",
            "type": "string",
            "format": ""
        },
        {
            "name": "infoMessage",
            "baseName": "info_message",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UploadSectionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
