/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ce0d33a5u7t2hv6",
    "created": "2024-09-01 23:52:17.583Z",
    "updated": "2024-09-01 23:52:17.583Z",
    "name": "habitChain",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nu16culy",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "vb35w76t28dkudb",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "0bxiapw6",
        "name": "completedToday",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "xjgw2abm",
        "name": "streak",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ce0d33a5u7t2hv6");

  return dao.deleteCollection(collection);
})
