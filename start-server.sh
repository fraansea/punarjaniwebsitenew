#!/bin/bash

# Punarjanii Admin Panel Startup Script

echo "================================"
echo "  Punarjanii Admin Panel"
echo "================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Start the server
echo "🚀 Starting server..."
echo ""
echo "Server will be available at:"
echo "  → Admin Panel: http://localhost:3001/admin-login.html"
echo "  → Main Website: http://localhost:3001/index.html"
echo ""
echo "Default credentials:"
echo "  Username: admin"
echo "  Password: admin123"
echo ""
echo "Press Ctrl+C to stop the server"
echo "================================"
echo ""

node server.js
