import { createSchema } from './schema-builder'

const schema = createSchema(
  {
    "data": {
      "GaiaDestination": [
        {
          "name": "Erzin",
          "preposition": "kaupungissa",
          "mostPopularMonths": "tammikuuta, helmikuuta ja heinäkuuta",
        }
      ]
    }
  }
)

console.log(JSON.stringify(schema))
