## 0.5.0 (2024-11-22)

### Feat

- implement project select in AddTaskForm
- handle errors for AddTaskForm
- implement "Add tag" functionality while adding new task
- implement createTask
- implement pagination for tasks
- implement UI TaskDetail sidebar
- list existing tasks on Tasks page
- implement initial layout of Tasks page

### Fix

- TypeScript error for tags prop on Tags component
- update tag suggestions if new tag is created
- only trigger tag creation if new tag is selected
- remove unused onError from RegistrationForm

## 0.4.0 (2024-11-20)

### Feat

- mark active MenuItem with border

### Fix

- incorrect Button props in ActivateUser.tsx

## 0.3.1 (2024-11-19)

### Fix

- scrolling issue on pages

## 0.3.0 (2024-11-18)

### Feat

- implement logout functionality
- add AppLayout and initial placeholder pages
- add user to AuthStore
- store access token in AuthState after login
- create AuthState with zustand store
- handle form submission for Login form
- update FormFeedback component to handle non-field errors
- add UI for Login page
- update RegistrationForm to include Button to navigate to Login
- add ActivateUser page
- add custom Button component using custom colors
- add PageNotFound page

### Fix

- custom Button component overwrites default type attribute

### Refactor

- update CSS to only apply center on Login and Register pages

## 0.2.0 (2024-11-16)

### Feat

- add RegistrationSuccess page
- update HTML page title
- implement error handling on RegistrationForm
- add errorValidationState helper function
- add FormFeedback component
- add useRegister hook
- create axiosInstance
- add QueryClientProvider
- register fields on RegistrationForm
- design Register page
- add default page-wide CSS
- add Login and Register page placeholders

### Refactor

- define CSS variables for main colors

## 0.1.0 (2024-11-15)

### Feat

- create React project with Vite
