# Jostens SFMC Content Block App

A custom React-based Content Block application for Salesforce Marketing Cloud (SFMC) Content Builder. This tool allows email marketers to create and configure Jostens-branded email components with a user-friendly interface.

## 🚀 Overview

This project leverages the [SFMC Block SDK](https://github.com/salesforce-marketingcloud/blocksdk) to provide a custom editing experience within Content Builder. It generates high-quality, responsive HTML/CSS for various Jostens email modules.

## ✨ Features

- **Multi-Component Support**: Single application that can generate multiple types of email blocks:
  - **Plain Text**: Simple formatted text blocks.
  - **Callout (Title Bar)**: Sections with a colored background and title.
  - **Hero/Banner Image**: Full-width images with optional links.
  - **Text and CTA Button**: Layouts combining a headline, body text, and a call-to-action button.
  - **Side-by-Side Layouts**: Responsive "Text Left / Image Right" and "Text Right / Image Left" variants.
  - **Galleries & Grids**: Three-up icon galleries and icon grids for features or product highlights.
  - **Header with Grid**: Specialized hero sections with integrated icon grids.
- **Brand Consistency**: Pre-configured with Jostens' brand colors and typography.
- **Real-time Sync**: Uses the SFMC Block SDK to update the email content instantly as you edit in the sidebar.
- **Responsive Design**: All generated HTML is optimized for 768px rendering width and mobile responsiveness.

## 🛠️ Technology Stack

- **React 19**: Modern UI library for the configuration interface.
- **Vite**: Ultra-fast build tool and development server.
- **SFMC Block SDK**: For communication between the app and Salesforce Marketing Cloud.
- **Vanilla CSS**: Custom styling for a premium editor experience.

## 📦 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

### Deployment

1. Build the production application:
   ```bash
   npm run build
   ```
2. Host the contents of the `dist` folder on a secure HTTPS server (e.g., Vercel, Netlify, or Github Pages).
3. In Salesforce Marketing Cloud, create a new **Installed Package** and add a **Content Block** component pointing to your hosted URL.

## 📄 License

Internal tool for Jostens.
