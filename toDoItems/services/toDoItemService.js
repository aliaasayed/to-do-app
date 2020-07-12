import ToDoItems from '../model';

class ToDoItemService {
    async getAllItems(user, params) {
        const query = {
            userId: user._id
        }
        const options = {
            sort: {
                craetedAt: -1
            }
        }

        if (params.description)
            query.description = { $regex: `${params.description}`, $options: 'i' }
        return ToDoItems.find(query, options);
    }

    async getItem(user, id) {
        const query = {
            _id: id,
            userId: user._id
        }
        return ToDoItems.findOne(query);
    }

    async createItem(user, params) {
        params.userId = user._id;
        params.state = 'Active';
        return ToDoItems.create(params);
    }

    async updateItem(user, id, params) {
        const query = {
            _id: id,
            userId: user._id
        }
        return ToDoItems.update(query,params);

    }

    async deleteItem() {

    }
}

export default new ToDoItemService();
