abstract class Model<T> {
    protected attributes: T;

    protected constructor(
        attributes: T,
    ) {
        this.attributes = { ...this.getDefaults(), ...attributes };
    }

    abstract getAttributes(): T;

    protected abstract getDefaults(): T;
}

export default Model;
