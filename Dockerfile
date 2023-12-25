FROM node:18-alpine

WORKDIR /app

# Copy only the necessary files for dependency installation
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire application code
COPY . .

# Build the application for production
RUN npm run build && npm prune --production

# Command to run the application
CMD ["node", "build/index.js"]

