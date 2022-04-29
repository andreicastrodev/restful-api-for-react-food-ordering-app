const Foods = require('../models/foods');


module.exports = {

    createFood: async function ({ foodInput }, req) {
        const food = new Foods({
            title: foodInput.title,
            description: foodInput.description,
            price: foodInput.price
        });

        const createdFood = await food.save();
        console.log(createdFood);
        return {

            ...createdFood._doc,
            _id: createdFood._id.toString()
        }
    },

    getFoods: async function (args, ref) {

        const foodItems = await Foods.find();
        console.log(foodItems)
        return {
            foods: foodItems.map(el => {
                return {
                    ...el._doc,
                    _id: el._id.toString(),
                }
            })
        }
    }
}