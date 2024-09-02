/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vb35w76t28dkudb")

  collection.name = "habit"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vb35w76t28dkudb")

  collection.name = "Habit"

  return dao.saveCollection(collection)
})
