### Integrating React Native into the Yaku Project

The Yaku project leverages React Native to develop a cross-platform mobile application, thus enabling a seamless user
experience on both iOS and Android. React Native simplifies the creation of responsive user interfaces and access to an
extensive library of components, which is crucial for providing features such as food product search, display of
nutritional information, and tracking of dietary intake. The use of React Native supports our goal of making the Yaku
application accessible to a wide audience by harnessing its ability to rapidly develop high-performing applications for
various platforms.

### Used API

To retrieve information about food products, we utilize the OpenFoodTracks API. This API grants us access to a vast
database containing detailed information about food products, including their nutritional composition, ingredients,
labels, and nutritional values.

Example request to retrieve information about a specific product by its barcode:

```bash
curl -X GET "https://fr.openfoodfacts.org/api/v0/produit/[barcode].json"
```

For further information about food products, we use the OpenFoodTracks API. This API provides us access to a
comprehensive database containing detailed information about food products, including their nutritional composition,
ingredients, labels, and nutritional values. To explore the API documentation and view usage examples,
visit [OpenFoodFacts](https://fr.openfoodfacts.org).

### Key Features

- Search for food products by name, brand, or category.
- Display detailed nutritional information for each product.
- Track daily and historical dietary intake.
- Receive suggestions for similar or alternative products.
- Create shopping lists and track food purchases.
- Technologies Used

### Technologies Used

- The Yaku project is primarily developed using modern web technologies such as React Native.

For more information about the project and its development, feel free to check out our GitHub repository and contribute
if you're interested!

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the
following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
