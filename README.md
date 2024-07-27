### CarRental Project

CarRental is a web application designed for car rental services in Ukraine. This application allows users to browse through a catalog of available vehicles, view details, and mark their favorite cars. The application is built using React and Redux, and it leverages `redux-persist` for state persistence, ensuring that user preferences are retained across sessions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [State Management](#state-management)

## Features

- **Browse Catalog**: View a wide selection of vehicles available for rent.
- **Filter Vehicles**: Filter vehicles by brand, price, mileage, and other criteria.
- **Favorite Cars**: Mark cars as favorites and view them in a dedicated section.
- **Detailed View**: See detailed information about each vehicle.
- **Persistent State**: User preferences and state are retained across sessions.
- **Language Switch**: Switch the website language to English or Ukrainian.

## Installation

1. **Clone the repository:**

   ` bash git clone https://github.com/hardi-ex/CarRental.git cd CarRental`

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

src/
│
├── components/
│ ├── Advert/
│ ├── AdvertList/
│ ├── Catalog/
│ ├── CustomSelect/
│ ├── Favorites/
│ ├── Home/
│ ├── Layout/
│ ├── Loader/
│ ├── Modal/
│ ├── Navigation/
│ └── SearchBox/
│
├── data/
│ └── makes.json
│
├── pages/
│ ├── CatalogPage/
│ ├── FavoritesPage/
│ └── HomePage/
│
├── redux/
│ ├── catalog/
│ ├── favorites/
│ ├── filters/
│ ├── images/
│ └── store.js
│
├── services/
│ └── api.js
│
├── App.jsx
├── index.css
├── main.jsx
└── i18n.js

## Components

# Advert

Displays individual car information, including an image and details. Allows users to open a modal for more information.

# AdvertList

Lists all adverts and handles opening of modals for detailed views.

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

# Modal

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

## Thank you for your attention!

I hope you find CarRental useful and convenient.
