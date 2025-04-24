# Base Image
FROM node:22-alpine3.20 AS development

# Set Working Directory
WORKDIR /app

# Copy package files to the working directory
COPY package*.json .

# Copy tsconfig files to working directory
COPY tsconfig*.json .

# install dependencies
RUN npm install

# Copy application code first dot is source, second is destination, because we don't want to copy node modules we create .dockerignore
COPY . .

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "dev"]