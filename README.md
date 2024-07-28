### CarPark Project

CarPark is a web application designed for car rental services in Ukraine. This application allows users to browse through a catalog of available vehicles, view details, and mark their favorite cars. The application is built using React and Redux, and it leverages `redux-persist` for state persistence, ensuring that user preferences are retained across sessions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [State Management](#state-management)
- [Technologies and Libraries](#technologies-and-libraries)

## Features

- **Browse Catalog**: View a wide selection of vehicles available for rent.
- **Filter Vehicles**: Filter vehicles by brand, price, mileage, and other criteria.
- **Favorite Cars**: Mark cars as favorites and view them in a dedicated section.
- **Detailed View**: See detailed information about each vehicle.
- **Persistent State**: User preferences and state are retained across sessions.
- **Language Switch**: Switch the website language to English or Ukrainian.

## Installation

1. **Clone the repository:**

   ` bash git clone https://github.com/hardi-ex/CarPark.git cd CarPark`

2. **Install dependencies:**

`npm install`

3. **Start the development server:**

`npm start`

## Usage

Navigate to the address to access the application.
Browse the catalog of cars, filter by various criteria, and mark cars as favorites.
Click on a car to view detailed information.
Use the navigation menu to switch between Home, Catalog, and Favorites.

## Project Structure

- src/

 - components/

Advert/

AdvertList/

AnimatedFab/

Catalog/

CustomSelect/

Favorites/

Home/

Layout/

Loader/

AdvertModal/

Navigation/

SearchBox/

- data/

makes.json

- pages/

CatalogPage/

FavoritesPage/

HomePage/

- redux/

catalog/

favorites/

filters/

images/

store.js

- services/

api.js

- App.jsx
- index.css
- main.jsx
- i18n.js

## Components

# Advert

Displays individual car information, including an image and details. Allows users to open a modal for more information.

# AdvertList

Lists all adverts and handles opening of modals for detailed views.

# AnimatedFab

Provides a floating action button that allows users to mark cars as favorites.

# Catalog

Displays the car catalog with filtering options.

# CustomSelect

Provides a dropdown menu for filtering the car catalog.

# Favorites

Shows the user's favorite cars. Includes a loader and a message when no favorites are available.

# Home

Landing page with promotional content and links to the catalog.

# Layout

Defines the main layout, including navigation.

# Loader

Displays a loading spinner.

# AdvertModal

Displays detailed information about a selected car in a modal.

# Navigation

Handles navigation between Home, Catalog, and Favorites pages.

# SearchBox

Provides filtering options for the car catalog.

## State Management

State management is handled using Redux. The state is divided into slices:

- catalog: Manages the car catalog data.
- favorites: Manages the user's favorite cars.
- filters: Manages the filter criteria for the car catalog.
- images: Manages the images of the cars.

redux-persist is used to ensure that the state is persisted across sessions, so user preferences and favorites are retained even after refreshing the page.

## Technologies and Libraries

The project utilizes the following technologies and libraries:

- React: A JavaScript library for building user interfaces.
- Redux: A predictable state container for JavaScript apps.
- redux-persist: Persist and rehydrate a Redux store.
- react-redux: Official React bindings for Redux.
- react-router-dom: DOM bindings for React Router.
- react-i18next: Internationalization framework for React.
- react-lazy-load-image-component: Lazy load images in React.
- framer-motion: A library for creating animations in React.
- @mui/material: Material-UI components for React.
- axios: Promise-based HTTP client for the browser and node.js.
- formik: Build forms in React, without the tears.
- react-select: A flexible and beautiful Select Input control for React.
- react-hot-toast: Smoking hot notifications for React.
- react-modal: Accessible modal dialog component for React.

## Thank you for your attention!

I hope you find CarPark useful and convenient.
