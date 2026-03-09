# Luma Hub Desktop Application

A comprehensive desktop application for managing Luma Engine installations, learning resources, and community engagement.

## Features

### 🎮 Engine Management
- **Version Control**: Install, manage, and switch between different Luma Engine versions
- **Status Tracking**: See which versions are stable, beta, or preview releases
- **Quick Actions**: Launch engines directly from the hub or uninstall with one click
- **Default Version**: Set your preferred engine version as default

### 📚 Learning Center
- **Featured Courses**: Access curated learning paths and tutorials
- **Progress Tracking**: Monitor your learning journey
- **Skill Levels**: Content for beginners, intermediate, and advanced users
- **Interactive Learning**: Hands-on tutorials and sample projects

### 🌐 Community Integration
- **Latest News**: Stay updated with Luma Engine announcements
- **Community Feed**: See what other developers are creating
- **Discussion Forums**: Connect with other Luma Engine users
- **Showcase**: Browse projects made with Luma Engine

### 🛠️ Additional Tools
- **Sample Projects**: Ready-to-use project templates and examples
- **Settings Panel**: Customize your hub experience
- **Status Bar**: Quick access to support and documentation

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Desktop**: Electron for cross-platform desktop application
- **Styling**: Tailwind CSS with custom dark theme
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Navigate to the Luma Hub directory:
```bash
cd "LUMA HUB"
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the application in development mode:

```bash
npm run electron-dev
# or
yarn electron-dev
# or
pnpm electron-dev
```

This will start both the React development server and the Electron application.

### Building for Production

Create a production build:

```bash
npm run electron-pack
# or
yarn electron-pack
# or
pnpm electron-pack
```

The built application will be available in the `dist` directory.

## Project Structure

```
LUMA HUB/
├── public/
│   ├── electron.js          # Electron main process
│   └── index.html           # HTML template
├── src/
│   ├── components/          # React components
│   │   ├── Sidebar.tsx      # Navigation sidebar
│   │   ├── Library.tsx      # Engine version management
│   │   ├── Learn.tsx        # Learning center
│   │   ├── Community.tsx    # Community news feed
│   │   ├── Samples.tsx      # Sample projects
│   │   ├── Settings.tsx     # Settings panel
│   │   └── StatusBar.tsx    # Bottom status bar
│   ├── App.tsx              # Main application component
│   ├── index.tsx            # Application entry point
│   └── index.css            # Global styles
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── README.md                # This file
```

## Design System

### Colors
- **Midnight Black**: `#0A0A0A` - Primary background
- **Dark Surface**: `#1A1A1A` - Card backgrounds
- **Electric Violet**: `#8A2BE2` - Primary accent
- **Luminite Blue**: `#00C6FF` - Secondary accent
- **Luma Orange**: `#FF8C42` - Highlight color

### Typography
- **Display**: Orbitron / Rajdhani (Headers)
- **Body**: Inter (Body text)

### Components
- Gradient text effects
- Neon glow animations
- Smooth hover transitions
- Responsive card layouts

## Available Scripts

- `npm start` - Start React development server
- `npm run build` - Build React application
- `npm run electron` - Run Electron application
- `npm run electron-dev` - Run in development mode
- `npm run electron-pack` - Build for production

## Platform Support

- **Windows**: NSIS installer
- **macOS**: DMG package
- **Linux**: AppImage

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

- **Documentation**: [Luma Engine Docs](https://docs.lumaengine.dev)
- **Community**: [Discord Server](https://discord.gg/cDYB7nddVh)
- **Issues**: Report bugs and request features via GitHub Issues

---

Built with ❤️ by [Nexel Games](https://nexelgames.com)
