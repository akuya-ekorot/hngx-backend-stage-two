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
	"email": "akuyaekorot@gmail.com",
	"country": "Kenya"
}
```

## API Specifications

The base API endpoint for the `Person` resource is `/api`.
<br />
The allowed HTTP methods on the endpoint are `GET`, `POST`, `PUT` and `DELETE`.

### `GET` Request

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
		"email": "akuyaekorot@gmail.com",
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
