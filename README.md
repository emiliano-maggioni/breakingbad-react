# breakingbad-react
A ReactJS exercise about Breaking Bad done with ReactJS, Typescript, Material UI, SASS and API Rest.<br />It's Mobile first, and uses Breaking Bad api.

## Project explanation
This project contains:<br />
- /public folder (where i've put images and other important files).<br />
- /src/components folder (that contains all reusable components).<br />
- /src/routes folder (where you can see the routing system, made with react-router-dom).<br />
- /src/utility folder (with the API Rest hooks and axios instance, and interceptors, and the typescript types declaration).<br />
- /src/views (with all the views of the web app).<br />
- Main app files located in /src folder (like App.tsx or index.tsx), a Normalize file too.<br />
<br />
I've used css modules because i find that allows you to write traditional code (without limitation, because every class has a unique name) combined with SASS features, (view Utility.scss file, the file that i import in all css files) like variables, mixins, extends and so on. <br />
<br />
I don't have used a state management system this time because the app is very small and i haven't seen features that requires it (for example a user login session), i've used typescrip because it allow me to organize an check better what kind of type my props or data need to have and it help me to avoid more errors.<br /><br />

You can view the app in 2 different languages (Espanol and English).<br />


## Get started

To run project locally, once you have ReactJS working on your machine (NodeJS, Node Package Manager...) and you have installed the project dependencies (npm install) you can run npm start from your terminal.

```bash
npm start
```


## Version history

Version 1.0 (24-5-2022):
- Project released to User Acceptance Testing.

