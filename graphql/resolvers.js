const Foods = require('../models/foods');


module.exports = {

    createFood: async function ({ foodInput }, req) {
        const food = new Foods({
            title: foodInput.title,
            description: foodInput.description,
            amount: foodInput.amount
        });

        const createdFood = await food.save();
        console.log(createdFood);
        return {

            ...createdFood._doc,
            _id: createdFood._id.toString()
        }
    }
}