export type Type = 'string' | 'number' | 'boolean' | 'object' | 'array';
export type GetTypes<T> = {
    [P in keyof T]?: Type;
};
export interface GetAttrsOptions<T> {
    /**
     * Pick attributes to get
     */
    pick?: (keyof T)[];
    /**
     * Types of attributes
     */
    types?: GetTypes<T>;
    /**
     * Convert attribute name to camelCase
     */
    camelCase?: boolean;
    /**
     * Prop transformer
     */
    propTransformer?: (value: string) => string;
}
/**
 * @description Get attributes from HTMLElement
 * @example
 * ```html
 * <div class="element" name="Foo" age="20" first-name="Bar"></div>
 * ```
 * @example
 * ```ts
 * import { getAttrs } from 'getAttrs';
 * const element = document.createElement('.element');
 * interface ElementAttrs {
 *   name: string;
 *   age: number;
 *   // Chú ý thuộc tính snake sẽ chuyển sang camel
 *   firstName: string;
 * }
 * const attrs = getAttrs(element, {
 *   // Các kiểu dữ liệu của các trường sẽ được convert sang
 *   types: {
 *     name: 'string',
 *     age: 'number',
 *     firstName: 'string'
 *   },
 *   // Các attr sẽ được lấy
 *   pick: ['name', 'age', 'firstName']
 * });
 * ```
 */
export declare function getAttrs<T extends Record<string, any>>(el: HTMLElement | null, { pick, types, camelCase, propTransformer }?: GetAttrsOptions<T>): T;
//# sourceMappingURL=index.d.ts.map