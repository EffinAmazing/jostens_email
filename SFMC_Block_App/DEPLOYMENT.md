# Jostens Custom Block App - Deployment Guide

This is a **Custom Content Block application** for Salesforce Marketing Cloud (SFMC). It uses the official `blocksdk.js` to provide a drag-and-drop builder form inside SFMC.

## 1. Hosting the Application

Because this is a static React application, it does not require a backend server. You can host it directly on **GitHub Pages**, **Vercel**, or **Netlify**.

### To compile for production:
\`\`\`bash
npm run build
\`\`\`
This will generate a \`dist\` folder. You need to host the contents of that \`dist\` folder via HTTPS. 

For free, instantaneous hosting, we recommend dragging the \`dist\` folder to **Netlify Drop** (https://app.netlify.com/drop) or using **Vercel** connected to your GitHub repository.

## 2. Registering in Salesforce Marketing Cloud

Once your static app is hosted (e.g. `https://jostens-blocks.vercel.app`), you must register it as an "Installed Package" in Marketing Cloud:

1. Log into Marketing Cloud and go to **Setup**.
2. Under "Platform Tools", expand **Apps** and click **Installed Packages**.
3. Click **New**. Name it "Jostens Content Blocks".
4. Once created, click **Add Component**.
5. Select **Custom Content Block**.
6. Enter a name (e.g., "Jostens Layouts") and an optional description.
7. Under "Endpoint URL", paste the HTTPS URL where you hosted the \`dist\` contents.
8. Save.

## 3. Using the Block

Inside **Email Studio** > **Content Builder**:
1. Open any email or template in Edit mode.
2. In the left-hand Blocks menu, scan down to the "Custom Blocks" section.
3. You will see your newly named block ("Jostens Layouts"). Drag it into your email.
4. The editing pane will load your Custom React Application. 
5. Select your block type, edit text, colors, and imagery exactly as desired. The HTML will flawlessly update in the canvas.
