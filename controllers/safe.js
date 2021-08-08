const Safe = require('../models/Safe');
const errorHandler = require('../utils/errorHandler');

class SafeController {
    async getAll(req, res) {
        try {
            const safes = await Safe.find({user: req.user.id});
            res.status(200).json(safes);
        } catch (e) {
            errorHandler(res, e);
        }
    }

    async getById(req, res) {
        try {
            const safe = await Safe.findById(req.params.id);
            res.status(200).json(safe);
        } catch (e) {
            errorHandler(res, e);
        }
    }

    async getByCategoryId(req, res) {
        const query = {
            user: req.user.id,
            category: req.params.categoryId
        };

        // date start
        if (req.query.start) {
            query.date = {
                $gte: req.query.start
            }
        }

        // date end
        if (req.query.end) {
            if (!query.date) {
                query.date = {}
            }

            query.date['$lte'] = req.query.end;
        }

        try {
            const safes = await Safe
                .find(query)
                .sort({date: -1})
                .skip(+req.query.offset)
                .limit(+req.query.limit);

            res.status(200).json(safes);
        } catch (e) {
            errorHandler(res, e);
        }
    }

    async create(req, res) {
        try {
            const safe = await new Safe({
                name: req.body.name,
                description: req.body.description,
                category: req.body.category,
                user: req.user.id,
                email: req.body.email,
                password: req.body.password,
                additional: req.body.additional,
            }).save();

            res.status(201).json(safe);
        } catch (e) {
            errorHandler(res, e);
        }
    }

    async update(req, res) {
        const updated = {
            name: req.body.name,
            category: req.body.category,
            email: req.body.email,
            password: req.body.password,
            additional: req.body.additional,
        };

        try {
            const safe = await Safe.findOneAndUpdate(
                {_id: req.params.id},
                {$set: updated},
                {new: true}
            );

            res.status(200).json(safe);
        } catch (e) {
            errorHandler(res, e);
        }
    }

    async remove(req, res) {
        try {
            const safe = await Safe.findById(req.params.id);

            await Safe.remove({_id: safe.id});

            res.status(200).json({
                message: 'Сейф успешно удален!'
            });
        } catch (e) {
            errorHandler(res, e);
        }
    }
}

module.exports = new SafeController();
