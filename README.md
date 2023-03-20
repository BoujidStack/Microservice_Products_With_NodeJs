# Microservice_Products_With_NodeJs

MERN app for managing product information using a microservices architecture. It's built with React, Express, and MongoDB and allows users to add, edit, and delete products with ease with postman.

#### Link Of The App : 👉👉 https://plum-naughty-angelfish.cyclic.app/ 👈👈


# How to use it :


##### 1- First Connect To Your Database Mongodb.

##### 2- Modify The "Keys.js" File To Your New MongoURI. 



```bash
  module.exports ={
    mongoURI: 'mongodb+srv://productDatabase:nMpJqkkPT9yNu6dO@testcluster.nmeixv1.mongodb.net/?retryWrites=true&w=majority'
}
```





### Clone the project

```bash
  git clone https://github.com/BoujidStack/Microservice_Products_With_NodeJs.git
```

### Go to the project directory

```bash
  cd app
```

### Build The Image

```bash
  docker build --no-cache -t productapp .
```

### Run The Container

```bash
   docker run -p 5000:5000 productapp     
```

## Open http://localhost:5000 to view it in the browser. Congratulation🥳🎊🎉 The App Running Perfectly. 


![logo](https://github.com/BoujidStack/Microservice_Products_With_NodeJs/blob/main/Demo-Products-Gif.gif)



# Notices : 

1- If you want to `Add`, `Delete`, `Update`, or `Get` Data, You gonna use `PostMan`. 

  #### - Usign This Requests URL :  
Get : http://localhost:5000/items

Post : http://localhost:5000/items (POST THE ITEM WITH FORM-DATA)

Delete: http://localhost:5000/items/6406e8c052e44f0b28b85282

Update : http://localhost:5000/items/6406e8c052e44f0b28b85282

NOTE! : THIS ID JUST EXAMPLE => 6406e8c052e44f0b28b85282



2- If you change something on the code of the `ReactJs`, after that you have to run : `"npm run build"` in your React.js app directory to rebuild the app.

## Copyright :

(C) [BoujidStack] [2023]. All rights reserved.
