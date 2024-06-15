# Use Node.js runtime as parent image
FROM node:20

# Working directory
WORKDIR /

# Copy package.json and package-lock.json files
COPY package*.json ./ 

# Install packages
RUN npm install

# Copy app code
COPY . .

# Show the port the app will run on
EXPOSE 8080

# The command to run the app
CMD ["node", "server.js"]
