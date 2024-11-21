import type { FaceTecSessionResult, FaceTecFaceScanResultCallback, FaceTecIDScanResult, FaceTecIDScanResultCallback, FaceTecFaceScanProcessor, FaceTecIDScanProcessor } from "../../../../core-sdk/FaceTecSDK.js/FaceTecPublicApi";
import { SampleAppControllerReference } from "../sampleAppControllerReference/SampleAppControllerReference";
export declare class PhotoIDMatchProcessor implements FaceTecFaceScanProcessor, FaceTecIDScanProcessor {
    private cancelledDueToNetworkError;
    latestNetworkRequest: XMLHttpRequest;
    latestSessionResult: FaceTecSessionResult | null;
    latestIDScanResult: FaceTecIDScanResult | null;
    success: boolean;
    sampleAppControllerReference: SampleAppControllerReference;
    constructor(sessionToken: string, sampleAppControllerReference: any);
    processSessionResultWhileFaceTecSDKWaits: (sessionResult: FaceTecSessionResult, faceScanResultCallback: FaceTecFaceScanResultCallback) => void;
    processIDScanResultWhileFaceTecSDKWaits: (idScanResult: FaceTecIDScanResult, idScanResultCallback: FaceTecIDScanResultCallback) => void;
    onFaceTecSDKCompletelyDone: () => void;
    cancelDueToNetworkError: (networkErrorMessage: string, faceTecScanResultCallback: FaceTecFaceScanResultCallback | FaceTecIDScanResultCallback) => void;
    isSuccess: () => boolean;
}
