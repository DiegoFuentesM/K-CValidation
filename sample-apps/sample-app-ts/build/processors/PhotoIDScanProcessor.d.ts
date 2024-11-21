import type { FaceTecIDScanResult, FaceTecIDScanResultCallback, FaceTecIDScanProcessor } from "../../../../core-sdk/FaceTecSDK.js/FaceTecPublicApi";
import { SampleAppControllerReference } from "../sampleAppControllerReference/SampleAppControllerReference";
export declare class PhotoIDScanProcessor implements FaceTecIDScanProcessor {
    private cancelledDueToNetworkError;
    latestNetworkRequest: XMLHttpRequest;
    latestIDScanResult: FaceTecIDScanResult | null;
    success: boolean;
    sampleAppControllerReference: SampleAppControllerReference;
    constructor(sessionToken: string, sampleAppControllerReference: any);
    processIDScanResultWhileFaceTecSDKWaits: (idScanResult: FaceTecIDScanResult, idScanResultCallback: FaceTecIDScanResultCallback) => void;
    onFaceTecSDKCompletelyDone: () => void;
    cancelDueToNetworkError: (networkErrorMessage: string, faceTecIdScanResultCallback: FaceTecIDScanResultCallback) => void;
    isSuccess: () => boolean;
}
