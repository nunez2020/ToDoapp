This is a simple app that creates a RESTful Express API. It will give users the ability to create,read,update,and delete items from a To Do list.

- In order to view all of the To Do items in this app , make an HTTP Get Reques to / api/items.Your sample response body will look something like the following.

```
[
    {
        "id": 1,
        "item": "get some eggs",
        "completed": true
    },
    {
        "id": 2,
        "item": "get some beer",
        "completed": false
    },
]

```

- To create a new to do item in this app , make an HTTP POST request to /api/items.The body of your post request should look like this. Your sample response body will look something like the following.

```
{
    "item": "the name of the thing we're including"
}

```

- Once posted a new item will return the following in the body of the response:

```
{
	"id": 3,
	"item": "the name of the thing we're launching",
	"completed": false
}
```
- In order to edit the contents of a single To Do item, make a PUT request to /api/items/:id.Your sample response body will look something like the following.

```
{
	"id": 2,
	"item": "get some beer",
	"completed": true
}
```
- In order to delet a signle item from our To Do items API, make a DELETE request to /api/itmes/:id.The item that will be deleted will be returned.our sample response body will look something like the following.





