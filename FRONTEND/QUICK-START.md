# Quick Start Guide - Issue Tracker

## 🚀 Running the Application

### Prerequisites
- ✅ .NET 8 SDK installed
- ✅ Node.js (v18+) and npm installed

### Step 1: Start the Backend

Open a terminal and run:

```powershell
cd "c:\Users\olito\Desktop\7.(5.)félév\DevOps\DevOpsFF\BACKEND\IssueTracker"
dotnet run
```

✅ Backend will start on: **http://localhost:5109**  
✅ Swagger UI available at: **http://localhost:5109/swagger**

### Step 2: Start the Frontend

Open a **new terminal** (keep backend running) and run:

```powershell
cd "c:\Users\olito\Desktop\7.(5.)félév\DevOps\DevOpsFF\FRONTEND"
ng serve
```

✅ Frontend will start on: **http://localhost:4200**

### Step 3: Open Browser

Navigate to: **http://localhost:4200**

## 📋 What You'll See

### Main Page (View Projects)
- A table with all projects
- Columns: Name | Description | Active Issues | Actions
- "Create New Project" button at the top

### Using the Application

1. **Create a Project**
   - Click "Create New Project"
   - Fill in name and description
   - Click "Create Project"

2. **View Project Details**
   - Click the "View" button on any project
   - See project info and all issues

3. **Add an Issue**
   - Click "Add Issue" button on a project row
   - OR click "Add New Issue" from project details page
   - Fill in issue title and description
   - Click "Create Issue"

4. **Edit a Project**
   - Click "Edit" button on a project
   - Modify name or description
   - Click "Update Project"

5. **Delete a Project**
   - Click "Delete" button on a project
   - Confirm the deletion

## 🎨 UI Features

### Bootstrap Styling
- Modern card layouts
- Responsive tables
- Colored badges for issue counts
- Icon buttons for actions
- Loading spinners
- Error alerts

### Status Colors
- 🔴 Open issues (red)
- 🟡 In Progress (yellow)
- 🔵 Resolved (blue)
- 🟢 Closed (green)

## 🔧 Troubleshooting

### Backend won't start
- Ensure .NET 8 SDK is installed: `dotnet --version`
- Check if port 5109 is available

### Frontend won't start
- Ensure dependencies are installed: `npm install`
- Check if Angular CLI is available: `ng version`
- Check if port 4200 is available

### CORS errors
- Ensure backend is running on port 5109
- Backend already configured for CORS with Angular (port 4200)

### API errors
- Check that both backend and frontend are running
- Verify API URLs in services match backend port (5109)
- Check browser console for detailed error messages

## 📁 Important Files

### Frontend
- **Services**: `FRONTEND/src/app/services/`
- **Components**: `FRONTEND/src/app/components/`
- **Models**: `FRONTEND/src/app/models/`
- **Routing**: `FRONTEND/src/app/app-routing-module.ts`

### Backend
- **Controllers**: `BACKEND/IssueTracker/Controllers/`
- **Configuration**: `BACKEND/IssueTracker/Program.cs`
- **API Port**: Configured in `BACKEND/IssueTracker/Properties/launchSettings.json`

## 📚 Additional Documentation

- **FRONTEND-README.md** - Detailed frontend documentation
- **IMPLEMENTATION-SUMMARY.md** - Complete implementation details
- **TABLE-STRUCTURE.md** - View Projects table specification

## ✨ Features Implemented

✅ View all projects in a table  
✅ 4-column table: Name, Description, Active Issues, Actions  
✅ Create new projects  
✅ Edit existing projects  
✅ Delete projects with confirmation  
✅ View project details  
✅ View all issues for a project  
✅ Add new issues to projects  
✅ Bootstrap styling (cards, tables, badges)  
✅ Status badges with colors  
✅ Responsive design  
✅ Loading states  
✅ Error handling  

Enjoy using the Issue Tracker! 🎉
