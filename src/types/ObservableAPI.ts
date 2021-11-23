import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { APILogDetailsResponse } from '../models/APILogDetailsResponse';
import { APILogListResponse } from '../models/APILogListResponse';
import { APILogListResponseResults } from '../models/APILogListResponseResults';
import { ContentLibraryItemListResponse } from '../models/ContentLibraryItemListResponse';
import { ContentLibraryItemListResponseResults } from '../models/ContentLibraryItemListResponseResults';
import { ContentLibraryItemResponse } from '../models/ContentLibraryItemResponse';
import { ContentLibraryItemResponseCreatedBy } from '../models/ContentLibraryItemResponseCreatedBy';
import { DocumentCreateByPdfRequest } from '../models/DocumentCreateByPdfRequest';
import { DocumentCreateByPdfRequestRecipients } from '../models/DocumentCreateByPdfRequestRecipients';
import { DocumentCreateByTemplateRequest } from '../models/DocumentCreateByTemplateRequest';
import { DocumentCreateByTemplateRequestContentLibraryItems } from '../models/DocumentCreateByTemplateRequestContentLibraryItems';
import { DocumentCreateByTemplateRequestContentPlaceholders } from '../models/DocumentCreateByTemplateRequestContentPlaceholders';
import { DocumentCreateByTemplateRequestImages } from '../models/DocumentCreateByTemplateRequestImages';
import { DocumentCreateByTemplateRequestRecipients } from '../models/DocumentCreateByTemplateRequestRecipients';
import { DocumentCreateLinkRequest } from '../models/DocumentCreateLinkRequest';
import { DocumentCreateLinkResponse } from '../models/DocumentCreateLinkResponse';
import { DocumentCreateResponse } from '../models/DocumentCreateResponse';
import { DocumentDetailsResponse } from '../models/DocumentDetailsResponse';
import { DocumentDetailsResponseCreatedBy } from '../models/DocumentDetailsResponseCreatedBy';
import { DocumentDetailsResponseGrandTotal } from '../models/DocumentDetailsResponseGrandTotal';
import { DocumentDetailsResponseLinkedObjects } from '../models/DocumentDetailsResponseLinkedObjects';
import { DocumentDetailsResponseRecipients } from '../models/DocumentDetailsResponseRecipients';
import { DocumentDetailsResponseTemplate } from '../models/DocumentDetailsResponseTemplate';
import { DocumentListResponse } from '../models/DocumentListResponse';
import { DocumentListResponseResults } from '../models/DocumentListResponseResults';
import { DocumentOrderingFieldsEnum } from '../models/DocumentOrderingFieldsEnum';
import { DocumentSendRequest } from '../models/DocumentSendRequest';
import { DocumentSendResponse } from '../models/DocumentSendResponse';
import { DocumentStatusEnum } from '../models/DocumentStatusEnum';
import { DocumentStatusResponse } from '../models/DocumentStatusResponse';
import { DocumentsFolderCreateRequest } from '../models/DocumentsFolderCreateRequest';
import { DocumentsFolderCreateResponse } from '../models/DocumentsFolderCreateResponse';
import { DocumentsFolderListResponse } from '../models/DocumentsFolderListResponse';
import { DocumentsFolderListResponseResults } from '../models/DocumentsFolderListResponseResults';
import { DocumentsFolderRenameRequest } from '../models/DocumentsFolderRenameRequest';
import { DocumentsFolderRenameResponse } from '../models/DocumentsFolderRenameResponse';
import { FormListResponse } from '../models/FormListResponse';
import { FormListResponseResults } from '../models/FormListResponseResults';
import { InlineObject } from '../models/InlineObject';
import { LinkedObjectCreateRequest } from '../models/LinkedObjectCreateRequest';
import { LinkedObjectCreateResponse } from '../models/LinkedObjectCreateResponse';
import { LinkedObjectListResponse } from '../models/LinkedObjectListResponse';
import { OAuth2AccessTokenResponse } from '../models/OAuth2AccessTokenResponse';
import { PricingTableRequest } from '../models/PricingTableRequest';
import { PricingTableRequestData } from '../models/PricingTableRequestData';
import { PricingTableRequestDataDiscount } from '../models/PricingTableRequestDataDiscount';
import { PricingTableRequestOptions } from '../models/PricingTableRequestOptions';
import { PricingTableRequestOptions1 } from '../models/PricingTableRequestOptions1';
import { PricingTableRequestOptionsDiscount } from '../models/PricingTableRequestOptionsDiscount';
import { PricingTableRequestOptionsTaxFirst } from '../models/PricingTableRequestOptionsTaxFirst';
import { PricingTableRequestOptionsTaxSecond } from '../models/PricingTableRequestOptionsTaxSecond';
import { PricingTableRequestRows } from '../models/PricingTableRequestRows';
import { PricingTableRequestSections } from '../models/PricingTableRequestSections';
import { PricingTablesResponse } from '../models/PricingTablesResponse';
import { PricingTablesResponseDiscount } from '../models/PricingTablesResponseDiscount';
import { PricingTablesResponseItems } from '../models/PricingTablesResponseItems';
import { PricingTablesResponseOptions } from '../models/PricingTablesResponseOptions';
import { PricingTablesResponseSummary } from '../models/PricingTablesResponseSummary';
import { PricingTablesResponseTables } from '../models/PricingTablesResponseTables';
import { PublicV1DocumentsContentLibraryItems } from '../models/PublicV1DocumentsContentLibraryItems';
import { PublicV1DocumentsContentPlaceholders } from '../models/PublicV1DocumentsContentPlaceholders';
import { PublicV1DocumentsImages } from '../models/PublicV1DocumentsImages';
import { PublicV1DocumentsRecipients } from '../models/PublicV1DocumentsRecipients';
import { PublicV1DocumentsTokens } from '../models/PublicV1DocumentsTokens';
import { TemplateDetailsResponse } from '../models/TemplateDetailsResponse';
import { TemplateDetailsResponseAssignedTo } from '../models/TemplateDetailsResponseAssignedTo';
import { TemplateDetailsResponseContentPlaceholders } from '../models/TemplateDetailsResponseContentPlaceholders';
import { TemplateDetailsResponseFields } from '../models/TemplateDetailsResponseFields';
import { TemplateDetailsResponseImages } from '../models/TemplateDetailsResponseImages';
import { TemplateDetailsResponsePreassignedPerson } from '../models/TemplateDetailsResponsePreassignedPerson';
import { TemplateDetailsResponseRoles } from '../models/TemplateDetailsResponseRoles';
import { TemplateDetailsResponseTokens } from '../models/TemplateDetailsResponseTokens';
import { TemplateListResponse } from '../models/TemplateListResponse';
import { TemplateListResponseResults } from '../models/TemplateListResponseResults';
import { TemplatesFolderCreateRequest } from '../models/TemplatesFolderCreateRequest';
import { TemplatesFolderCreateResponse } from '../models/TemplatesFolderCreateResponse';
import { TemplatesFolderListResponse } from '../models/TemplatesFolderListResponse';
import { TemplatesFolderListResponseResults } from '../models/TemplatesFolderListResponseResults';
import { TemplatesFolderRenameRequest } from '../models/TemplatesFolderRenameRequest';
import { TemplatesFolderRenameResponse } from '../models/TemplatesFolderRenameResponse';

