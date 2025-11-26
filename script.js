const markdownInput = document.getElementById("markdownInput");
const preview = document.getElementById("preview");
const themeSelect = document.getElementById("themeSelect");
const downloadBtn = document.getElementById("downloadBtn");

// Default markdown content
const defaultMarkdown = `# Manohar Golla

**Web Developer | BCA 3rd Year | Hyderabad**

---

## 👋 About Me
I am a passionate web developer who loves building clean, responsive, and functional web applications using HTML, CSS, JavaScript and modern tools.

---

## 🚀 Skills
- HTML, CSS, JavaScript
- React, Node.js (learning)
- Git & GitHub
- Responsive Web Design

---

## 📂 Projects
### 🧮 Task Manager App
A task management tool with authentication and Docker support.  
[GitHub Repo](https://github.com/manoharportfolio)

### 🌐 Personal Portfolio
A responsive portfolio showcasing my work and journey in tech.

---

## 📫 Contact
- Email: **manohartimeless@gmail.com**
- LinkedIn: [linkedin.com/in/gollamanohar](https://www.linkedin.com/in/gollamanohar/)
- GitHub: [github.com/manoharportfolio](https://github.com/manoharportfolio)
`;

function renderMarkdown(md) {
  const html = marked.parse(md);
  preview.innerHTML = html;
}

// Initialize
markdownInput.value = defaultMarkdown;
renderMarkdown(defaultMarkdown);

// Live update
markdownInput.addEventListener("input", (e) => {
  renderMarkdown(e.target.value);
});

// Theme change
themeSelect.addEventListener("change", (e) => {
  document.body.className = e.target.value;
});

// Download as HTML file
downloadBtn.addEventListener("click", () => {
  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Manohar Portfolio</title>
  <style>
    body { font-family: system-ui, sans-serif; background:#f5f5f5; color:#222; padding:20px; }
    .container { max-width: 800px; margin: 0 auto; background:#fff; padding:20px; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,0.1); }
    h1,h2,h3 { margin-bottom: 8px; }
    p { line-height:1.5; margin-bottom:8px; }
    ul { padding-left: 20px; }
    li { margin-bottom:4px; }
    a { color:#1d4ed8; text-decoration:none; }
  </style>
</head>
<body>
  <div class="container">
    ${preview.innerHTML}
  </div>
</body>
</html>
`;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "portfolio.html";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
