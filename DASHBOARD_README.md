# NobleVet Dashboard System

A comprehensive veterinary client portal dashboard built with React and Tailwind CSS, featuring modern animations and a responsive design.

## Features

### 🎨 Design & UI
- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Animations**: Smooth transitions and engaging micro-interactions
- **Consistent Color Scheme**: Emerald and teal color palette throughout
- **Glassmorphism Effects**: Modern glass-like UI components
- **Custom Scrollbars**: Styled scrollbars for better aesthetics

### 📱 Dashboard Components

#### 1. **Sidebar Navigation**
- Collapsible sidebar with smooth animations
- Active state indicators with pulsing effects
- Icon-based navigation with hover animations
- Logout functionality

#### 2. **Top Navigation Bar**
- User profile dropdown with avatar
- Notifications dropdown with badges
- Global search functionality
- Location indicator
- Theme toggle (Light/Dark mode ready)

#### 3. **Dashboard Pages**

##### **Dashboard Home**
- Welcome message with dynamic greeting
- Statistical cards with gradient backgrounds
- Recent activity feed
- Upcoming appointments preview
- Quick action buttons
- Floating action button for quick tasks

##### **Appointments**
- Tabbed interface (Upcoming, Past, Cancelled)
- Search and filter functionality
- Interactive appointment cards
- Status indicators with color coding
- Booking modal with form validation

##### **My Pets**
- Pet grid layout with image support
- Detailed pet information cards
- Health score indicators
- Vaccination tracking
- Medical history access
- Add new pet functionality

##### **Invoices**
- Invoice status tracking
- Payment integration ready
- Detailed invoice view modal
- Export functionality (PDF, CSV)
- Search and filter options
- Payment status indicators

##### **Messages**
- Real-time messaging interface
- Conversation list with unread indicators
- Message status (sent, delivered, read)
- File attachment support ready
- Online/offline status indicators

##### **Reminders**
- Priority-based reminder system
- Color-coded urgency levels
- Reminder type categories
- Calendar integration ready
- Mark as complete functionality

##### **Profile**
- Editable user information
- Avatar upload functionality
- Notification preferences
- Security settings
- Account statistics

##### **Reports & Analytics**
- Visual data representation
- Filterable time periods
- Pet health summaries
- Spending analytics
- Export capabilities

##### **Settings**
- Tabbed settings interface
- General preferences
- Notification controls
- Privacy settings
- Security options
- Data management tools

### 🎭 Modal Components

#### **Appointment Booking Modal**
- Multi-step form with validation
- Pet selection dropdown
- Service type selection
- Date/time picker
- Urgency level selection
- Notes section

#### **Add Pet Modal**
- Comprehensive pet information form
- Image upload with preview
- Medical history tracking
- Vaccination checklist
- Form validation

#### **Confirmation Modal**
- Reusable confirmation dialog
- Different types (success, warning, danger)
- Custom messaging
- Animated appearance

### 🎨 Animation Features

#### **Page Transitions**
- Fade-in-up animations on page load
- Staggered animations for lists
- Smooth hover effects
- Loading animations

#### **Interactive Elements**
- Button hover effects
- Card lift animations
- Icon bounce effects
- Progress indicators

#### **Micro-interactions**
- Notification badges with pulse
- Toggle switches
- Dropdown animations
- Form field focus effects

### 📦 Reusable Components

#### **LoadingSpinner**
```jsx
<LoadingSpinner size="lg" text="Loading pets..." fullScreen={false} />
```

#### **NotificationToast**
```jsx
const { showSuccess, showError } = useToast();
showSuccess("Success!", "Pet added successfully");
```

#### **SkeletonLoader**
```jsx
<SkeletonCard />
<SkeletonTableRow columns={4} />
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory**
   ```bash
   cd Noblevet-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Access the application**
   - Home page: `http://localhost:5173/`
   - Login page: `http://localhost:5173/login`
   - Dashboard: `http://localhost:5173/dashboard`

## Usage Instructions

### 🚀 Getting Started

1. **Access the Login Page**
   - Navigate to `/login`
   - Use any credentials (authentication is simulated)
   - Click "Sign In" to be redirected to the dashboard

2. **Dashboard Navigation**
   - Use the sidebar to navigate between sections
   - Click the collapse button to minimize the sidebar
   - Use the top bar for quick actions and notifications

3. **Managing Pets**
   - Go to "My Pets" section
   - Click "Add New Pet" to register a new pet
   - Click on pet cards for detailed view
   - Edit pet information using the edit button

4. **Booking Appointments**
   - Navigate to "Appointments"
   - Click "Book Appointment"
   - Fill in the modal form
   - Select pet, service, date, and time

5. **Viewing Reports**
   - Access "Reports & Analytics"
   - Filter by time period
   - Export data as needed

### 🎨 Customizing Colors

The color scheme uses CSS custom properties and Tailwind classes:

```css
/* Primary colors */
.bg-emerald-600 /* Primary buttons */
.bg-teal-500   /* Secondary elements */
.text-emerald-700 /* Primary text */
```

### 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`

## File Structure

```
src/
├── components/
│   ├── dashboard/
│   │   ├── Dashboard.jsx          # Main dashboard layout
│   │   ├── Sidebar.jsx           # Navigation sidebar
│   │   ├── TopBar.jsx            # Top navigation
│   │   ├── pages/                # Dashboard pages
│   │   │   ├── DashboardHome.jsx
│   │   │   ├── Appointments.jsx
│   │   │   ├── MyPets.jsx
│   │   │   ├── Invoices.jsx
│   │   │   ├── Messages.jsx
│   │   │   ├── Reminders.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Settings.jsx
│   │   └── modals/               # Modal components
│   │       ├── AppointmentModal.jsx
│   │       ├── AddPetModal.jsx
│   │       └── ConfirmationModal.jsx
│   ├── common/                   # Shared components
│   │   ├── LoadingSpinner.jsx
│   │   └── NotificationToast.jsx
│   ├── auth/
│   │   └── LoginPage.jsx         # Updated with navigation
│   └── layout/
│       ├── Navigation.jsx
│       └── Footer.jsx
├── App.jsx                       # Updated with dashboard route
└── index.css                     # Custom animations
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Performance Considerations

- Lazy loading for images
- Optimized animations with CSS transforms
- Efficient React rendering
- Minimal bundle size

## Future Enhancements

- [ ] Real-time notifications
- [ ] Calendar integration
- [ ] Payment processing
- [ ] Video consultations
- [ ] Multi-language support
- [ ] Dark mode implementation
- [ ] PWA capabilities
- [ ] Offline functionality

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

**Note**: This is a frontend demo with simulated data. For production use, integrate with appropriate backend APIs for data persistence and real-time functionality.
