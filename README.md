
# 📦 Parcel Delivery System (Frontend)

A complete **Parcel Delivery System** frontend inspired by **Pathao Courier** and **Sundarban Courier**, designed with a clean UI and smooth user experience.  
This project is the **frontend** part that interacts with the backend API to manage parcel creation, tracking, and delivery.

🔗 **Live Demo**: [Parcel Delivery Frontend](https://parcel-deleivery-frontend.vercel.app/)  
💻 **Repository (Frontend)**: [GitHub](https://github.com/DeveloperImran1/Parcel-Deleivery-Frontend)

**Credentials**: <br/>
Sender: 
  email: sender@gmail.com
  password: sender@gmail.com

Receiver: 
  email: receiver@gmail.com
  password: receiver@gmail.com

Admin:
  email: admin@gmail.com
  password: admin@gmail.com

---

## 🧱 Tech Stack

- **Framework**: React.js + Vite  
- **Language**: TypeScript  
- **State Management**: Redux Toolkit + RTK Query  
- **UI**: Tailwind CSS + Shadcn UI  
- **Routing**: React Router DOM  
- **Forms**: React Hook Form + Zod  
- **Authentication**: JWT (Access + Refresh)  
- **API Integration**: Axios + Interceptors  
- **Deployment**: Vercel  

---

## 👥 User Roles (Frontend Features)

| Role      | Features |
|-----------|----------|
| `Sender`  | Can register/login, create new parcels, view parcel status, cancel before pickup |
| `Receiver`| Can track parcels by ID, confirm delivery, and view status updates |
| `Admin`   | Can log in, manage all parcels, update statuses, and manage users |

---

## 🗂️ Folder Structure

```
src/
├── components/ # Reusable UI components
├── features/ # Redux slices & RTK Query API logic
├── pages/ # Route-based pages (Home, Dashboard, etc.)
├── layouts/ # Shared layouts (Dashboard, Auth)
├── routes/ # Route definitions with role-based access
├── utils/ # Helper functions
├── hooks/ # Custom hooks
├── App.tsx # Root component
├── main.tsx # Entry point

```

## ✅ Features

### 🔐 Auth & Security

- JWT-based authentication with role verification
- Forgot/reset password system
- OTP verification (email-based)
- Google OAuth login
- Express-session + Redis integration

### 📦 Parcel Management

- Sender creates & cancels parcel requests
- Receiver confirms delivery
- Admin updates parcel status (with status logs)
- Track status history

### 🧾 Status Logs

- Tracks all status updates (`Requested → Approved → Dispatched → In Transit → Delivered`)
- Includes timestamp, updatedBy, and optional notes

 
---


- 🔐 Secure authentication with JWT  
- 🎨 Responsive UI with Tailwind + Shadcn  
- ⚡ Fast state management with Redux Toolkit + RTK Query  
- 📦 Real-time parcel tracking (via API)  
- 👥 Role-based access (Sender, Receiver, Admin)  
- 📨 Email + OTP support for secure signup  

---


## 🔀 Parcel Flow

1. Sender creates a parcel → status: `Requested`
2. Admin approves → status: `Approved`
3. Admin dispatches → status: `Dispatched`
4. Admin marks `In Transit` → status updated
5. Receiver confirms delivery → status: `Delivered`

---

## 🔐 Role-Based Access

- **Sender**: Create, cancel, and track parcels they created
- **Receiver**: View assigned parcels and mark as delivered
- **Admin**: Full access – view, block, update users and parcels

---

## 🌐 API Endpoints

### 🧾 Auth

- `POST /api/v1/auth/login`
- `POST /api/v1/auth/logout`
- `POST /api/v1/auth/refresh-token`
- `POST /api/v1/auth/set-password`
- `POST /api/v1/auth/forgot-password`
- `POST /api/v1/auth/reset-password`
- `POST /api/v1/auth/change-password`

### 🔑 OTP

- `POST /api/v1/otp/send`
- `POST /api/v1/otp/verify`

### 👤 User

- `POST /api/v1/user/register`
- `GET /api/v1/user/me`
- `PATCH /api/v1/user/:id`
- `GET /api/v1/user/all-users` (admin)

### 📦 Parcel

- `POST /api/v1/parcel/create-parcel`
- `GET /api/v1/parcel/all-parcel`
- `GET /api/v1/parcel/my-parcel`
- `GET /api/v1/parcel/:id`
- `PATCH /api/v1/parcel/:id` (update/cancel)

---

## 🧪 Validation & Rules

- 🚫 Senders cannot cancel a dispatched parcel
- ✅ Receivers can only mark delivered after `In Transit`
- ✅ Admins can block/unblock parcels or users
- ❌ Wrong status flow (e.g., Delivered → Requested) is restricted

---

## 🛠 Setup & Installation

### 1. Clone & Install

```bash
git clone https://github.com/DeveloperImran1/Parcel-Deleivery-Frontend.git
cd Parcel-Delivery-Frontend
npm install
```

### 2. Create `.env` File

```bash
BASE_API=""

```

### 3. Run the App

```bash
npm run dev      # Development mode
npm run build    # Compile TypeScript
npm run start    # Run compiled app
```


---

## 👨‍💻 Developer

Developed by **Md Imran** 🔗 [@DeveloperImran1](https://github.com/DeveloperImran1)

---

## 📝 License

MIT License
