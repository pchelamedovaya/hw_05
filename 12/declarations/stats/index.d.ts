declare module 'stats' {
    type Comparator<Type> = (a: Type, b: Type) => number;
    type OneIndex = <T>(input: T[], comparator: Comparator<T>) => number;
    type OneElement = <T>(input: T[], comparator: Comparator<T>) => T | null;

    export const getMaxIndex: OneIndex;
    export const getMaxElement: OneElement;
    export const getMinIndex: OneIndex;
    export const getMinElement: OneElement;
    export const getMedianIndex: OneIndex;
    export const getMedianElement: OneElement;
}
