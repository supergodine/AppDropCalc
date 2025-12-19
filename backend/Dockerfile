FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Install build tools for possible native modules
RUN apk add --no-cache python3 make g++ bash

# Copy package manifests and install dependencies
COPY package*.json ./
RUN npm ci --silent

# Copy source code and build (context is backend/ when deploying from backend folder)
COPY . ./
RUN npm run build --silent

FROM node:20-alpine AS runner
WORKDIR /usr/src/app

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

ENV NODE_ENV=production
ENV PORT=10000

# Copy package manifests and install production deps
COPY package*.json ./
RUN npm ci --omit=dev --silent

# Copy built artifacts and node_modules from builder to avoid rebuilding
COPY --from=builder /usr/src/app/dist ./dist
## Do NOT copy node_modules from builder: install production modules
## in the runner so native modules are built for the runtime environment.

RUN chown -R appuser:appgroup /usr/src/app
USER appuser

EXPOSE 10000
CMD ["node", "dist/main.js"]
