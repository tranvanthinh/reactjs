### State
    Dữ liệu có thể thay đổi, luôn luôn update lại 
    setState() -> Cập nhật lại state
    handleOnChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })

### Props 
    Chuyển từ Data của Cha xuống Con
    <ChildComponent 
        name={"John"}
        age={"23"}
    />
#### Lọc phần tử trong mảng rồi xóa
    let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
    this.setState({
            arrJobs: currentJob
        })

### Sau khi hàm render gọi thì sẽ gọi vào hàm componentDidMount() 
    -> Call API

### componentDidUpdate(prevProps, prevState)
    -> 2 tham số truyền vào là State của quá khứ, 1 cái của hiện tại, 1 cái của tương lai

### Cài đặt React-Toastify
    $ npm install --save-exact react-toastify@8.0.2

### Cài đặt React-Router-Dom
    $ npm install --save-exact react-router-dom@5.3.0

### Cài đặt npm-axios
    $ npm install --save-exact axios@0.21.4
    fake request API: https://reqres.in/

### Cài đặt Redux
    $ npm install --save-exact redux@4.1.1 react-redux@7.2.5

import vào index.js
    import { Provider } from 'react-redux'
    import { createStore } from 'redux'
    import rootReducer from './reducers'



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
