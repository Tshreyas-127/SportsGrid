// import { useEffect, useState } from "react";
// import api from "../../api/axiosConfig";
// import { useNavigate } from "react-router-dom";

// export default function ManageMembers() {
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   // Load all members
//   const loadMembers = async () => {
//     try {
//       const res = await api.get("/api/admin/members");
//       setMembers(res.data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to load members");
//     }
//   };

//   useEffect(() => {
//     // UI Hardening (extra safety)
//     const role = localStorage.getItem("role");
//     if (role !== "ADMIN") {
//       navigate("/unauthorized");
//       return;
//     }

//     loadMembers();
//   }, []);

//   // Approve member
//   const handleApprove = async (id) => {
//     try {
//       await api.put(`/api/admin/members/approve/${id}`);
//       loadMembers();
//     } catch (err) {
//       alert("Failed to approve member");
//     }
//   };

//   // Deactivate member
//   const handleDeactivate = async (id) => {
//     try {
//       await api.put(`/api/admin/members/deactivate/${id}`);
//       loadMembers();
//     } catch (err) {
//       alert("Failed to deactivate member");
//     }
//   };

//   // Delete member
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this member?")) return;

//     try {
//       await api.delete(`/api/admin/members/${id}`);
//       loadMembers();
//     } catch (err) {
//       alert("Failed to delete member");
//     }
//   };

//   if (loading) {
//     return <h3 className="p-4">Loading members...</h3>;
//   }

//   return (
//     <div className="container-fluid p-4">
//       <h2 className="mb-4">Manage Members</h2>

//       <div className="card shadow-sm">
//         <div className="card-body">

//           <table className="table table-bordered table-hover text-center">
//             <thead className="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Status</th>
//                 <th style={{ width: "260px" }}>Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               {members.length === 0 ? (
//                 <tr>
//                   <td colSpan="6">No members found</td>
//                 </tr>
//               ) : (
//                 members.map((m) => (
//                   <tr key={m.userId}>
//                     <td>{m.userId}</td>
//                     <td>{m.name}</td>
//                     <td>{m.email}</td>
//                     <td>{m.role}</td>
//                     <td>
//                       {m.active ? (
//                         <span className="badge bg-success">Active</span>
//                       ) : (
//                         <span className="badge bg-danger">Inactive</span>
//                       )}
//                     </td>

//                     <td>
//                       {!m.active && (
//                         <button
//                           className="btn btn-sm btn-success me-2"
//                           onClick={() => handleApprove(m.userId)}
//                         >
//                           Approve
//                         </button>
//                       )}

//                       {m.active && (
//                         <button
//                           className="btn btn-sm btn-warning me-2"
//                           onClick={() => handleDeactivate(m.userId)}
//                         >
//                           Deactivate
//                         </button>
//                       )}

//                       <button
//                         className="btn btn-sm btn-danger"
//                         onClick={() => handleDelete(m.userId)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>

