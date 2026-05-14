# Todo List Angular

A simple and styled todo-list application built with Angular. The app lets users add todos, delete todos, and keep tasks saved locally in the browser using `localStorage`.

## Features

- Add todos with a title and description
- Delete todos from the list
- Serial numbers are assigned from `1` to `100`
- Todos are saved in browser `localStorage`
- Empty-state message when no todos are available
- Styled responsive UI with Angular components and Bootstrap
- SSR-safe `localStorage` handling

## Tech Stack

- Angular 21
- TypeScript
- Bootstrap
- HTML/CSS
- Browser `localStorage`

## Project Structure

```text
src/app/
  Todo.ts
  app.html
  app.ts
  mycomponent/
    add-todo/
    todos/
    todos-items/
```

## Getting Started

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run start
```

Open the app in your browser:

```text
http://127.0.0.1:4200
```

## Build

Create a production build:

```bash
npm run build
```

The build output is generated in:

```text
dist/tudo-list
```

## Usage

1. Enter a todo title.
2. Enter a todo description.
3. Click `Add Todo`.
4. Click `Delete` to remove a todo.

Todos remain saved in the browser until local storage is cleared.

## Author

Shreyash
