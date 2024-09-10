/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ce0d33a5u7t2hv6")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nwsol7gq",
    "name": "title",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ce0d33a5u7t2hv6")

  // remove
  collection.schema.removeField("nwsol7gq")

  return dao.saveCollection(collection)
})
