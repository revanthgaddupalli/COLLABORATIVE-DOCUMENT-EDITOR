# COLLABORATIVE-DOCUMENT-EDITOR

**COMPANY**: CODTECH IT SOLUTIONS

**NAME**: GADDUPALLI REVANTH

**INTERN ID**: CT08DF1030

**DOMAIN**: FULL STACK WEB DEVELOPMENT

**DURATION**: 8 WEEKS

**MENTOR**: NEELA SANTHOSH KUMAR

## DESCRIPTION
DocTogether is a powerful yet lightweight real-time document editing application built with the goal of enabling seamless collaboration between multiple users. It allows users to create, edit, and collaborate on documents in real-time with rich formatting features and the ability to import/export documents in both DOCX and PDF formats.

### Why I Built This :
In the age of remote work and distributed teams, collaborative tools are no longer a luxury they're essential. While platforms like Google Docs exist, I wanted to challenge myself by building my own version of a collaborative editor from the ground up, focusing on simplicity, performance, and core functionality. The aim was to learn real-time synchronization, text manipulation, and build a usable tool that supports real document editing without overcomplication.

### Features :
- **Real-time Collaboration**: Edits made by one user reflect immediately for all other users in the same document.
- **Rich Text Formatting**: Supports bold, italic, underline, headings, lists, alignment, and more.
- **Import DOCX Files**: Upload `.docx` documents and convert them to HTML using Mammoth.js.
- **Export**: Export your document in either `.docx` or `.pdf` format.
- **Auto Save**: Changes are automatically saved to MongoDB in real time.
- **Word & Character Count**: Live tracking of basic document statistics.
- **Sharable Links**: Easily share document links to collaborate with others.

### Technologies Used :
**Frontend:**
- React (Vite)
- React Router
- FontAwesome for icons
- HTML `contentEditable` for WYSIWYG editing
- CSS for custom dark-themed styling

**Backend:**
- Node.js + Express.js
- Socket.IO for real-time communication
- MongoDB + Mongoose for data persistence

**Libraries:**
- `mammoth`: Convert `.docx` files to HTML
- `docx`: Generate downloadable `.docx` files
- `jspdf`: Export document content as PDF
- `file-saver`: Save files from browser

### Project Structure :
```
DocTogether/
├── client/
│   ├── src/
│       ├── ...             # App.js, App.css, index.js, etc
│       ├── Home.js         # Landing screen to enter a document
│       ├── Editor.js       # Core document editor logic
│       ├── Home.css
│       └── Editor.css
└── server.js               # Express + Socket.IO backend
```

### How It Works :
1. **Join a Document Room**: When a user enters a document name, they are navigated to `/editor/<docName>`, which creates or joins a room via Socket.IO.
2. **Real-Time Sync**: When a user types or makes changes, the updates are emitted via sockets and broadcasted to all clients in that document room.
3. **Persistence**: Every change is also saved to MongoDB so documents can be retrieved later.
4. **File Handling**: Users can upload `.docx` files (converted to HTML) or export the content using `docx` or `jspdf`.

### How To Run Locally :
**Requirements**:
- Node.js
- MongoDB (local instance or MongoDB Atlas)

1. **Clone the Repository**

   ```
   bash
   git clone https://github.com/your-username/DocTogether.git
   cd DocTogether
   ```
2. **Install Server Dependencies**

   ```
   bash
   npm install
   ```
3. Make sure MongoDB is running on `mongodb://127.0.0.1:27017`
4. **Start the Server**
   
   ```
   bash
   node server.js
   ```
5. **Start the Client (in seperate terminal)**
   
   ```
   bash
   cd client
   npm install
   npm start
   ```
Visit `http://localhost:3000` and start collaborating!

### Conclusion :
DocTogether is a minimal, no-login collaborative editor that brings the essence of teamwork into your browser. While this is just the foundation, there’s huge potential for adding features like user presence indicators, access control, document history, and collaborative cursors.

Whether you're learning real-time systems or need a quick doc editor with zero setup, DocTogether has you covered.

## OUTPUT
<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/8636828d-8078-4802-a6fd-f0f62659df2d" />

---
---

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/d5313f19-8d92-4767-b84f-530a14898914" />

---
---

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/3e6b37cd-69e6-43a9-ad9a-ef215042dcb3" />

---
---

<img width="1919" height="1079" alt="Image" src="https://github.com/user-attachments/assets/0be2de04-e4af-4148-a975-6a6673377e93" />
