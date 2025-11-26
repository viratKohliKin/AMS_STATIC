import React, { useState, useEffect } from "react";
import "./ProfilePage.css";
import { 
  FaUserCircle, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkedAlt, 
  FaCamera, 
  FaArrowLeft 
} from "react-icons/fa";

const ProfilePage = ({ onBack }) => {
  const [editMode, setEditMode] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const [isExiting, setIsExiting] = useState(false); // <-- new

  const defaultUser = {
    name: "John Doe",
    nickname: "Johnny",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    address: "No. 14, XYZ Street, Chennai, Tamil Nadu",
    joined: "March 2024",
    profileImage: null
  };

  const storedUser = JSON.parse(localStorage.getItem("userData") || "null");
  const [user, setUser] = useState(storedUser || defaultUser);
  const [tempUser, setTempUser] = useState(user);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(user));
  }, [user]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const imageUrl = URL.createObjectURL(file);
    setTempUser(prev => ({ ...prev, profileImage: imageUrl }));
  };

  const handleChange = (field, value) => {
    setTempUser(prev => ({ ...prev, [field]: value }));
  };

  const saveChanges = () => {
    setUser(tempUser);
    setEditMode(false);
  };

  const cancelChanges = () => {
    setTempUser(user);
    setEditMode(false);
  };

  const handleLogout = () => setShowLogoutConfirm(true);

  const confirmLogout = () => {
    setShowLogoutConfirm(false);
    alert("Logged out!");
  };

  // Slide-out handler
  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => {
      onBack(); // navigate after animation
    }, 300); // matches CSS animation duration
  };

  return (
    <div className={`profile-wrapper ${isExiting ? "slide-out" : "slide-in"}`}>
      <div className="profile-container">

        {/* BACK BUTTON */}
        <button className="back-btn" onClick={handleBack}>
          <FaArrowLeft /> Back
        </button>

        {/* PROFILE HEADER */}
        <div className="profile-header">
          <div className="profile-img-wrapper">
            {tempUser.profileImage ? (
              <img src={tempUser.profileImage} className="profile-img" />
            ) : (
              <FaUserCircle className="profile-icon" />
            )}

            {editMode && (
              <label className="upload-btn">
                <FaCamera />
                <input type="file" accept="image/*" onChange={handleImageUpload} />
              </label>
            )}
          </div>

          <h2>{user.name}</h2>
          <p className="join-date">Member since {user.joined}</p>
        </div>

        {/* PROFILE INFO */}
        <div className="profile-info">
          <div className="info-item">
            <FaUserCircle className="info-icon" />
            <div>
              <label>Nickname</label>
              {!editMode ? <p>{user.nickname}</p> : (
                <input 
                  value={tempUser.nickname}
                  onChange={(e) => handleChange("nickname", e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <label>Email</label>
              <p>{user.email}</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhoneAlt className="info-icon" />
            <div>
              <label>Phone Number</label>
              {!editMode ? <p>{user.phone}</p> : (
                <input 
                  value={tempUser.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              )}
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkedAlt className="info-icon" />
            <div>
              <label>Address</label>
              <p>{user.address}</p>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="profile-actions">
          {!editMode ? (
            <>
              <button className="btn edit-btn" onClick={() => setEditMode(true)}>Edit Profile</button>
              <button className="btn logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="btn edit-btn" onClick={saveChanges}>Save</button>
              <button className="btn cancel-btn" onClick={cancelChanges}>Cancel</button>
            </>
          )}
        </div>

        {/* LOGOUT CONFIRMATION */}
        {showLogoutConfirm && (
          <div className="logout-confirm-overlay">
            <div className="logout-confirm-box">
              <p>Are you sure you want to logout?</p>
              <div className="logout-confirm-buttons">
                <button className="btn logout-btn" onClick={confirmLogout}>Yes</button>
                <button className="btn cancel-btn" onClick={() => setShowLogoutConfirm(false)}>No</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
