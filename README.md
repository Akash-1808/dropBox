# Droply - Cloud File Storage Platform

A modern, secure cloud file storage platform built with Next.js, featuring user authentication, file management, and real-time uploads.

## 🚀 Features

- **User Authentication**: Secure sign-up/sign-in with Clerk
- **File Upload**: Drag & drop image uploads with progress tracking
- **Folder Management**: Create and organize files in custom folders
- **File Operations**: Star, trash, restore, and permanently delete files
- **Image Optimization**: Powered by ImageKit for fast loading and transformations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with HeroUI components and Tailwind CSS
- **Database**: PostgreSQL with Drizzle ORM for reliable data management

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, HeroUI Components
- **Authentication**: Clerk
- **Database**: PostgreSQL with Drizzle ORM
- **File Storage**: ImageKit
- **Icons**: Lucide React
- **Date Handling**: date-fns
- **HTTP Client**: Axios

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js 18+ installed
- PostgreSQL database
- Clerk account for authentication
- ImageKit account for file storage

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd drop-box
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="your-postgresql-connection-string"
   
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
   CLERK_SECRET_KEY="your-clerk-secret-key"
   NEXT_PUBLIC_CLERK_SIGN_IN_URL="/sign-in"
   NEXT_PUBLIC_CLERK_SIGN_UP_URL="/sign-up"
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL="/dashboard"
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL="/dashboard"
   
   # ImageKit
   NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY="your-imagekit-public-key"
   NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY="your-imagekit-private-key"
   NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT="your-imagekit-url-endpoint"
   ```

4. **Set up the database**
   ```bash
   # Generate database migrations
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📚 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality
- `npm run db:push` - Push database schema changes
- `npm run db:studio` - Open Drizzle Studio for database management
- `npm run db:generate` - Generate database migrations
- `npm run db:migrate` - Run database migrations

## 🏗️ Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── files/         # File management endpoints
│   │   └── folders/       # Folder management endpoints
│   ├── dashboard/         # Dashboard page
│   ├── sign-in/          # Authentication pages
│   ├── sign-up/
│   └── layout.tsx        # Root layout
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── FileList.tsx      # File listing component
│   ├── FolderUploadForm.tsx # Upload interface
│   └── NavBar.tsx        # Navigation component
├── lib/                  # Utilities and configurations
│   └── db/               # Database configuration
├── schemas/              # Form validation schemas
└── styles/               # Global styles
```

## 🔐 Authentication

This project uses Clerk for authentication, providing:
- Email/password authentication
- Session management
- Protected routes
- User profile management

## 💾 Database Schema

The application uses a PostgreSQL database with the following main tables:
- **users**: User information (managed by Clerk)
- **files**: File and folder metadata including paths, sizes, and relationships

## 🖼️ File Management

### Supported File Types
- Images: JPG, PNG, GIF, WebP
- Documents: PDF

### File Operations
- **Upload**: Drag & drop or click to upload
- **Organize**: Create folders and move files
- **Star**: Mark important files
- **Trash**: Soft delete with recovery option
- **Download**: Direct download with optimization
- **Preview**: Click images to view in new tab

## 🎨 UI Components

The application uses HeroUI components with a custom blue color theme:
- Modern card-based layout
- Responsive tables for file listings
- Modal dialogs for confirmations
- Toast notifications for user feedback
- Loading states and progress indicators

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in the Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your app

### Manual Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 🔧 Configuration

### ImageKit Setup
1. Create an ImageKit account
2. Get your public/private keys and URL endpoint
3. Configure transformation settings for optimal image delivery

### Database Setup
1. Set up a PostgreSQL database
2. Update the `DATABASE_URL` in your environment variables
3. Run migrations to set up the schema

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Created by Akash

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Clerk](https://clerk.dev/) for authentication services
- [ImageKit](https://imagekit.io/) for image optimization
- [HeroUI](https://heroui.com/) for beautiful UI components
- [Drizzle](https://orm.drizzle.team/) for the TypeScript ORM

---

For more information about Next.js deployment, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
