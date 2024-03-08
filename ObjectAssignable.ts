export abstract class ObjectAssignable implements IObjectAssignable {
    // Assigns the values of the first layer of properties in the input object to "this"
    assignFromObject(source: Record<string, never>) {
        Object.keys(this).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                (this as never)[key] = source[key];
            }
        });
    }
}

export interface IObjectAssignable {
    assignFromObject(source: Record<string, never>): void;
}
