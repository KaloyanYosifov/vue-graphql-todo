abstract class Model {
    static table = '';

    static getTable(): string {
        return Model.table;
    }
}

export default Model;
