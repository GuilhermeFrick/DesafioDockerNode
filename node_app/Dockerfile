# Use an LTS version of Node.js
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy only the package.json initially to take advantage of Docker cache
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Install wget and Dockerize
RUN apt-get update && \
    apt-get install -y wget && \
    wget https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz && \
    tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz && \
    rm dockerize-linux-amd64-v0.6.1.tar.gz && \
    apt-get remove -y wget && \
    apt-get autoremove -y && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run your app
CMD ["node", "index.js"]