# Hey Guys!
Welcome to my project repository, this project is actually a task given to me for an evaluation and in return it is a very good learning step for me as well so I put my all into this app and hope you guys like it.

I am open to any feedback, additional ideas.

So let's go ahead and let me give you a brief overview about it.

#  React-vite User Appointment Management System
I have deployed the app here, feel free to check it out: https://hiring-test-task-rose.vercel.app

If the link dosn't work for some reason then shoot me an email which I will link at the end of this document.




# User Appointment Management System

This is a web application that allows users to sign in and manage their appointments. The application uses a token-based authentication system with automatic token refresh to ensure user data security and access.

## How It Works

1. **Sign In**: Users can sign in using their credentials through a user-friendly form. Upon successful sign-in, a refresh token is generated and saved in the user's browser.

2. **Appointment Data**: After signing in, users can view their appointments. The appointment data is stored securely in the user's token to ensure data privacy.

3. **Appointment Page**: Users are then redirected to the appointment page, where they can view their scheduled appointments in a calendar format.

4. **Token Expiry**: To enhance security, the access token is valid for a limited time, typically 30sec. However, the application uses a refresh token mechanism to automatically generate a new access token, ensuring uninterrupted access as long as the user is active.

## Features

- User-friendly sign-in form.
- Secure token-based authentication.
- Automatic token refresh.
- Appointment management with calendar view.
- Data stored in browser local storage.
- Token validity for unlimited time.
- User-friendly and responsive design.


#  What Tools I Used?
React.js: I used React as the main tool for development of this project, its created using Vite which helps a great deal in the build processand is light-weight and easy to get started with on a project of this level.


CSS Modules: The main styling tool used was good old CSS but with a twist because it keeps your Styling scoped to the component you care using it it which is way better than to have overlapping styles especialy when you build your app


#  How can I set it up?
You can just clone it by copying the git command below:

git clone https://github.com/aneeqgulzar/react-vite-appointments
or just download the zip file, extranct it and open the project folder with your IDE then proceed to the next step.

When your project is cloned you can open it up using your IDE and run this command in your terminal which will install all the required dependencies

npm install or npm i

#  How to Run it?
After the dependencies are installed you can go ahead and run it using the command below:

npm run dev
After doing its thing, it should open up a new browser window, otherwise if you check your terminal (VSCode) it should give you the address to go to in my case it was localhost:5173

## Dependencies

- `React Roter Dom`
- `react axios library`
- `react-big-calendar ` for appointment calendar.

Bonus:
In case you wish to bundle the project, it is just as simple as setting it up, no Webpack, no Parcel,no configuration needed just use the following command when ready.

npm run build
Once its done building, it will create a dist in you project directory which will contain your bundled code all in one file ready for deployment.

That's it you're good to go


#  What's missing?
I tried to add the feature to persist the user inputs on page reloads but that is still a work in progress, otherwise it should work as expected I am open to feedback and or any questions.

Contact
Aneeq Gulzar
Email : aneeqgulzaronine@gmail.com







