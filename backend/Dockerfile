FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Install build tools for optional native modules
RUN apk add --no-cache python3 make g++ bash

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source and build
COPY . .
RUN npm run build --silent

# Remove devDependencies to shrink image (optional)
RUN npm prune --production --silent || true

FROM node:18-alpine AS runner
WORKDIR /usr/src/app

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

ENV NODE_ENV=production
ENV PORT=10000

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev --silent

# Copy build artifacts
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

RUN chown -R appuser:appgroup /usr/src/app
USER appuser

EXPOSE 10000
CMD ["node", "dist/main.js"]
