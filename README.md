# Products App

Frontend React application for managing products via a [RESTful backend API](https://github.com/wichofly/restApi_nodeTs_server).
Implements full **CRUD**, route-based **loaders/actions**, inline updates with `useFetcher`, and runtime validation with **Valibot**.

## Stack

- **React + TypeScript**
- **React Router**: loaders, actions, nested routes, `useFetcher`
- **Tailwind CSS** (utility styling)
- **Axios** 
- **Valibot** (schema validation)

## Routing & Data Flow

Using React Router's data API, the application defines routes with dedicated `loaders` (for fetching data) and `actions` (for handling mutations), ensuring tight integration between the UI and the API.

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
```

## UI Structure

- **Layout**: Reusable layout with a header and `<Outlet />` for nested routes
- **Products**: Table view listing all products with inline actions
- **NewProduct/EditProduct**: Share a form component for inputs and error handling
- **ProductDetails**: Handles availability toggles, edit navigation, and deletion with confirmation prompts

## Backend Integration

This frontend is directly connected to the backend repository at: [RESTful backend API](https://github.com/wichofly/restApi_nodeTs_server)

This backend provides structured REST endpoints for managing products and responds with validated JSON payloads.

## Validation with Valibot

The application integrates **Valibot**, a runtime schema validation library that ensures all incoming and outgoing data is:

- Parsed safely into the expected structure
- Guarded against invalid types
- Strictly typed, improving type inference and error resilience

Schemas like `ProductSchema` and `ProductsSchema` are used before POST/PUT requests to verify all fields are present and correct.

## Deployment

Project deployed at Vercel: [client-product](https://client-product-six.vercel.app/)