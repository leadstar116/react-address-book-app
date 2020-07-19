# React Address Book App
This is a fictional address book app, where you can search for users addresses and personal information. The app would display a list of users for the end user to browse and get personal information for a selected user, where you can also select via a settings page which nationalities you’re interested in.
Pull users information for the Users API
- please read the documentation on the https://randomuser.me, and get users data from there.

## Used Stacks:
- React
- Redux
- Redux Thunk
- Webpack
- Unit Testing

## Main Functionalities of App

### Home page (browse with search)
- The page would be located on the root url ​`/` - display the users in a grid.
- Show each user's data
- The user's grid would automatically load more users as you scroll down, in batches of 50 users, the max length of the catalogue is 1000.
- When the request to load more users (next batch of 50) is done, display an animated "loading..." message while the request is taking place.
- To improve the end user's experience, we would always preemptively fetch the next batch of users in advance, making use of idle time. This does not mean that we would show all the users right away, only once the end user has scrolled down the 50 batch of users.
- When the end user reaches the end and there are no more users to display, show the message "end of users catalog".

### Details modal
- When the end user clicks on the specific user in the row (can also be a button or an icon in a row), a modal with additional info should open.
- Show more details about the user.
- The modal would be closable so that the end user can browse/search on.

### Search
- Display a user search on top of the app.
- Search field should be case insensitive and should filter the results by `name.first + name.last`.
- When the end user scrolls down, the search would follow the screen so that it is always
visible.
- Search would filter all visible users and show only those which match the search string.

### Settings page
- Created a different URL named `/settings`, where we will have our settings page. - here the end user can set, from which nationalities users are fetched for browsing/searching.
Possible choices should be: CH, ES, FR, GB.
- There would be a button or a link so that the end user can access the settings page and also go back to the search/browse page.
- Settings would affect the home page and fetch the users based on selected nationality. 
- When setting a new nationality, it would not cause the reloading of the page.


## Screenshots
You can check video here: https://www.screencast.com/t/mq55Elc3u
[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://www.screencast.com/t/mq55Elc3u)

# Project Run
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br />
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
