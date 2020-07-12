import Users from '../schema';

class User {
    async findOne(selector = {}, options = {}) {
        const { skip, limit, sort, fields } = options
        return Users
            .findOne(selector)
            .select(fields)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .lean();
    }

    async find(selectors = {}, options = {}) {
        const { limit, skip, sort, fields } = options;
        return Users
            .find(selectors)
            .select(fields)
            .sort(sort)
            .skip(skip)
            .limit(limit)
            .lean();
    }

    async count(selector = {}) {
        return Users.countDocuments(selector);
    }

    async create(params) {
        return Users.create(params);
    }

    async  update(_id, newParams, options = {}) {
        return Users.findByIdAndUpdate(_id, newParams, {
            new: true,
            runValidators: true,
        });
    }

    async delete(_id) {
        return Users.deleteOne({ _id });
    }
}

export default new User();
