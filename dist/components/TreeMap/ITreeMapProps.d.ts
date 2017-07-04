export interface ITreeMapProps {
    width: number;
    height: number;
    data: any;
    valueUnit?: string;
    valueFormat?: string;
    bgColorRangeLow?: string;
    bgColorRangeHigh?: string;
    disableBreadcrumb?: boolean;
    colorModel?: ColorModel;
}
export declare enum ColorModel {
    Depth = 0,
    Value = 1,
    NumberOfChildren = 2,
}
