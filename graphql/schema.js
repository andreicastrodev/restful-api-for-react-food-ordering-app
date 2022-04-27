const { buildSchema } = require('graphql');



module.exports = buildSchema(
    `
    type FoodItem{
        _id: ID!
        title: String!
        description: String!
        amount: String!
    }

    type FoodData{
        foods: [FoodItem!]
    }


    input FoodInputData{
        title: String!
        description: String!
        amount: String!
    }



    type RootQuery{
        foods: FoodData!
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