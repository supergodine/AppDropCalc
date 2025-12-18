FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Install build tools for possible native modules
RUN apk add --no-cache python3 make g++ bash

# Copy package manifests and install dependencies
COPY backend/package*.json ./
RUN npm ci --silent

# Copy source code and build
COPY backend/ ./
RUN npm run build --silent

FROM node:20-alpine AS runner
WORKDIR /usr/src/app

# Create non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

ENV NODE_ENV=production
ENV PORT=3000

# Copy package manifests and install production deps
COPY backend/package*.json ./
RUN npm ci --omit=dev --silent

# Copy built artifacts and node_modules from builder to avoid rebuilding
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

RUN chown -R appuser:appgroup /usr/src/app
USER appuser

EXPOSE 3000
CMD ["node", "dist/main.js"]
