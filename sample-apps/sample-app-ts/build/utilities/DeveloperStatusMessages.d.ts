import type { FaceTecIDScanResult, FaceTecSessionResult } from "../../../../core-sdk/FaceTecSDK.js/FaceTecPublicApi";
export declare class DeveloperStatusMessages {
    static LOG_PREFIX: string;
    static displayMessage: (message: string) => void;
    static logMessage: (message: string) => void;
    static logAndDisplayMessage: (message: string) => void;
    static logInitializeResult: () => void;
    static logScanOncompleteResult: (sessionResult: FaceTecSessionResult | null, idScanResult: FaceTecIDScanResult | null) => void;
}
