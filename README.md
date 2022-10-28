# Tour Management System

This API application is a tour management system.


## API Reference

Main API : [https://tour-management-system-hll5.onrender.com/api/v1/](https://tour-management-system-hll5.onrender.com/api/v1/)


#### Get all tour packages

```http
 GET/tours/
 GET/user/all?max=number
```
#### Save a random user
```http
 POST/user/save
```

| Object key | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Tour Package name |
| `place_from` | `string` | **Required**. Which location from start |
| `place_to` | `string` | **Required**. Which location going |
| `duration_day` | `string` | **Required**. How many days|
| `duration_night` | `string` | **Required**. How many nights
| `price` | `number` | **Required**. Tour package price|
| `image` | `string` | **Required**.  Tour pacckage image url |

##### Example:

    {
    "name": "Mymensingh - Rangamati - Dhaka (Non AC)",
    "place_from": "Mymensingh",
    "place_to": "Rangamati",
    "duration_day": "3 days",
    "duration_night": "2 Night",
    "price": 8000,
    "image": "https://ibb.co/9TpnCxr",
}

#### Update a random user
```http
 PATCH/user/update
```

| Object key | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. user id |


##### Example:

    {
      "id": 20,
    }


#### Update multiple users
```http
 PATCH/user/bulk-update
```

Send a array on json

| Object key | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. user id |

##### Example:

    [
      {
      "id": 19,
      "name": "Jahid Hasan",
      },
      {
      "id": 20,
      "contact": "example@gmail.com",
      },
    ]


#### Delete a random user
```http
 DELETE/user/delete
```

| Object key | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `number` | **Required**. user id |


##### Example:

    {
      "id": 20,
    }