import { APILogsApiRequestFactory, APILogsApiResponseProcessor} from "../apis/APILogsApi";
export class ObservableAPILogsApi {
    private requestFactory: APILogsApiRequestFactory;
    private responseProcessor: APILogsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: APILogsApiRequestFactory,
        responseProcessor?: APILogsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new APILogsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new APILogsApiResponseProcessor();
    }

    /**
     * Returns details of the specific API log event.
     * Details API Log
     * @param id Log event id.
     */
    public detailsApiLog(id: string, _options?: Configuration): Observable<APILogDetailsResponse> {
        const requestContextPromise = this.requestFactory.detailsApiLog(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detailsApiLog(rsp)));
            }));
    }

    /**
     * Get the list of all logs within the selected workspace. Optionally filter by date, page, and `#` of items per page.
     * List API Log
     * @param since Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-90d\&quot; (for past 90 days).
     * @param to Determines a point in time from which logs should be fetched. Either a specific ISO 8601 datetime or a relative identifier such as \&quot;-10d\&quot; (for past 10 days) or a special \&quot;now\&quot; value.
     * @param count The amount of items on each page.
     * @param page Page number of the results returned.
     * @param statuses Returns only the predefined status codes. Allows 1xx, 2xx, 3xx, 4xx, and 5xx.
     * @param methods Returns only the predefined HTTP methods. Allows GET, POST, PUT, PATCH, and DELETE.
     * @param search Returns the results containing a string.
     * @param environmentType Returns logs for production/sandbox.
     */
    public listApiLogs(since?: string, to?: string, count?: number, page?: number, statuses?: Array<100 | 200 | 300 | 400 | 500>, methods?: Array<'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'>, search?: string, environmentType?: 'PRODUCTION' | 'SANDBOX', _options?: Configuration): Observable<APILogListResponse> {
        const requestContextPromise = this.requestFactory.listApiLogs(since, to, count, page, statuses, methods, search, environmentType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listApiLogs(rsp)));
            }));
    }

}

