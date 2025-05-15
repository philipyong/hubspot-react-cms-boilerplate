# HubSpot React CMS Boilerplate

A starter template to help developers quickly build and deploy React components in HubSpot's CMS. This boilerplate includes a modern setup with Tailwind CSS for styling and provides a streamlined development experience.

## Features

- 🚀 React-based component development for HubSpot CMS
- 🎨 Tailwind CSS integration for modern, utility-first styling
- 📦 Pre-configured build and deployment scripts
- 🔧 Development server with hot reloading
- 📱 Responsive design support out of the box

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- HubSpot account with CMS access
- HubSpot CLI installed (`npm install -g @hubspot/cli`)

## Getting Started

1. Clone this repository:

```bash
git clone [your-repo-url]
cd hubspot-react-cms-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Configure your HubSpot account:

```bash
hs init
```

4. Deploy your templates to HubSpot (IMPORTANT: This step is required before starting the dev server. Without running deploy, your templates won't show up in the local development environment):

```bash
npm run deploy
```

5. Start the development server:

```bash
npm run dev
```

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── templates/      # HubSpot templates
│   └── styles/         # Global styles and Tailwind config
├── dist/              # Compiled output
└── hubspot.config.yml # HubSpot configuration
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run deploy` - Deploy to HubSpot

## Important Notes

- Always run `npm run deploy` after making changes to ensure your templates are updated in HubSpot
- Make sure your HubSpot account has the necessary permissions for CMS development
- The development server runs on `localhost:3000` by default

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - feel free to use this boilerplate for your HubSpot projects.
