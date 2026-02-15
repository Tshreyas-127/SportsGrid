// import { Navigate, useLocation } from "react-router-dom";

// export default function ProtectedRoute({ children, role }) {
//   const token = localStorage.getItem("token");
//   const userRole = localStorage.getItem("role");
//   const location = useLocation();

//   if (!token) {
//     return <Navigate to="/login" replace state={{ from: location }} />;
//   }

//   if (role && userRole !== role) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return children;
// }

import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");
  const location = useLocation();

  // No token → login
  if (!token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Wrong role → unauthorized
  if (role && userRole !== role) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