import { ContentLibraryItemsApiRequestFactory, ContentLibraryItemsApiResponseProcessor} from "../apis/ContentLibraryItemsApi";
export class ObservableContentLibraryItemsApi {
    private requestFactory: ContentLibraryItemsApiRequestFactory;
    private responseProcessor: ContentLibraryItemsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContentLibraryItemsApiRequestFactory,
        responseProcessor?: ContentLibraryItemsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContentLibraryItemsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContentLibraryItemsApiResponseProcessor();
    }

    /**
     * Return detailed data about a content library item.
     * Details Content Library Item
     * @param id Content Library Item ID
     */
    public detailsContentLibraryItem(id: string, _options?: Configuration): Observable<ContentLibraryItemResponse> {
        const requestContextPromise = this.requestFactory.detailsContentLibraryItem(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detailsContentLibraryItem(rsp)));
            }));
    }

    /**
     * Optionally filter by a search query or tags.
     * List Content Library Item
     * @param q Search query. Filter by content library item name.
     * @param id Specify content library item ID.
     * @param deleted Returns only the deleted content library items.
     * @param folderUuid The UUID of the folder where the content library items are stored.
     * @param count Specify how many content library items to return. Default is 50 content library items, maximum is 100 content library items.
     * @param page Specify which page of the dataset to return.
     * @param tag Search tag. Filter by content library item tag.
     */
    public listContentLibraryItems(q?: string, id?: string, deleted?: boolean, folderUuid?: string, count?: number, page?: number, tag?: string, _options?: Configuration): Observable<ContentLibraryItemListResponse> {
        const requestContextPromise = this.requestFactory.listContentLibraryItems(q, id, deleted, folderUuid, count, page, tag, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listContentLibraryItems(rsp)));
            }));
    }

}

