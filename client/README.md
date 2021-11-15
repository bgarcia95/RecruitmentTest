## Project Guidelines

Review the figma designs here: https://www.figma.com/file/Dl1sA7tuIfP3vyeDzJqBgH/Persona-Clients-Screen?node-id=0%3A1

1. Create all UI elements in the Figma design:

2. Expected Behavior:

- All tabs should be functional, only one tab is designed, but the user should be able to move through tabs even if they are empty
- When a user clicks on a row entry (client) in the MY_CLIENTS_LIST view the app will open up the CLIENT_DETAILS_PAYMENTS for that client.
- Inside the CLIENT_DETAILS_PAYMENTS there are two tabs - Payments and Sessions. Both should be functional, but only one will show data - payments
- All buttons and elements will be designed even if not functional - you can print to logs the name of the button to show that it works
- The info presented in the `db.json` file is divided to two arrays - `customers` and `payments`
- `customers` are the main objects and are presented in the table on MY_CLIENTS_LIST
- `revenues` is the number to present in `Total Paid` in the row items, the rest should be clear, if not, please contact us
- `payments` are presented in the CLIENTS_DETAILS_PAYMENTS by their status. Each `payments` is attributed to a `customer` through it's `userId` property
- Android back button from CLIENT_DETAILS_PAYMENTS will lead to MY_CLIENTS_LIST
- Search Bar should search by clients name and render the list accordingly
- MY_CLIENTS_LIST list should be ordered by revenues top to bottom, but if a client was selected, he should be at the top of the list. If another client is selected then he will take top position, the first client second position and the rest of the list ordered by revenues

3. Server - in order to run the server first run `npm install` and then `json-server --watch db.json`. there are two endpoints: `/customers` and `/payments` for each one you query a single entry by id like so `/customer/1` or using query params for other types of filtering like so `/payments?userId=1234&status=open`. For more information about working with json-server read here: https://www.npmjs.com/package/json-server

# Recruitment Test App

# Basic usage

## 1. Server Setup

### Installation

```cmd
npm install -g json-server
```

Now on your terminal go to the `server` folder and run the following command:

```cmd
json-server --watch db.json
```

## 2. Client Setup

### Install dependencies

On the `client` folder run the following command:

```cmd
npm install
# or
yarn
```

- For iOS you will also have to do the following:

```cmd
cd ios && pod install && cd ..
```

### Run ios

```cmd
npm run ios
# or
yarn run ios
```

### Run android

```cmd
npm run android
# or
yarn run android
```

That's it, enjoy!
