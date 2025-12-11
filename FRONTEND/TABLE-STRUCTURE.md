# View Projects Page - Table Structure

## Table Columns (As Requested)

| Column # | Column Name     | Description                           | Display Format                  |
|----------|-----------------|---------------------------------------|---------------------------------|
| 1        | Name            | Project name                          | Bold text                       |
| 2        | Description     | Project description                   | Regular text                    |
| 3        | Active Issues   | Number of active issues               | Badge (blue, rounded pill)      |
| 4        | Actions         | Action buttons for the project        | Button group (4 buttons)        |

## Action Buttons (All in one button group)

1. **View** - Blue/Info outlined button with eye icon
   - Navigates to project details page
   - Shows project info and all issues

2. **Edit** - Yellow/Warning outlined button with pencil icon
   - Navigates to edit project form
   - Allows updating project name and description

3. **Add Issue** - Green/Success outlined button with plus icon
   - Navigates to create issue form
   - Pre-fills project ID for the new issue

4. **Delete** - Red/Danger outlined button with trash icon
   - Shows confirmation dialog
   - Deletes project and refreshes list

## Visual Example

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          View Projects                    [Create New Project]│
├─────────────────────────────────────────────────────────────────────────────┤
│ Name        │ Description              │ Active Issues │ Actions            │
├─────────────┼─────────────────────────┼───────────────┼────────────────────┤
│ Project 1   │ First project desc...    │      (3)      │ [View][Edit][+Issue][Delete] │
│ Project 2   │ Second project desc...   │      (0)      │ [View][Edit][+Issue][Delete] │
│ Project 3   │ Third project desc...    │      (7)      │ [View][Edit][+Issue][Delete] │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Bootstrap Classes Used

### Table
- `table` - Base table styling
- `table-hover` - Row hover effect
- `card` - Wraps table in a card
- `shadow` - Adds subtle shadow to card

### Table Header
- `table-light` - Light gray background for header
- `text-center` - Centers Active Issues and Actions columns

### Badges
- `badge` - Base badge styling
- `bg-primary` - Blue background
- `rounded-pill` - Fully rounded badge shape

### Button Group
- `btn-group` - Groups buttons together
- `btn-sm` - Small button size
- `btn-outline-info` - Blue outlined View button
- `btn-outline-warning` - Yellow outlined Edit button
- `btn-outline-success` - Green outlined Add Issue button
- `btn-outline-danger` - Red outlined Delete button

## Features

### Loading State
- Shows spinner while fetching data
- "Loading projects..." message

### Error State
- Red alert with error message
- Retry button

### Empty State
- Info alert when no projects exist
- Encourages user to create first project

### Responsive Design
- Table scrolls horizontally on small screens
- Buttons remain functional on mobile
- Card layout adapts to screen size

## Data Flow

1. Component loads → calls `projectService.getAllProjects()`
2. Receives `ProjectShortViewDto[]` array
3. Displays each project in table row
4. `activeIssuesNumber` property shows count in badge
5. Action buttons trigger component methods:
   - `viewProject(id)` → navigates to `/projects/:id`
   - `editProject(id)` → navigates to `/projects/edit/:id`
   - `addNewIssue(projectId)` → navigates to `/issues/new?projectId=:id`
   - `deleteProject(id)` → confirms, calls delete API, refreshes list
