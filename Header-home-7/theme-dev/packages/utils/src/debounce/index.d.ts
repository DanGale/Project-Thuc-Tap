/**
 * It returns a function that will call the original function after a delay
 * @param {T} fn - The function to be debounced.
 * @param [wait=300] - The amount of time to wait before calling the function.
 * @returns A function that calls the original function after a delay.
 */
export declare function debounce<T extends (...args: any[]) => any>(fn: T, wait?: number): (...args: Parameters<T>) => void;
//# sourceMappingURL=index.d.ts.map