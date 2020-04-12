abstract class Model<T> {
    static table = '';

    protected attributes: T;

    protected constructor(
        attributes: T,
    ) {
        this.attributes = { ...this.getDefaults(), ...attributes };
    }

    abstract getAttributes(): T;

    protected abstract getDefaults(): T;

    static getTable(): string {
        return Model.table;
    }
}

export default Model;
