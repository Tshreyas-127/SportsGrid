import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Payment
import PaymentPage from "./pages/payment/PaymentPage";
import PaymentSuccess from "./pages/payment/PaymentSuccess";

// Member
import NutritionConsultation from "./pages/member/NutritionRequest";
import WorkoutRequest from "./pages/member/WorkoutRequest";
import WorkoutPlanView from "./pages/member/WorkoutPlanView";
import ViewDietPlan from "./pages/member/ViewDietPlan";
import MyBookings from "./pages/member/MyBookings";

//ADMIN PAGES
import ViewEnquiry from "./pages/admin/ViewEnquiry";
import ManageMembers from "./pages/admin/managemembers";

// Auth
import Login from "./assets/auth/Login";
import Register from "./assets/auth/Register";
import ProtectedRoute from "./assets/auth/ProtectedRoute";
import ForgotPassword from "./assets/auth/ForgotPassword";
import VerifyOTP from "./assets/auth/VerifyOTP";
import ResetPassword from "./assets/auth/Resetpassword";

// Public
import Home from "./publicPages/Home";

// Club
import About from "./pages/club/About";
import Contact from "./pages/club/Contact";
import Enquiry from "./pages/club/Enquiry";

// Booking
import CoachingBooking from "./pages/booking/coaching/Coaching";
import GroundBooking from "./pages/booking/facility/GroundBooking";
import BanquetBooking from "./pages/booking/facility/BanquetBooking";
import RoomBooking from "./pages/booking/facility/RoomBooking";
import MembershipPage from "./pages/booking/membership/MembershipPage";

// Events
import UpcomingEvents from "./pages/events/UpcomingEvents";
import PastEvents from "./pages/events/PastEvents";
import EventRegistration from "./pages/events/EventRegistration";
import Events from "./pages/Events";

// Facilities (✅ EXISTING FILES)
import Sports from "./pages/facilities/Sports";
import Recreation from "./pages/facilities/Recreation";
import Hospitality from "./pages/facilities/Hospitality";
import Medical from "./pages/facilities/Medical";

// 🔥 SPORTS
import Aerobics from "./pages/facilities/Sports/Aerobics";
import Badminton from "./pages/facilities/Sports/Badminton";
import Billiards from "./pages/facilities/Sports/Billiards";
import Carrom from "./pages/facilities/Sports/Carrom";
import Chess from "./pages/facilities/Sports/Chess";
import Gymnastics from "./pages/facilities/Sports/Gymnastics";
import IndoorCricketNets from "./pages/facilities/Sports/IndoorCricketNets";
import PistolShooting from "./pages/facilities/Sports/PistolShooting";
import Squash from "./pages/facilities/Sports/Squash";
import TableTennis from "./pages/facilities/Sports/TableTennis";
import Yoga from "./pages/facilities/Sports/Yoga";
import Swimming from "./pages/facilities/Sports/Swimming";
import VolleyBall from "./pages/facilities/Sports/VolleyBall";
import LawnTennis from "./pages/facilities/Sports/LawnTennis";
import Gym from "./pages/facilities/Sports/Gym";
import Skating from "./pages/facilities/Sports/Skating";


// 🔥 RECREATION
import KidsZone from "./pages/facilities/Recreation/KidsZone";
import GamingZone from "./pages/facilities/Recreation/GamingZone";
import LibraryReading from "./pages/facilities/Recreation/LibraryReading";

// HOSPITALITY
import Rooms from "./pages/facilities/Hospitality/Rooms";
import HallBanquest from "./pages/facilities/Hospitality/HallBanquest";
import FoodService from "./pages/facilities/Hospitality/FoodService";

// MEDICAL CELL
import MedicalAssistant from "./pages/facilities/Medicalcell/MedicalAssistantInfo";
import FirstAidEmergency from "./pages/facilities/Medicalcell/FirstAidEmergency";
import Physiotherapist from "./pages/facilities/Medicalcell/Physiotherapist";

// Achievements
import Achievements from "./pages/Achievements";
import ClubAchievement from "./pages/ClubAchievements";
import MemberAchievement from "./pages/MemberAchievement";

// Dashboards
import SuperAdminDashboard from "./dashboards/SuperAdminDashboard";
import AdminDashboard from "./dashboards/AdminDashboard";
import TrainerDashboard from "./dashboards/TrainerDashboard";
import NutritionDashboard from "./dashboards/NutritionDashboard";
import MemberDashboard from "./dashboards/MemberDashboard";

// Others
import Unauthorized from "./pages/Unauthorized";

// Helpers
const BookingHome = () => <Navigate to="/booking/facility/ground" />;
// const MyBookings = () => <h2 className="p-5">My Bookings</h2>;
const Profile = () => <h2 className="p-5">My Profile</h2>;

