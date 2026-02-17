# Vercel Deployment Guide

## Important Notes

### Data Persistence
⚠️ **Warning**: This app uses a JSON file (`data.json`) for data storage. In Vercel's serverless environment, file system writes are **ephemeral** and will be lost between deployments and function invocations.

**Current Limitations:**
- Admin panel changes will not persist
- File uploads will not persist
- Data resets on each deployment

### Recommended Solutions for Production

1. **Use a Database** (Recommended)
   - MongoDB Atlas
   - PostgreSQL (Vercel Postgres)
   - Vercel KV (Key-Value store)

2. **Use Vercel Blob Storage**
   - For file uploads
   - Persistent storage for images

## Deployment Steps

1. **Commit all changes to Git:**
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push
   ```

2. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect the configuration
   - Click "Deploy"

3. **Alternative: Deploy via Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

## Files Added for Vercel

- `vercel.json` - Vercel configuration
- Routes configured for API and admin panel
- Server.js modified to work as serverless function

## Environment Variables (Optional)

If you want to change settings, add these in Vercel dashboard:

- `JWT_SECRET` - Your secret key for JWT tokens
- `PORT` - Not needed for Vercel (automatically set)

## Testing Locally

The app still works locally:
```bash
npm start
```

Server runs on http://localhost:4500

## Known Issues on Vercel

1. **Data doesn't persist** - Need to implement database
2. **File uploads don't work** - Need to implement cloud storage
3. **Multiple instances** - Each serverless function may have different data

## Next Steps for Production

Consider upgrading to:
- Vercel Postgres or MongoDB for data storage
- Vercel Blob for file uploads
- Environment variables for sensitive data
