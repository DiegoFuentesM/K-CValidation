import type { FaceTecIDScanStatus, FaceTecSDKStatus, FaceTecSessionStatus } from "../../../../core-sdk/FaceTecSDK.js/FaceTecPublicApi";
export declare class FaceTecStatusEnumFriendlyText {
    static descriptionForSessionStatus(enumValue: FaceTecSessionStatus): string;
    /** Gets a friendly string for representing the status of the SDK */
    static descriptionForFaceTecSDKStatus(enumValue: FaceTecSDKStatus): string;
    /**
     * Gets a friendly string to describe the result of FaceTec Browser SDK ID Scan.
     */
    static descriptionForFaceTecIDScanStatus(enumValue: FaceTecIDScanStatus): string;
}
