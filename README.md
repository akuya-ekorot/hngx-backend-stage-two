# HNGIX BACKEND TASK TWO

## Task Brief

Simple REST API capable of CRUD operations on a `Person` resource. The API interfaces with a PostgreSQL database using the Subapase service.

## UML Diagram

![UML Diagram](./assets/uml.png)

## Setup Instructions

### Supabase

- Set up a [Supabase](https://supabase.com) project.
- Copy the project url and the public anon key under the API tab in the project settings.

### Environment Variables

- Copy the .env.example file and name it .env
- Add the Supabase project url to the variable `SB_URL` and the public anon key to the `SB_KEY` variable.
- Optional: You can set up an optional `PORT`.

### Install Dependencies

- Use your preferred package manager to install dependancies. e.g

```bash
pnpm i
```

or

```bash
npm i
```

or

```bash
yarn
```

### Run App

- To run the app, run the `start` script. e.g

```bash
pnpm start
```

or

```bash
npm start
```

or

```bash
yarn start
```

For documentation on how to use the API refer to the [documentation](./DOCUMENTATION.md)

copyright (c) 2021 Akuya Ekorot