import { DocumentsApiRequestFactory, DocumentsApiResponseProcessor} from "../apis/DocumentsApi";
export class ObservableDocumentsApi {
    private requestFactory: DocumentsApiRequestFactory;
    private responseProcessor: DocumentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DocumentsApiRequestFactory,
        responseProcessor?: DocumentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DocumentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DocumentsApiResponseProcessor();
    }

    /**
     * Delete document by id
     * @param id Document ID
     */
    public deleteDocument(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteDocument(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDocument(rsp)));
            }));
    }

    /**
     * Create document
     * @param editorVer Set this parameter as &#x60;ev1&#x60; if you want to create a document from PDF with Classic Editor when both editors are enabled for the workspace.
     * @param inlineObject 
     */
    public documentCreate(editorVer?: string, inlineObject?: InlineObject, _options?: Configuration): Observable<DocumentCreateResponse> {
        const requestContextPromise = this.requestFactory.documentCreate(editorVer, inlineObject, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.documentCreate(rsp)));
            }));
    }

    /**
     * Create a Document Link
     * @param id Document ID
     * @param documentCreateLinkRequest 
     */
    public documentCreateLink(id: string, documentCreateLinkRequest: DocumentCreateLinkRequest, _options?: Configuration): Observable<DocumentCreateLinkResponse> {
        const requestContextPromise = this.requestFactory.documentCreateLink(id, documentCreateLinkRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.documentCreateLink(rsp)));
            }));
    }

    /**
     * Document details
     * @param id Document ID
     */
    public documentDetails(id: string, _options?: Configuration): Observable<DocumentDetailsResponse> {
        const requestContextPromise = this.requestFactory.documentDetails(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.documentDetails(rsp)));
            }));
    }

    /**
     * List documents
     * @param completedFrom Return results where the &#x60;date_completed&#x60; field (ISO 8601) is greater than or equal to this value.
     * @param completedTo Return results where the &#x60;date_completed&#x60; field (ISO 8601) is less than or equal to this value.
     * @param count Specify how many document results to return. Default is 50 documents, maximum is 100 documents.
     * @param createdFrom Return results where the &#x60;date_created&#x60; field (ISO 8601) is greater than or equal to this value.
     * @param createdTo Return results where the &#x60;date_created&#x60; field (ISO 8601) is less than this value.
     * @param deleted Returns only the deleted documents.
     * @param id 
     * @param folderUuid The UUID of the folder where the documents are stored.
     * @param formId Specify the form used for documents creation. This parameter can&#39;t be used with template_id.
     * @param metadata Specify metadata to filter by in the format of &#x60;metadata_{metadata-key}&#x3D;{metadata-value}&#x60; such as &#x60;metadata_opportunity_id&#x3D;2181432&#x60;. The &#x60;metadata_&#x60; prefix is always required.
     * @param modifiedFrom Return results where the &#x60;date_modified&#x60; field (iso-8601) is greater than or equal to this value.
     * @param modifiedTo Return results where the &#x60;date_modified&#x60; field (iso-8601) is less than this value.
     * @param orderBy Specify the order of documents to return. Use &#x60;value&#x60; (for example, &#x60;date_created&#x60;) for ASC and &#x60;-value&#x60; (for example, &#x60;-date_created&#x60;) for DESC.
     * @param page Specify which page of the dataset to return.
     * @param q Search query. Filter by document reference number (this token is stored on the template level) or name.
     * @param status Specify the status of documents to return.   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined 
     * @param statusNe Specify the status of documents to return (exclude).   * 0: document.draft   * 1: document.sent   * 2: document.completed   * 3: document.uploaded   * 4: document.error   * 5: document.viewed   * 6: document.waiting_approval   * 7: document.approved   * 8: document.rejected   * 9: document.waiting_pay   * 10: document.paid   * 11: document.voided   * 12: document.declined 
     * @param tag Search tag. Filter by document tag.
     * @param templateId Specify the template used for documents creation. Parameter can&#39;t be used with form_id.
     */
    public documentList(completedFrom?: string, completedTo?: string, count?: number, createdFrom?: string, createdTo?: string, deleted?: boolean, id?: string, folderUuid?: string, formId?: string, metadata?: string, modifiedFrom?: string, modifiedTo?: string, orderBy?: DocumentOrderingFieldsEnum, page?: number, q?: string, status?: DocumentStatusEnum, statusNe?: DocumentStatusEnum, tag?: string, templateId?: string, _options?: Configuration): Observable<DocumentListResponse> {
        const requestContextPromise = this.requestFactory.documentList(completedFrom, completedTo, count, createdFrom, createdTo, deleted, id, folderUuid, formId, metadata, modifiedFrom, modifiedTo, orderBy, page, q, status, statusNe, tag, templateId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.documentList(rsp)));
            }));
    }

    /**
     * Document status
     * @param id Specify document ID.
     */
    public documentStatus(id: string, _options?: Configuration): Observable<DocumentStatusResponse> {
        const requestContextPromise = this.requestFactory.documentStatus(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.documentStatus(rsp)));
            }));
    }

    /**
     * Document download
     * @param id Specify document ID.
     * @param watermarkColor HEX code (for example &#x60;#RRGGBB&#x60;).
     * @param watermarkFontSize Font size of the watermark.
     * @param watermarkOpacity In range 0.0-1.0
     * @param watermarkText Specify watermark text.
     */
    public downloadDocument(id: string, watermarkColor?: string, watermarkFontSize?: number, watermarkOpacity?: number, watermarkText?: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.downloadDocument(id, watermarkColor, watermarkFontSize, watermarkOpacity, watermarkText, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadDocument(rsp)));
            }));
    }

    /**
     * Download a signed PDF of a completed document
     * Download document protected
     * @param id Specify document ID.
     */
    public downloadProtectedDocument(id: string, _options?: Configuration): Observable<HttpFile> {
        const requestContextPromise = this.requestFactory.downloadProtectedDocument(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadProtectedDocument(rsp)));
            }));
    }

    /**
     * Delete Linked Object
     * @param id Specify document ID.
     * @param linkedObjectId Specify linked object ID.
     */
    public linkedObjectDelete(id: string, linkedObjectId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.linkedObjectDelete(id, linkedObjectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.linkedObjectDelete(rsp)));
            }));
    }

    /**
     * List Linked Objects
     * @param id Specify document ID.
     */
    public linkedObjectList(id: string, _options?: Configuration): Observable<LinkedObjectListResponse> {
        const requestContextPromise = this.requestFactory.linkedObjectList(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.linkedObjectList(rsp)));
            }));
    }

    /**
     * Create Linked Object
     * @param id Specify document ID.
     * @param linkedObjectCreateRequest 
     */
    public linkedObjectsCreate(id: string, linkedObjectCreateRequest: LinkedObjectCreateRequest, _options?: Configuration): Observable<LinkedObjectCreateResponse> {
        const requestContextPromise = this.requestFactory.linkedObjectsCreate(id, linkedObjectCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.linkedObjectsCreate(rsp)));
            }));
    }

    /**
     * Send Document
     * @param id Document ID
     * @param documentSendRequest 
     */
    public sendDocument(id: string, documentSendRequest?: DocumentSendRequest, _options?: Configuration): Observable<DocumentSendResponse> {
        const requestContextPromise = this.requestFactory.sendDocument(id, documentSendRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendDocument(rsp)));
            }));
    }

}

