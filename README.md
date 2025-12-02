# Anantharaj V - Portfolio Website

A professional portfolio website showcasing my skills, experience, and projects. The portfolio includes a fully functional e-commerce application built with React, Redux Toolkit, and modern web technologies.

## Portfolio Features

- **Home Page**: Professional introduction with quick stats and tech stack overview
- **About Page**: Detailed work experience, skills, education, and certifications
- **Projects Page**: Showcase of projects including the React E-commerce App
- **Contact Page**: Contact information and social links
- **E-commerce App**: Full-featured shopping application (accessible at `/ecommerce`)

## E-commerce Features

- User registration and login with authentication
- Product listing and management
- Add to cart functionality with state management using Redux Toolkit
- Responsive design using Tailwind CSS
- Product sorting and filtering
- Shopping cart management

## Technologies Used

### Portfolio
- React.js 19
- React Router v7
- Tailwind CSS
- React Icons

### E-commerce
- React.js 19
- Redux Toolkit
- React Router 7.6
- Tailwind CSS
- Axios
- React Toastify
- Node.js & Express (backend)
- MongoDB (database)

## Live Demo

**Portfolio**: [https://anantharaj-portfolio.netlify.app/](https://anantharaj-portfolio.netlify.app/)

**E-commerce**: [https://anantharaj-portfolio.netlify.app/ecommerce](https://anantharaj-portfolio.netlify.app/ecommerce)

## Getting Started Locally

1. Clone the repository:

```bash
git clone https://github.com/ananth-rj/portfolio.git
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_backend_api_url
```

For local development, if your backend is running on `http://localhost:5000`:

```env
VITE_API_URL=http://localhost:5000
```

4. Run the app:

```bash
npm run dev
```

5. The app will run at `http://localhost:5173/`

## Project Structure

```
portfolio/
├── src/
│   ├── pages/
│   │   ├── PortfolioHome.jsx      # Portfolio home page
│   │   ├── PortfolioAbout.jsx      # About/Resume page
│   │   ├── PortfolioProjects.jsx   # Projects showcase
│   │   ├── PortfolioContact.jsx    # Contact page
│   │   ├── PortfolioLayout.jsx     # Portfolio navigation layout
│   │   ├── HomePage.jsx            # E-commerce home
│   │   ├── ProductPage.jsx         # E-commerce products
│   │   └── ...
│   ├── components/                 # Reusable components
│   ├── redux/                      # Redux store and slices
│   └── App.jsx                     # Main app router
└── public/
```

## Routes

- `/` - Portfolio Home
- `/about` - About/Resume Page
- `/projects` - Projects Showcase
- `/contact` - Contact Page
- `/ecommerce` - E-commerce Home
- `/ecommerce/products` - Product Listing
- `/ecommerce/cart` - Shopping Cart
- `/ecommerce/login` - User Login
- `/ecommerce/signup` - User Registration

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to Netlify or any static hosting service.

## Deployment

This project is configured for Netlify deployment. The `public/_redirects` file ensures proper routing for client-side routing.

## Contact

- **Email**: ananthofficemail@gmail.com
- **Phone**: +91 9488260290
- **LinkedIn**: [linkedin.com/in/ananth-reactdev](https://linkedin.com/in/ananth-reactdev)
- **GitHub**: [github.com/ananth-rj](https://github.com/ananth-rj)
- **Portfolio**: [anantharaj-portfolio.netlify.app](https://anantharaj-portfolio.netlify.app/)
