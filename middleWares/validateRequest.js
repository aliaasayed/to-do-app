import _ from 'lodash'
const validateRequest = _schema => {
    const _validationOptions = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknown: true,
    };
    return (req, res, next) => {
        if (_schema) {
            const validations = ['headers', 'params', 'query', 'body'].map(key => {
                const schema = _schema[key];
                const value = req[key];

                const validate = () => (schema ? schema.validate(value, _validationOptions) : Promise.resolve({}));
                return validate().then(result => ({ [key]: result }));
            });
            return Promise.all(validations)
                .then(result => {
                    req.validated = Object.assign({}, ...result);
                    next();
                })
                .catch(validationError => {
                    const JoiError = {
                        status: 'failed',
                        error: {
                            original: validationError._object,
                            details: _.map(validationError.details, ({ message, type }) => ({
                                message: message.replace(/['"]/g, ''),
                                type,
                            })),
                        },
                    };
                    res.status(400).json(JoiError.error.details);
                });
        }
    };
};

export default validateRequest;
