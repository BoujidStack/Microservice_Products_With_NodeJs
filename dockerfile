# Specify a base image
FROM node:14-alpine

WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

RUN npm install

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Run the app when the container launches
CMD ["npm", "start"]



