# Issue Tracker Frontend

A modern Angular frontend for the Issue Tracker application with Bootstrap styling.

## Features

- **View Projects**: List all projects with active issue counts
- **Project Details**: View project information and associated issues
- **Create/Edit Projects**: Forms to manage projects
- **Add Issues**: Create new issues for projects
- **Status Badges**: Visual indicators for issue statuses (Open, In Progress, Resolved, Closed)
- **Responsive Design**: Bootstrap-based UI with cards, tables, and badges

## Project Structure

```
src/app/
├── components/
│   ├── project-list/       # Main page - lists all projects
│   ├── project-view/       # View project details and issues
│   ├── project-form/       # Create/edit project form
│   └── issue-form/         # Create new issue form
├── models/
│   ├── project.model.ts    # Project DTOs and interfaces
│   └── issue.model.ts      # Issue DTOs and interfaces
└── services/
    ├── project.service.ts  # Project API service
    └── issue.service.ts    # Issue API service
```

## Technologies Used

- **Angular** (non-standalone components)
- **Bootstrap 5** - Modern styling and components
- **Bootstrap Icons** - Icon library
- **SCSS** - Styling
- **HttpClient** - API communication
- **FormsModule** - Template-driven forms

## Prerequisites

- Node.js (v18 or higher)
- npm
- .NET 8 SDK (for backend)

## Installation

1. Navigate to the FRONTEND directory:
   ```powershell
   cd FRONTEND
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

## Running the Application

1. **Start the Backend** (from the BACKEND directory):
   ```powershell
   cd ..\BACKEND\IssueTracker
   dotnet run
   ```
   The backend will start on http://localhost:5109

2. **Start the Frontend** (from the FRONTEND directory):
   ```powershell
   cd ..\..\FRONTEND
   ng serve
   ```
   The frontend will start on http://localhost:4200

3. Open your browser and navigate to http://localhost:4200

## API Configuration

The frontend is configured to communicate with the backend API at:
- Base URL: `http://localhost:5109`
- Project API: `http://localhost:5109/api/Project`
- Issue API: `http://localhost:5109/api/Issue`

If you need to change the backend URL, update the `apiUrl` property in:
- `src/app/services/project.service.ts`
- `src/app/services/issue.service.ts`

## Features Overview

### View Projects Page
- Table with 4 columns: Name, Description, Active Issues, Actions
- Active issues displayed with badges
- Action buttons for each project:
  - **View**: See project details and issues
  - **Edit**: Modify project information
  - **Add Issue**: Create a new issue for the project
  - **Delete**: Remove the project (with confirmation)
- **Create New Project** button at the top

### Project View Page
- Project details card with name and description
- Issues section showing all issues for the project
- Issue cards with:
  - Color-coded borders based on status
  - Status badges (Open, In Progress, Resolved, Closed)
  - Issue title, description, and creation date
- Action buttons to edit project or add new issues

### Forms
- Clean, Bootstrap-styled forms
- Validation indicators
- Loading states with spinners
- Error handling with alerts

## Styling

The application uses Bootstrap 5 for styling with:
- **Cards**: For project details and sections
- **Tables**: For listing projects
- **Badges**: For status indicators and active issue counts
- **Buttons**: Consistent action buttons with icons
- **Forms**: Clean form layouts with validation
- **Navbar**: Top navigation bar
- **Responsive Grid**: Mobile-friendly layout

Status color scheme:
- **Open**: Red (Danger)
- **In Progress**: Yellow (Warning)
- **Resolved**: Blue (Info)
- **Closed**: Green (Success)

## Development

- Run `ng serve` for a dev server
- Run `ng build` to build the project
- Run `ng generate component component-name` to generate a new component

## Notes

- The backend has CORS configured for Angular development (port 4200)
- All components use non-standalone mode
- Forms use template-driven approach with FormsModule
- HTTP requests are handled through dedicated service classes
