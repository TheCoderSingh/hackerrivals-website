#!/bin/bash

# Deploy script for HackerRivals website
# This script builds the project and deploys it to the GitHub Pages repository

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Build the project
echo "📦 Building the project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Copy CNAME file to dist directory to ensure custom domain works (if it exists)
if [ -f "public/CNAME" ]; then
    cp public/CNAME dist/CNAME
fi

# Navigate to dist directory
cd dist

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    git init
    git remote add origin https://github.com/HackerRivals/hackerrivals.github.io.git
fi

# Configure git (you might want to set your own credentials)
git config user.name "GitHub Actions"
git config user.email "actions@github.com"

# Add all files
git add .

# Commit with timestamp
git commit -m "Deploy website - $(date)"

# Force push to main branch (GitHub Pages will serve from main branch)
echo "🚀 Deploying to GitHub Pages..."
git push --force origin main

echo "✅ Deployment completed successfully!"
echo "🌐 Your site should be available at: https://hackerrivals.com"

# Go back to project root
cd ..