import { FoldersAPIApiRequestFactory, FoldersAPIApiResponseProcessor} from "../apis/FoldersAPIApi";
export class ObservableFoldersAPIApi {
    private requestFactory: FoldersAPIApiRequestFactory;
    private responseProcessor: FoldersAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersAPIApiRequestFactory,
        responseProcessor?: FoldersAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FoldersAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FoldersAPIApiResponseProcessor();
    }

    /**
     * Create a new folder to store your documents.
     * Create Documents Folder
     * @param documentsFolderCreateRequest 
     */
    public createDocumentFolder(documentsFolderCreateRequest?: DocumentsFolderCreateRequest, _options?: Configuration): Observable<DocumentsFolderCreateResponse> {
        const requestContextPromise = this.requestFactory.createDocumentFolder(documentsFolderCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDocumentFolder(rsp)));
            }));
    }

    /**
     * Create a new folder to store your templates.
     * Create Templates Folder
     * @param templatesFolderCreateRequest 
     */
    public createTemplateFolder(templatesFolderCreateRequest?: TemplatesFolderCreateRequest, _options?: Configuration): Observable<TemplatesFolderCreateResponse> {
        const requestContextPromise = this.requestFactory.createTemplateFolder(templatesFolderCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createTemplateFolder(rsp)));
            }));
    }

    /**
     * Get the list of folders that contain Documents in your account.
     * List Documents Folders
     * @param parentUuid The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @param count Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders.
     * @param page Optionally, specify which page of the dataset to return.
     */
    public listDocumentFolders(parentUuid?: string, count?: number, page?: number, _options?: Configuration): Observable<DocumentsFolderListResponse> {
        const requestContextPromise = this.requestFactory.listDocumentFolders(parentUuid, count, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listDocumentFolders(rsp)));
            }));
    }

    /**
     * Get the list of folders that contain Templates in your account.
     * List Templates Folders
     * @param parentUuid The UUID of the folder containing folders. To list the folders located in the root folder, remove this parameter in the request.
     * @param count Optionally, specify how many folders to return. Default is 50 folders, maximum is 100 folders.
     * @param page Optionally, specify which page of the dataset to return.
     */
    public listTemplateFolders(parentUuid?: string, count?: number, page?: number, _options?: Configuration): Observable<TemplatesFolderListResponse> {
        const requestContextPromise = this.requestFactory.listTemplateFolders(parentUuid, count, page, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplateFolders(rsp)));
            }));
    }

    /**
     * Rename Documents Folder.
     * Rename Documents Folder
     * @param id The UUID of the folder that you are renaming.
     * @param documentsFolderRenameRequest 
     */
    public renameDocumentFolder(id: string, documentsFolderRenameRequest?: DocumentsFolderRenameRequest, _options?: Configuration): Observable<DocumentsFolderRenameResponse> {
        const requestContextPromise = this.requestFactory.renameDocumentFolder(id, documentsFolderRenameRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.renameDocumentFolder(rsp)));
            }));
    }

    /**
     * Rename a templates folder.
     * Rename Templates Folder
     * @param id The UUID of the folder which you are renaming.
     * @param templatesFolderRenameRequest 
     */
    public renameTemplateFolder(id: string, templatesFolderRenameRequest?: TemplatesFolderRenameRequest, _options?: Configuration): Observable<TemplatesFolderRenameResponse> {
        const requestContextPromise = this.requestFactory.renameTemplateFolder(id, templatesFolderRenameRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.renameTemplateFolder(rsp)));
            }));
    }

}

