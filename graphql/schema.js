const { buildSchema } = require('graphql');



module.exports = buildSchema(
    `
    type FoodItem{
        _id: ID!
        title: String!
        description: String!
        price: String!
    }

    type FoodData{
        foods: [FoodItem!]
    }


    input FoodInputData{
        title: String!
        description: String!
        price: String!
    }



    type RootQuery{
        getFoods: FoodData!
    }
    
    
    type RootMutation{
        createFood(foodInput: FoodInputData): FoodItem!
    }
    

    schema{
        query: RootQuery
        mutation: RootMutation
    }
    `
)