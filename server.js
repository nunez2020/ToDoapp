// server.js

/**
 * Required External Modules
 */
const express = require("express");
const path = require("path");
/**
 * App Variables
 */
const app = express();
const port = process.env.PORT || "8000";
/**
 *  App Configuration
 */
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));
/**
 * Routes Definitions
 */
app.get("/",(req,res, ) => {
    res.status(200).send("TO DO App"); 
});

/**
 * Route will retun all fo the existing to do items 
 */

 const items = [];
let id = 0;

app.get('/api/items', (req, res, next) => {
    res.json(items);
});

app.post("/api/items", (req, res, next) => {
    if (req.body.item) {
      id = id + 1;
      const newItem = {
        id: id,
        item: req.body.item,
        completed: false,
      };
      items.push(newItem);
      res.json(newItem);
    } else {
      res.status(400).json({ error: "item needs a description" });
    }
  });
// edit item or complere item.

app.patch("/api/items/:id", (req, res, next) => {
  // get the parameter ID
  const itemID = Number(req.params.id);

  // we'll have to go through the items array
  // and find the particular item with the ID
  // we are looking for.

  /**
   * [
   *  {
   *    id: 1, item: "bread", completed: false;
   *  }, {
   *    id: 2, item: "milk", completed: false;
   *  }, {
   *    id: 3, items: "cheese", completed: false;
   *  }
   * ]
   */
  const itemToComplete = items.find((item) => item.id === itemID);

  // If we find the item with the ID
  if (itemToComplete) {
    // We'll need to edit the item with the
    // thing that was in the request body
    const indexOfItemToComplete = items.indexOf(itemToComplete);

    // This will toggle the complete checkbox. In a real world
    // I should probably copy over the values of item to this new value.
    itemToComplete.completed = !itemToComplete.completed;

    // We'll take the array of items we have, and SPLICE the new
    // item in place of the old one.
    items.splice(indexOfItemToComplete, 1, itemToComplete);

    // return the json of the item to complete
    res.json(itemToComplete);
  } else {
    // If not, return a HTTP 404 not found.
    res.status(404).json({ error: "item ID not found" });
  }
});
// this route will delete the item
app.delete("/api/items/:id", (req, res, next) => {
  const itemID = Number(req.params.id);
  const itemsToDelete = items.find((item) => item.id === itemID);
  if (itemsToDelete) {
    const indexOfItemToDelete = items.indexOf(itemsToDelete);
    items.splice(indexOfItemToDelete, 1);
    res.json(itemToDelete);
  } else {
    res.status(404).json({ error: "item ID not found" });
  }
});
/**
 * 
 * Server Activation
 */
app.listen(port,() => {
    console.log (`Listening to request on http://localhost:${port}`);
});



