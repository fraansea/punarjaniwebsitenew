# Punarjanii Admin Panel

A comprehensive Content Management System (CMS) for the Punarjanii Wellness & Healthcare website.

## Features

✅ **Secure Authentication** - Login system with JWT tokens
✅ **Hero Section Management** - Update homepage hero content
✅ **Statistics Management** - Update stats and descriptions
✅ **Services CRUD** - Add, edit, and delete services
✅ **Doctors Management** - Manage medical professionals
✅ **Reviews Management** - Add and manage client testimonials
✅ **FAQs Management** - Maintain frequently asked questions
✅ **Contact Information** - Update phone and email

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)

### Setup Steps

1. **Install Dependencies**

```bash
npm install
```

2. **Start the Server**

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

3. **Access the Admin Panel**

- Server will run on: `http://localhost:3001`
- Admin Panel: `http://localhost:3001/admin-login.html`
- Main Website: `http://localhost:3001/index.html`

## Default Credentials

```
Username: admin
Password: admin123
```

⚠️ **Important**: Change these credentials in production!

## File Structure

```
├── server.js              # Backend API server
├── package.json           # Dependencies
├── data.json             # Content database (auto-generated)
├── admin-login.html      # Admin login page
├── admin.html            # Admin dashboard
├── admin-styles.css      # Admin panel styles
├── admin-script.js       # Admin panel functionality
├── index.html            # Main website
└── styles.css            # Main website styles
```

## API Endpoints

### Authentication
- `POST /api/login` - User login

### Content Management
- `GET /api/content` - Get all content
- `PUT /api/hero` - Update hero section
- `PUT /api/stats` - Update statistics

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create new service
- `PUT /api/services/:id` - Update service
- `DELETE /api/services/:id` - Delete service

### Doctors
- `GET /api/doctors` - Get all doctors
- `POST /api/doctors` - Add new doctor
- `PUT /api/doctors/:id` - Update doctor
- `DELETE /api/doctors/:id` - Delete doctor

### Reviews
- `GET /api/reviews` - Get all reviews
- `POST /api/reviews` - Add new review
- `PUT /api/reviews/:id` - Update review
- `DELETE /api/reviews/:id` - Delete review

### FAQs
- `GET /api/faqs` - Get all FAQs
- `POST /api/faqs` - Add new FAQ
- `PUT /api/faqs/:id` - Update FAQ
- `DELETE /api/faqs/:id` - Delete FAQ

### Contact
- `PUT /api/contact` - Update contact information

### File Upload
- `POST /api/upload` - Upload images

## Usage Guide

### 1. Login

Navigate to `http://localhost:3001/admin-login.html` and enter your credentials.

### 2. Managing Content

#### Hero Section
- Update the main heading, description, and CTA button texts
- Changes reflect immediately on the homepage

#### Statistics
- Update the three main statistics (value, suffix, label)
- Modify the stats description text

#### Services
- **Add Service**: Click "+ Add Service" button
- **Edit Service**: Click "Edit" on any service card
- **Delete Service**: Click "Delete" on any service card

#### Doctors
- **Add Doctor**: Click "+ Add Doctor" button
- **Edit Doctor**: Click "Edit" on any doctor card
- **Delete Doctor**: Click "Delete" on any doctor card

#### Reviews
- **Add Review**: Click "+ Add Review" button
- **Edit Review**: Click "Edit" on any review card
- **Delete Review**: Click "Delete" on any review card

#### FAQs
- **Add FAQ**: Click "+ Add FAQ" button
- **Edit FAQ**: Click "Edit" on any FAQ item
- **Delete FAQ**: Click "Delete" on any FAQ item

#### Contact Information
- Update phone number and email address
- These appear in the footer of the main website

### 3. Logout

Click the "Logout" button in the sidebar footer to end your session.

## Security Notes

1. **Change Default Password**: The default credentials should be changed immediately in production
2. **JWT Secret**: Update the `JWT_SECRET` in `server.js` to a strong, unique value
3. **HTTPS**: Always use HTTPS in production
4. **Environment Variables**: Store sensitive data in environment variables
5. **Database**: Consider migrating from JSON file storage to a proper database (MongoDB, PostgreSQL, etc.) for production

## Upgrading to Database

The current system uses a JSON file for data storage. To upgrade to a database:

1. Install database driver (e.g., `npm install mongoose` for MongoDB)
2. Replace file read/write operations in `server.js` with database queries
3. Update the data model structure as needed

## Troubleshooting

### Server won't start
- Check if port 3001 is already in use
- Verify Node.js is installed: `node --version`
- Ensure all dependencies are installed: `npm install`

### Can't login
- Verify server is running
- Check browser console for errors
- Ensure you're using the correct credentials

### Changes not appearing
- Clear browser cache
- Refresh the page
- Check server console for errors

## Support

For issues or questions, please check the following:
- Review this README
- Check server console logs
- Verify network requests in browser DevTools

## Future Enhancements

- [ ] Image upload functionality
- [ ] User management (add/remove admin users)
- [ ] Change password feature
- [ ] Activity logs
- [ ] Database integration
- [ ] Email notifications
- [ ] Backup/restore functionality
- [ ] Multi-language support

## License

Proprietary - All rights reserved

---

Built with ❤️ for Punarjanii Wellness & Healthcare
