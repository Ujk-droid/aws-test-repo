# 1. Base Image
FROM node:18-alpine

# 2. Install curl for health checking
RUN apk --no-cache add curl

# 3. Set working directory
WORKDIR /app

# 4. Copy package files first (optimizes cache)
COPY package*.json ./

# 5. Install only production dependencies
RUN npm install --production

# 6. Copy the rest of the application code
COPY . .

# 7. Expose the application port
EXPOSE 3000

# 8. Health Check (Runs every 10s to ensure app is alive)
HEALTHCHECK --interval=10s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# 9. Start Command (Make sure this matches your file name!)
CMD ["node", "server.js"]