function App() {
  return (
      <Routes>

        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Club */}
        <Route path="/club/about" element={<About />} />
        <Route path="/club/contact" element={<Contact />} />
        <Route path="/club/enquiry" element={<Enquiry />} />

        {/* Booking */}
        <Route path="/booking" element={<BookingHome />} />
        <Route path="/booking/coaching" element={<CoachingBooking />} />
        <Route path="/booking/facility/ground" element={<GroundBooking />} />
        <Route path="/booking/facility/banquet" element={<BanquetBooking />} />
        <Route path="/booking/facility/room" element={<RoomBooking />} />
        <Route path="/booking/membership" element={<MembershipPage />} />

        <Route path="/membership" element={<MembershipPage />} />

        {/* Events */}
        <Route path="/events" element={<Events />} />
        <Route path="/events/upcoming" element={<UpcomingEvents />} />
        <Route path="/events/past" element={<PastEvents />} />
        <Route path="/events/register" element={<EventRegistration />} />

        {/* Facilities (✅ FIXED) */}
        <Route path="/facilities/sports" element={<Sports />} />
        <Route path="/facilities/recreation" element={<Recreation />} />
        <Route path="/facilities/hospitality" element={<Hospitality />} />
        <Route path="/facilities/medical" element={<Medical />} />

        
         {/* SPORTS */}
        <Route path="/facilities/sports/aerobics" element={<Aerobics />} />
        <Route path="/facilities/sports/badminton" element={<Badminton />} />
        <Route path="/facilities/sports/billiards" element={<Billiards />} />
        <Route path="/facilities/sports/carrom" element={<Carrom />} />
        <Route path="/facilities/sports/chess" element={<Chess />} />
        <Route path="/facilities/sports/gymnastics" element={<Gymnastics />} />
        <Route path="/facilities/sports/indoor-cricket" element={<IndoorCricketNets />} />
        <Route path="/facilities/sports/pistol-shooting" element={<PistolShooting />} />
        <Route path="/facilities/sports/squash" element={<Squash />} />
        <Route path="/facilities/sports/table-tennis" element={<TableTennis />} />
        <Route path="/facilities/sports/yoga" element={<Yoga />} />
        <Route path="/facilities/sports/swimming" element={<Swimming />} />
        <Route path="/facilities/sports/volleyball" element={<VolleyBall />} />
        <Route path="/facilities/sports/gym" element={<Gym />} />
        <Route path="/facilities/sports/lawntennis" element={<LawnTennis />} />
        <Route path="/facilities/sports/skating" element={<Skating />} />

         {/* RECREATION */}
        <Route path="/facilities/recreation/kid-zone" element={<KidsZone />} />
        <Route path="/facilities/recreation/gaming-zone" element={<GamingZone />} />
        <Route path="/facilities/recreation/library" element={<LibraryReading />} />

        {/* HOSPITALITY */}
        <Route path="/facilities/Hospitality/rooms" element={<Rooms />} />
        <Route path="/facilities/Hospitality/banquet" element={<HallBanquest />} />
        <Route path="/facilities/Hospitality/food" element={<FoodService />} />

      
        {/* MEDICAL CELL */}

        <Route path="/facilities/medical/info" element={<MedicalAssistant/>} />
        <Route path="/facilities/medical/first-aid" element={<FirstAidEmergency />} />
        <Route path="/facilities/medical/physio" element={<Physiotherapist />} />

        {/* Achievements */}
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/achievements/club" element={<ClubAchievement />} />
        <Route path="/achievements/member" element={<MemberAchievement />} />

        {/* Dashboards */}
        <Route path="/superadmin" element={<ProtectedRoute role="SUPER_ADMIN"><SuperAdminDashboard /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute role="ADMIN"><AdminDashboard /></ProtectedRoute>} />
        <Route path="/trainer" element={<ProtectedRoute role="TRAINER"><TrainerDashboard /></ProtectedRoute>} />
        <Route path="/nutritionist" element={<ProtectedRoute role="NUTRITIONIST"><NutritionDashboard /></ProtectedRoute>} />
        <Route path="/member-dashboard" element={<ProtectedRoute role="MEMBER"><MemberDashboard /></ProtectedRoute>} />

        {/* Member */}
        <Route path="/member/nutrition-consultation" element={<ProtectedRoute role="MEMBER"><NutritionConsultation /></ProtectedRoute>} />
        <Route path="/member/view-diet-plan" element={<ProtectedRoute role="MEMBER"><ViewDietPlan /></ProtectedRoute>} />
        <Route path="/member/workout/request" element={<ProtectedRoute role="MEMBER"><WorkoutRequest /></ProtectedRoute>} />
        <Route path="/member/workout/plan" element={<ProtectedRoute role="MEMBER"><WorkoutPlanView /></ProtectedRoute>} />

        {/* Shortcuts */}
        {/* <Route path="/member/MyBookings" element={<MyBookings />} /> */}
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/profile" element={<Profile />} />

        {/* <Route path="/classes" element={<Classes />} /> */}

        {/* ADMIN PAGES */} 
        <Route
          path="/admin/view-enquiry"
          element={
            <ProtectedRoute role="ADMIN">
              <ViewEnquiry />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/manage-members"
          element={
            <ProtectedRoute role="ADMIN">
              <ManageMembers />
            </ProtectedRoute>
          }
        />




        {/* Payment */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
  );
}

export default App;