//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function ManageMembers() {
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();

  // Load all members
  const loadMembers = async () => {
    try {
      const res = await api.get("/api/admin/members");
      setMembers(res.data);
      setFilteredMembers(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      alert("Failed to load members");
      setLoading(false);
    }
  };

  useEffect(() => {
    // UI Hardening (extra safety)
    const role = localStorage.getItem("role");
    if (role !== "ADMIN") {
      navigate("/unauthorized");
      return;
    }

    loadMembers();
  }, []);

  // Filter members based on search and status
  useEffect(() => {
    let result = members;

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (m) =>
          m.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          m.userId?.toString().includes(searchTerm)
      );
    }

    // Filter by status
    if (filterStatus !== "all") {
      result = result.filter((m) =>
        filterStatus === "active" ? m.active : !m.active
      );
    }

    setFilteredMembers(result);
  }, [searchTerm, filterStatus, members]);

  // Approve member
  const handleApprove = async (id) => {
    try {
      await api.put(`/api/admin/members/approve/${id}`);
      alert("Member approved successfully!");
      loadMembers();
    } catch (err) {
      alert("Failed to approve member");
    }
  };

  // Deactivate member
  const handleDeactivate = async (id) => {
    if (!window.confirm("Are you sure you want to deactivate this member?"))
      return;

    try {
      await api.put(`/api/admin/members/deactivate/${id}`);
      alert("Member deactivated successfully!");
      loadMembers();
    } catch (err) {
      alert("Failed to deactivate member");
    }
  };

  // Delete member
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;

    try {
      await api.delete(`/api/admin/members/${id}`);
      alert("Member deleted successfully!");
      setSelectedMember(null);
      loadMembers();
    } catch (err) {
      alert("Failed to delete member");
    }
  };

  // View member details
  const handleViewDetails = (member) => {
    setSelectedMember(member);
  };

  const getStats = () => {
    return {
      total: members.length,
      active: members.filter((m) => m.active).length,
      inactive: members.filter((m) => !m.active).length,
      admins: members.filter((m) => m.role === "ADMIN").length,
    };
  };

  const stats = getStats();

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <h3 style={styles.loadingText}>Loading members...</h3>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.title}>👥 Manage Members</h2>
        <p style={styles.subtitle}>
          Approve, deactivate, or delete member accounts
        </p>
      </div>

      {/* Statistics Cards */}
      <div style={styles.statsGrid}>
        <div style={{ ...styles.statCard, ...styles.statCardBlue }}>
          <div style={styles.statIcon}>👤</div>
          <div style={styles.statContent}>
            <div style={styles.statValue}>{stats.total}</div>
            <div style={styles.statLabel}>Total Members</div>
          </div>
        </div>

        <div style={{ ...styles.statCard, ...styles.statCardGreen }}>
          <div style={styles.statIcon}>✅</div>
          <div style={styles.statContent}>
            <div style={styles.statValue}>{stats.active}</div>
            <div style={styles.statLabel}>Active</div>
          </div>
        </div>

        <div style={{ ...styles.statCard, ...styles.statCardRed }}>
          <div style={styles.statIcon}>⛔</div>
          <div style={styles.statContent}>
            <div style={styles.statValue}>{stats.inactive}</div>
            <div style={styles.statLabel}>Inactive</div>
          </div>
        </div>

        <div style={{ ...styles.statCard, ...styles.statCardPurple }}>
          <div style={styles.statIcon}>🔑</div>
          <div style={styles.statContent}>
            <div style={styles.statValue}>{stats.admins}</div>
            <div style={styles.statLabel}>Admins</div>
          </div>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div style={styles.controlsCard}>
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="🔍 Search by name, email, or ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>

        <div style={styles.filterContainer}>
          <label style={styles.filterLabel}>Filter by Status:</label>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            style={styles.filterSelect}
          >
            <option value="all">All Members</option>
            <option value="active">Active Only</option>
            <option value="inactive">Inactive Only</option>
          </select>
        </div>
      </div>

      {/* Members Table */}
      <div style={styles.tableCard}>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Email</th>
                <th style={styles.th}>Role</th>
                <th style={styles.th}>Status</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredMembers.length === 0 ? (
                <tr>
                  <td colSpan="6" style={styles.noData}>
                    {searchTerm || filterStatus !== "all"
                      ? "No members match your filters"
                      : "No members found"}
                  </td>
                </tr>
              ) : (
                filteredMembers.map((m) => (
                  <tr key={m.userId} style={styles.bodyRow}>
                    <td style={styles.td}>
                      <span style={styles.idBadge}>{m.userId}</span>
                    </td>
                    <td style={styles.td}>
                      <strong>{m.name}</strong>
                    </td>
                    <td style={styles.td}>{m.email}</td>
                    <td style={styles.td}>
                      <span
                        style={{
                          ...styles.roleBadge,
                          ...(m.role === "ADMIN"
                            ? styles.adminBadge
                            : styles.memberBadge),
                        }}
                      >
                        {m.role}
                      </span>
                    </td>
                    <td style={styles.td}>
                      {m.active ? (
                        <span style={styles.activeStatusBadge}>✓ Active</span>
                      ) : (
                        <span style={styles.inactiveStatusBadge}>
                          ✗ Inactive
                        </span>
                      )}
                    </td>
                    <td style={styles.td}>
                      <div style={styles.actionButtons}>
                        <button
                          onClick={() => handleViewDetails(m)}
                          style={styles.viewButton}
                          title="View Details"
                        >
                          👁️
                        </button>

                        {!m.active && (
                          <button
                            onClick={() => handleApprove(m.userId)}
                            style={styles.approveButton}
                            title="Approve Member"
                          >
                            ✓
                          </button>
                        )}

                        {m.active && m.role !== "ADMIN" && (
                          <button
                            onClick={() => handleDeactivate(m.userId)}
                            style={styles.deactivateButton}
                            title="Deactivate Member"
                          >
                            ⛔
                          </button>
                        )}

                        {m.role !== "ADMIN" && (
                          <button
                            onClick={() => handleDelete(m.userId)}
                            style={styles.deleteButton}
                            title="Delete Member"
                          >
                            🗑️
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Member Details Modal */}
      {selectedMember && (
        <div style={styles.modalOverlay} onClick={() => setSelectedMember(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div style={styles.modalHeader}>
              <h3 style={styles.modalTitle}>Member Details</h3>
              <button
                onClick={() => setSelectedMember(null)}
                style={styles.closeButton}
              >
                ✕
              </button>
            </div>

            <div style={styles.modalBody}>
              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>ID:</span>
                <span style={styles.detailValue}>{selectedMember.userId}</span>
              </div>

              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Name:</span>
                <span style={styles.detailValue}>{selectedMember.name}</span>
              </div>

              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Email:</span>
                <span style={styles.detailValue}>{selectedMember.email}</span>
              </div>

              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Role:</span>
                <span
                  style={{
                    ...styles.roleBadge,
                    ...(selectedMember.role === "ADMIN"
                      ? styles.adminBadge
                      : styles.memberBadge),
                  }}
                >
                  {selectedMember.role}
                </span>
              </div>

              <div style={styles.detailRow}>
                <span style={styles.detailLabel}>Status:</span>
                {selectedMember.active ? (
                  <span style={styles.activeStatusBadge}>✓ Active</span>
                ) : (
                  <span style={styles.inactiveStatusBadge}>✗ Inactive</span>
                )}
              </div>
            </div>

            <div style={styles.modalFooter}>
              {!selectedMember.active && (
                <button
                  onClick={() => {
                    handleApprove(selectedMember.userId);
                    setSelectedMember(null);
                  }}
                  style={styles.modalApproveButton}
                >
                  ✓ Approve Member
                </button>
              )}

              {selectedMember.active && selectedMember.role !== "ADMIN" && (
                <button
                  onClick={() => {
                    handleDeactivate(selectedMember.userId);
                    setSelectedMember(null);
                  }}
                  style={styles.modalDeactivateButton}
                >
                  ⛔ Deactivate Member
                </button>
              )}

              {selectedMember.role !== "ADMIN" && (
                <button
                  onClick={() => handleDelete(selectedMember.userId)}
                  style={styles.modalDeleteButton}
                >
                  🗑️ Delete Member
                </button>
              )}

              <button
                onClick={() => setSelectedMember(null)}
                style={styles.modalCancelButton}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    maxWidth: "1400px",
    margin: "0 auto",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "5px solid #e2e8f0",
    borderTop: "5px solid #3182ce",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "20px",
    color: "#4a5568",
  },
  header: {
    marginBottom: "30px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#1a202c",
    margin: "0 0 8px 0",
  },
  subtitle: {
    fontSize: "16px",
    color: "#718096",
    margin: 0,
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  statCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "24px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  statCardBlue: {
    borderLeft: "4px solid #3182ce",
  },
  statCardGreen: {
    borderLeft: "4px solid #48bb78",
  },
  statCardRed: {
    borderLeft: "4px solid #e53e3e",
  },
  statCardPurple: {
    borderLeft: "4px solid #805ad5",
  },
  statIcon: {
    fontSize: "36px",
    lineHeight: 1,
  },
  statContent: {
    flex: 1,
  },
  statValue: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#1a202c",
    lineHeight: 1.2,
  },
  statLabel: {
    fontSize: "14px",
    color: "#718096",
    marginTop: "4px",
  },
  controlsCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  searchContainer: {
    flex: "1 1 300px",
  },
  searchInput: {
    width: "100%",
    padding: "12px 16px",
    fontSize: "14px",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  filterContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  filterLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#4a5568",
  },
  filterSelect: {
    padding: "10px 16px",
    fontSize: "14px",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    outline: "none",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  tableCard: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    overflow: "hidden",
  },
  tableContainer: {
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  headerRow: {
    backgroundColor: "#2d3748",
    color: "#fff",
  },
  th: {
    padding: "16px",
    textAlign: "left",
    fontWeight: "600",
    fontSize: "13px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  bodyRow: {
    borderBottom: "1px solid #e2e8f0",
    transition: "background-color 0.2s",
  },
  td: {
    padding: "16px",
    fontSize: "14px",
    color: "#4a5568",
  },
  noData: {
    textAlign: "center",
    padding: "40px",
    color: "#a0aec0",
    fontSize: "16px",
  },
  idBadge: {
    backgroundColor: "#edf2f7",
    color: "#2d3748",
    padding: "4px 10px",
    borderRadius: "6px",
    fontSize: "13px",
    fontWeight: "600",
  },
  roleBadge: {
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase",
    display: "inline-block",
  },
  adminBadge: {
    backgroundColor: "#fed7d7",
    color: "#c53030",
  },
  memberBadge: {
    backgroundColor: "#bee3f8",
    color: "#2c5282",
  },
  activeStatusBadge: {
    backgroundColor: "#c6f6d5",
    color: "#22543d",
    padding: "6px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
    display: "inline-block",
  },
  inactiveStatusBadge: {
    backgroundColor: "#fed7d7",
    color: "#742a2a",
    padding: "6px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
    display: "inline-block",
  },
  actionButtons: {
    display: "flex",
    gap: "8px",
  },
  viewButton: {
    padding: "8px 12px",
    backgroundColor: "#4299e1",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s",
  },
  approveButton: {
    padding: "8px 12px",
    backgroundColor: "#48bb78",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
  deactivateButton: {
    padding: "8px 12px",
    backgroundColor: "#ed8936",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s",
  },
  deleteButton: {
    padding: "8px 12px",
    backgroundColor: "#e53e3e",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.2s",
  },
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    maxWidth: "600px",
    width: "90%",
    maxHeight: "90vh",
    overflow: "auto",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px",
    borderBottom: "1px solid #e2e8f0",
  },
  modalTitle: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "700",
    color: "#1a202c",
  },
  closeButton: {
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    color: "#a0aec0",
    padding: "0",
    width: "32px",
    height: "32px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "6px",
    transition: "background-color 0.2s",
  },
  modalBody: {
    padding: "24px",
  },
  detailRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
    borderBottom: "1px solid #f7fafc",
  },
  detailLabel: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#718096",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  detailValue: {
    fontSize: "16px",
    color: "#2d3748",
    fontWeight: "500",
  },
  modalFooter: {
    padding: "24px",
    borderTop: "1px solid #e2e8f0",
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  modalApproveButton: {
    padding: "12px 24px",
    backgroundColor: "#48bb78",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
  modalDeactivateButton: {
    padding: "12px 24px",
    backgroundColor: "#ed8936",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
  modalDeleteButton: {
    padding: "12px 24px",
    backgroundColor: "#e53e3e",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
  modalCancelButton: {
    padding: "12px 24px",
    backgroundColor: "#edf2f7",
    color: "#2d3748",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
};