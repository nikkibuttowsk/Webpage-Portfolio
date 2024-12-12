### README: Webpage Portfolio

---

## **Overview**
This project is a personal portfolio webpage showcasing the creator's skills, projects, and contact information. The page is designed to be responsive, visually appealing, and easy to navigate. It features sections like Home, About Me, Projects, Skills, and Contact.

---

## **Setup Instructions**

### **Requirements**
- A modern web browser (e.g., Chrome, Firefox, Edge).
- A text/code editor (e.g., Visual Studio Code, Sublime Text).
- Basic knowledge of HTML, CSS, and JavaScript (optional for customization).

### **Steps to Run Locally**
1. **Download the Project:**
   - Clone or download the project folder to your local machine.

2. **Open the Webpage:**
   - Locate the `index.html` file in the project folder.
   - Open the file in your preferred web browser by double-clicking it.

3. **Use a Local Server (Optional):**
   - For enhanced testing and functionality, use a local server (e.g., `Live Server` extension in VS Code).

---

## **Project Structure**
```
/
|-- index.html          # Main HTML file
|-- style.css           # CSS styles
|-- app.js              # JavaScript functionality
|-- IMG/                # Images folder
|   |-- 4.JPEG          # Home section background
|   |-- album1.JPG      # About Me gallery image 1
|   |-- album2.JPG      # About Me gallery image 2
|   |-- skills_html.png # HTML skill icon
|   |-- skills_css.png  # CSS skill icon
|   |-- skills_js.png   # JavaScript skill icon
|   |-- skills_c++.png  # C++ skill icon
|-- SDG/                # Folder for specific HTML projects
|   |-- about.html      # SDG-related HTML file
|-- PROJECT/            # Folder for additional projects
|   |-- realcafeee.cpp  # C++ project file
```

---

## **Features**

### **1. Home Section**
- Displays a personalized greeting and dynamic typing effect.
- Includes a background image with a gradient overlay.

### **2. About Me Section**
- Provides a brief introduction about the creator.
- Includes a gallery of personal images.

### **3. Projects Section**
- Highlights various projects with clickable links to HTML, CSS, JavaScript, and C++ files.

### **4. Skills Section**
- Lists technical skills such as HTML, CSS, JavaScript, and C++.

### **5. Contact Section**
- Displays clickable social media icons (Facebook, Instagram, X/Twitter, GitHub).
- Shows the creator's email address for direct contact.

---

## **Customization**

### **1. Updating Text Content**
- Open the `index.html` file in a text editor.
- Modify text within the relevant sections (e.g., Home, About Me).

### **2. Changing Images**
- Replace the existing images in the `IMG/` folder with your own.
- Ensure the new images have the same file names or update their paths in `index.html`.

### **3. Adding New Skills**
- Add a new skill in the `#skills` section by including an additional `<li>` tag:
  ```html
  <li class="skills-bg">New Skill</li>
  ```

### **4. Adding New Projects**
- Insert a new project entry in the `#projects` section:
  ```html
  <div class="new-project">
      <a href="path/to/project.file">PROJECT NAME
          <img src="IMG/new_project_icon.png" alt="Project Icon">
      </a>
  </div>
  ```

---

## **Resources and Tools**
- **Font Awesome**: Icons for navigation and social links.
- **Google Fonts**: For custom typography.

---

## **Contact Information**
- **Email**: 24-04063@g.batstate-u.edu.ph
- **GitHub**: [nikkibuttowsk](https://github.com/nikkibuttowsk)
- **Social Media**: Links available in the Contact section.

---