import { FormsApiRequestFactory, FormsApiResponseProcessor} from "../apis/FormsApi";
export class ObservableFormsApi {
    private requestFactory: FormsApiRequestFactory;
    private responseProcessor: FormsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FormsApiRequestFactory,
        responseProcessor?: FormsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FormsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FormsApiResponseProcessor();
    }

    /**
     * List forms.
     * Forms
     * @param count Optionally, specify how many forms to return. Default is 50 forms, maximum is 100 forms.
     * @param page Optionally, specify which page of the dataset to return.
     * @param status Optionally, specify which status of the forms dataset to return.
     * @param orderBy Optionally, specify the form dataset order to return.
     * @param asc Optionally, specify sorting the result-set in ascending or descending order.
     * @param name Specify the form name.
     */
    public listForm(count?: number, page?: number, status?: Array<'draft' | 'active' | 'disabled'>, orderBy?: 'name' | 'responses' | 'status' | 'created_date' | 'modified_date', asc?: boolean, name?: string, _options?: Configuration): Observable<FormListResponse> {
        const requestContextPromise = this.requestFactory.listForm(count, page, status, orderBy, asc, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listForm(rsp)));
            }));
    }

}

import { OAuth20AuthenticationApiRequestFactory, OAuth20AuthenticationApiResponseProcessor} from "../apis/OAuth20AuthenticationApi";
export class ObservableOAuth20AuthenticationApi {
    private requestFactory: OAuth20AuthenticationApiRequestFactory;
    private responseProcessor: OAuth20AuthenticationApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OAuth20AuthenticationApiRequestFactory,
        responseProcessor?: OAuth20AuthenticationApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OAuth20AuthenticationApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OAuth20AuthenticationApiResponseProcessor();
    }

    /**
     * Create/Refresh Access Token
     * @param grantType This value must be set to &#x60;refresh_token&#x60;.
     * @param clientId Client ID that is automatically generated after application creation in the Developer Dashboard.
     * @param clientSecret Client secret that is automatically generated after application creation in the Developer Dashboard.
     * @param code &#x60;auth_code&#x60; from the server on the previous step (Authorize a PandaDoc User). 
     * @param scope Requested permissions. Use &#x60;read+write&#x60; as our default value to send documents.
     * @param refreshToken &#x60;refresh_token&#x60; you received and stored from the server when initially creating an &#x60;access_token&#x60;. 
     */
    public accessToken(grantType?: string, clientId?: string, clientSecret?: string, code?: string, scope?: string, refreshToken?: string, _options?: Configuration): Observable<OAuth2AccessTokenResponse> {
        const requestContextPromise = this.requestFactory.accessToken(grantType, clientId, clientSecret, code, scope, refreshToken, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.accessToken(rsp)));
            }));
    }

}

import { TemplatesApiRequestFactory, TemplatesApiResponseProcessor} from "../apis/TemplatesApi";
export class ObservableTemplatesApi {
    private requestFactory: TemplatesApiRequestFactory;
    private responseProcessor: TemplatesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplatesApiRequestFactory,
        responseProcessor?: TemplatesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TemplatesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TemplatesApiResponseProcessor();
    }

    /**
     * Delete a template
     * Delete Template
     * @param id Template ID
     */
    public deleteTemplate(id: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.deleteTemplate(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteTemplate(rsp)));
            }));
    }

    /**
     * Return detailed data about a template.
     * Details Template
     * @param id Template ID
     */
    public detailsTemaplate(id: string, _options?: Configuration): Observable<TemplateDetailsResponse> {
        const requestContextPromise = this.requestFactory.detailsTemaplate(id, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detailsTemaplate(rsp)));
            }));
    }

    /**
     * Optionally, filter by a search query or tags.
     * List Templates
     * @param q Optional search query. Filter by template name.
     * @param shared Returns only the shared templates.
     * @param deleted Optional. Returns only the deleted templates.
     * @param count Optionally, specify how many templates to return. Default is 50 templates, maximum is 100 templates.
     * @param page Optionally, specify which page of the dataset to return.
     * @param id Optionally, specify template ID.
     * @param folderUuid UUID of the folder where the templates are stored.
     * @param tag Optional search tag. Filter by template tag.
     */
    public listTemplates(q?: string, shared?: boolean, deleted?: boolean, count?: number, page?: number, id?: string, folderUuid?: string, tag?: Array<string>, _options?: Configuration): Observable<TemplateListResponse> {
        const requestContextPromise = this.requestFactory.listTemplates(q, shared, deleted, count, page, id, folderUuid, tag, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.listTemplates(rsp)));
            }));
    }

}