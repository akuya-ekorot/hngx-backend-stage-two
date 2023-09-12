# HNGIX BACKEND TASK TWO

## Task Brief

Simple REST API capable of CRUD operations on a `Person` resource. The API interfaces with a PostgreSQL database using the Subapase service.

## Specifications for the Person Resource

The `Person` resource has the following fields, `name`, `email` and `country`.

- `name` field is a mandatory field.
- `email` and `country` fields are optional.
- All fields are `strings`.

Here's a JSON representation of the `Person` resource.

```json
{
	"id": 12,
	"created_at": "2023-09-11T12:31:20.214277+00:00",
	"name": "Akuya Ekorot",
	"email": "example@email.com",
	"country": "Kenya"
}
```

## API Specifications

The base API endpoint for the `Person` resource is `/api`.
<br />
The allowed HTTP methods on the endpoint are `GET`, `POST`, `PUT` and `DELETE`.

### Retrieve a `Person` using a `GET` Request

To perform a `GET` request, use the `/api/<user_id>` endpoint. This will retrieve a user with the specified `<user_id>`.

#### Success Response

If the user exists, a success response will look like this.

```json
{
	"code": 200,
	"message": "Person is retrieved from the datbase.",
	"data": {
		"id": 12,
		"created_at": "2023-09-11T12:31:20.214277+00:00",
		"name": "Akuya Ekorot",
		"email": "example@email.com",
		"country": "Kenya"
	}
}
```

#### Error Response

If the `Person` doesn't exist in the database, the error response will look like this.

```json
{
	"code": 500,
	"message": "Person could not be retrieved from the database",
	"error": {
		"code": "PGRST116",
		"details": "The result contains 0 rows",
		"hint": null,
		"message": "JSON object requested, multiple (or no) rows returned"
	}
}
```

### Create a new `Person` using a `POST` Request

To perform a `POST` request, use the `/api` endpoint, with a `JSON` payload in the request body. This will create a new `Person` in the database.
<br />
Here's how the `payload` should look like.

```json
{
	"name": "Akuya Ekorot",
	"email": "example@email.com",
	"country": "Kenya"
}
```

#### Successful Response

If the request is successful, the server returns a success response like so.

```json
{
	"code": 201,
	"message": "Person is added to the database",
	"data": {
		"id": 14,
		"created_at": "2023-09-12T07:02:49.858599+00:00",
		"name": "Akuya Ekorot",
		"email": "example@email.com",
		"country": "Kenya"
	}
}
```

#### Error Response

If you don't pass a required field like the name field, or pass a value that's not a string to any of the fields, you'll get an error response like this.

```json
{
	"errors": [
		{
			"type": "field",
			"msg": "Invalid value",
			"path": "name",
			"location": "body"
		},
		{
			"type": "field",
			"msg": "Name must be a valid string",
			"path": "name",
			"location": "body"
		}
	]
}
```

### Update a `Person` using a `PUT` Request

To update a `Person` resource, send a `PUT` request with a `JSON` payload to the `/api/<user_id>` endpoint. Where the `<user_id>` is the id of the `Person`.

#### Example `JSON` payload

```json
{
	"name": "Brian Akuya Ekorot"
}
```

#### Successful Request

A successful request to this endpoint returns the following response.

```json
{
	"code": 200,
	"message": "Person is updated in the database",
	"data": {
		"id": 14,
		"created_at": "2023-09-12T07:02:49.858599+00:00",
		"name": "Brian Akuya Ekorot",
		"email": "akuyaekorot@gmail.com",
		"country": "Kenya"
	}
}
```

#### Error Response

```json

```
