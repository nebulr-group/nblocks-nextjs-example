# syntax=docker/dockerfile:1

# Supports ARM + x86-64
# 'as base' allows us to refer to this build stage in other build stages
FROM node:18-buster as base
SHELL ["/bin/bash", "-c"]

# Set the root working dir inside the container
# Use relative paths based on the working dir
WORKDIR "/app"

# Makes use of docker caching for faster re-builds.
COPY package.json ./

# Refering to base, and adding new build stage labeled 'dev'
FROM base as dev
# Installing prod and dev dependencies
RUN npm install
# Copy rest of the projects source code to container env
COPY . .

# Refering to base, and adding new build stage label 'test'
FROM base as test
# Installing prod and dev dependencies
RUN npm install
# Copy rest of the projects source code to container env
COPY . .

# Refering to base, and adding new build stage label 'prod'
FROM base as prod
# Installing prod dependencies
RUN npm install --production
# Copy rest of the projects source code to container env
COPY . .