# Project 3 – Zillionaire Tech: Mission Control

## Overview
Zillionaire Tech: Mission Control is a React-based task management web application. Users can create, view, update, delete, and filter tasks (“missions”). The app includes two main routes: /todos and /contact.

---

## 1) User Stories

1. As a user, I want to add a new mission so I can track tasks that need to be completed.
2. As a user, I want to mark a mission as completed so I can easily see which tasks are finished.
3. As a user, I want to remove a mission so I can delete tasks that are no longer needed.
4. As a user, I want to filter missions (all, completed, incomplete) so I can focus on specific tasks.
5. As a user, I want the contact form to update as I type so I know my information is being stored correctly.

---

## 2) Wireframes

### /todos (Mission Board View)

- Top horizontal navigation bar with links: Todos | Contact
- Main content displayed side-by-side:
  - Left panel: New Mission form (text input + submit button)
  - Right panel: Mission list
    - Filter options: All, Completed, Incomplete
    - Each mission shows:
      - Complete toggle
      - Mission text (strike-through when completed)
      - Remove button

### /contact (Contact HQ View)

- Top horizontal navigation bar
- Controlled contact form with fields:
  - First Name
  - Last Name
  - Email
  - Comments
- Submit button (no backend required)

---

## 3) State Tree

### App State (Todos + Filter)

```js
state = {
  todos: [
    {
      id: "unique-id",
      text: "Calibrate Purple Juice Stabilizer",
      completed: false,
      createdAt: 1700000000000
    }
  ],
  visibilityFilter: "all"
}
```

### Contact Form Local State

```js
contactFormState = {
  firstName: "",
  lastName: "",
  email: "",
  comments: ""
}
```
---

## 4) Component Breakdown

### Container Components
- App
- TodosPage
- ContactPage

### Presentational Components
- NavBar
- TodoForm
- FilterBar
- TodoList
- TodoItem

---

## Notes
- App uses React with Create React App
- Routes required: /todos and /contact
- Todos support create, read, update (complete), delete
- Contact form is a controlled component
- App includes a horizontal navbar and side-by-side layout

