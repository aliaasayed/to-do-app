import ToDoItems from '../schema';

class ToDoItem {
    async findOne(selector = {}, options = {}) {
        const { skip, limit, sort, fields } = options
        return ToDoItems
            .findOne(selector)
            .select(fields)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .lean();
    }
    async find(selectors = {}, options = {}) {
        const { limit, skip, sort, fields } = options;
        return ToDoItems
            .find(selectors)
            .select(fields)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .lean();
    }

    async count(selector = {}) {
        return ToDoItems.countDocuments(selector);
    }

    async create(params) {
        return ToDoItems.create(params);
    }

    async update(query, newParams) {
        return ToDoItems.findByIdAndUpdate(query, newParams, {
            new: true,
            runValidators: true,
        });
    }

    async delete(_id) {
        return ToDoItems.deleteOne({ _id });
    }
}

export default new ToDoItem();
