# Products App

Frontend React application for managing products via a [RESTful backend API](https://github.com/wichofly/restApi_nodeTs_server).
Implements full **CRUD**, route-based **loaders/actions**, inline updates with `useFetcher`, and runtime validation with **Valibot**.

## Stack

- **React + TypeScript**
- **React Router**: loaders, actions, nested routes, `useFetcher`
- **Tailwind CSS** (utility styling)
- **Axios**
- **Valibot** (schema validation)
- **react-hot-toast** (toast notifications)

## Authentication & Access Control

Recent updates introduce user authentication and protected routing:

- **Login & Registration:** Users can create accounts and log in. Both flows use Valibot for schema validation and Axios for API requests.
- **Protected Routes:** Routes requiring authentication are secured; unauthenticated users are redirected to login.
- **User Session Display:** The header shows the logged-in user's name and includes a logout button.
- **Validation & Error Handling:** Authentication actions use runtime validation and provide instant feedback for errors.

**Key locations:**

- Authentication actions: `src/actions/loginAction.ts`, `src/actions/registerAction.ts`
- Validation schemas: `src/types/auth.ts`
- Routing & access control: `src/router.tsx`, `src/loaders/authLoader.ts`
- User info & logout: `src/layout/Layout.tsx`

## User Experience & Feedback

- **Toast Notifications:** Using `react-hot-toast`, users get instant feedback on key actions—adding, editing, deleting products, logging in, and logging out.
- **Layout Improvements:** The header displays user info and provides navigation between authentication and product management views. Feedback is clear and consistent.

## Routing & Data Flow

Utilizes React Router's data API for route-specific logic:

```
/                     -> Products (list)
  ├─ loader: productsLoader          (GET /api/products)
  └─ action: updateAvailabilityAction (PATCH /api/products/:id via fetcher)

 /newProduct          -> NewProduct (create)
  └─ action: newProductAction        (POST /api/products)

 /editProduct/:id     -> EditProduct (update)
  ├─ loader: editProductLoader       (GET /api/products/:id)
  └─ action: editProductAction       (PUT /api/products/:id)

 /deleteProduct/:id   -> (no element; action only)
  └─ action: deleteProductAction     (DELETE /api/products/:id)

 /login               -> Login (authentication)
 /register            -> Register (authentication)
```

## UI Structure

- **Layout:** Reusable layout with header, user info, and `<Outlet />` for nested routes
- **Products:** Table view listing all products with inline actions
- **NewProduct/EditProduct:** Shared form component for product creation/editing and error handling
- **ProductDetails:** Handles availability toggles, edit navigation, and deletion with confirmation prompts
- **Authentication Views:** Dedicated login and registration forms with navigation

## Backend Integration

This frontend is directly connected to the backend repository at: [RESTful backend API](https://github.com/wichofly/restApi_nodeTs_server)

This backend provides structured REST endpoints for managing products and responds with validated JSON payloads.

## Validation with Valibot

The application integrates **Valibot**, a runtime schema validation library, to ensure all incoming and outgoing data is:

- Parsed safely into the expected structure
- Guarded against invalid types
- Strictly typed, improving type inference and error resilience

Schemas like `ProductSchema` and `ProductsSchema` are used before POST/PUT requests to verify all fields are present and correct.

Authentication flows also validate inputs against dedicated schemas.

## Deployment

Project deployed at Vercel: [client-product](https://client-product-six.vercel.app/)

## Summary of Recent Changes

- Added authentication (login/registration) with protected routes.
- Improved user feedback with toast notifications for product and authentication actions.
- Updated layout to display current user and provide logout.
- Refactored routing for access control and new authentication views.
