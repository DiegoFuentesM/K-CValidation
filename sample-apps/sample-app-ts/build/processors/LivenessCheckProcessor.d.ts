import type { FaceTecSessionResult, FaceTecFaceScanResultCallback, FaceTecFaceScanProcessor } from "../../../../core-sdk/FaceTecSDK.js/FaceTecPublicApi";
import { SampleAppControllerReference } from "../sampleAppControllerReference/SampleAppControllerReference";
export declare class LivenessCheckProcessor implements FaceTecFaceScanProcessor {
    private cancelledDueToNetworkError;
    latestNetworkRequest: XMLHttpRequest;
    latestSessionResult: FaceTecSessionResult | null;
    success: boolean;
    sampleAppControllerReference: SampleAppControllerReference;
    constructor(sessionToken: string, sampleAppControllerReference: any);
    processSessionResultWhileFaceTecSDKWaits: (sessionResult: FaceTecSessionResult, faceScanResultCallback: FaceTecFaceScanResultCallback) => void;
    onFaceTecSDKCompletelyDone: () => void;
    cancelDueToNetworkError: (networkErrorMessage: string, faceScanResultCallback: FaceTecFaceScanResultCallback) => void;
    isSuccess: () => boolean;
}
