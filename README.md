Angular Task Manager

A component-based Task Manager built with **Angular** and styled using **Tailwind CSS**.

## Project Setup

### 1. Create Angular Project

If you haven't already created the project:

```bash
git clone <https://github.com/kartikgarg9/angular-taskManager.git >
cd angular-task-manager


2. Install Tailwind CSS
Install Tailwind CSS and necessary plugins using:

npm install tailwindcss @tailwindcss/postcss postcss --force


3. Configure PostCSS
Create a file in the root:
.postcssrc.json

{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}


4. Import Tailwind in Global Styles
In your src/styles.css, add:

@import "tailwindcss";

You can also use:

@tailwind base;
@tailwind components;
@tailwind utilities;


5. Run the Application
ng serve

Visit: http://localhost:4200


Project Structure
src/
├── app/
│   ├── components/
│   │   ├── add-task/
│   │   │   ├── add-task.component.ts
│   │   │   ├── add-task.component.html
│   │   │   └── add-task.component.css
│   │   ├── tasks/
│   │   │   ├── tasks.component.ts
│   │   │   ├── task-item/
│   │   └── progress-tracker/
│   ├── models/
│   ├── services/
│   │   └── task.service.ts
│   └── app.module.ts
├── styles.css (includes Tailwind imports)
├── .postcssrc.json
└── index.html


Features

Add and list tasks


Track task completion


Delete tasks


Built with modular Angular components


Styled entirely using Tailwind CSS utility classes


Contributors

Kartik Garg
