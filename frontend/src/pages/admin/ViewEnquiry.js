import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";


import api from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";

export default function ViewEnquiry() {
  const [enquiries, setEnquiries] = useState([]);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [loading, setLoading] = useState(false);

  
  const fetchEnquiries = () => {
    fetch("http://localhost:4040/enquiry/all")
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setEnquiries(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchEnquiries();
  }, []);


  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this enquiry?")) {
      return;
    }

    try {
      const response = await fetch(`http://localhost:4040/enquiry/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setEnquiries(enquiries.filter((e) => e.id !== id));
        alert("Enquiry deleted successfully!");
      } else {
        alert("Failed to delete enquiry");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting enquiry");
    }
  };

  const handleReply = async (id) => {
    if (!replyText.trim()) {
      alert("Please enter a reply message");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4040/enquiry/${id}/reply`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ reply: replyText }),
      });

      if (response.ok) {
        alert("Reply sent successfully!");
        setReplyingTo(null);
        setReplyText("");
        fetchEnquiries(); // Refresh to show updated status
      } else {
        alert("Failed to send reply");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending reply");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleString();
  };

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "pending":
        return "#ffc107";
      case "replied":
        return "#28a745";
      case "resolved":
        return "#6c757d";
      default:
        return "#007bff";
    }
  };

  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>📩 Member Enquiries</h1>

        {enquiries.length === 0 && (
          <p style={styles.noData}>No enquiries found.</p>
        )}

        {enquiries.length > 0 && (
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead>
                <tr style={styles.headerRow}>
                  <th style={styles.th}>Name</th>
                  <th style={styles.th}>Email</th>
                  <th style={styles.th}>Message</th>
                  <th style={styles.th}>Status</th>
                  <th style={styles.th}>Date</th>
                  <th style={styles.th}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {enquiries.map((e) => (
                  <>
                    <tr key={e.id} style={styles.bodyRow}>
                      <td style={styles.td}>{e.name}</td>
                      <td style={styles.td}>{e.email}</td>
                      <td style={styles.td}>{e.message}</td>
                      <td style={styles.td}>
                        <span
                          style={{
                            ...styles.statusBadge,
                            backgroundColor: getStatusColor(e.status),
                          }}
                        >
                          {e.status || "Pending"}
                        </span>
                      </td>
                      <td style={styles.td}>{formatDate(e.createdAt)}</td>
                      <td style={styles.td}>
                        <div style={styles.actionButtons}>
                          <button
                            onClick={() => setReplyingTo(e.id)}
                            style={styles.replyButton}
                            disabled={replyingTo === e.id}
                          >
                            💬 Reply
                          </button>
                          <button
                            onClick={() => handleDelete(e.id)}
                            style={styles.deleteButton}
                          >
                            🗑️ Delete
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* Reply Section */}
                    {replyingTo === e.id && (
                      <tr key={`reply-${e.id}`}>
                        <td colSpan="6" style={styles.replySection}>
                          <div style={styles.replyContainer}>
                            <h4 style={styles.replyTitle}>
                              Reply to {e.name}
                            </h4>
                            <textarea
                              value={replyText}
                              onChange={(ev) => setReplyText(ev.target.value)}
                              placeholder="Type your reply here..."
                              style={styles.textarea}
                              rows="4"
                            />
                            <div style={styles.replyActions}>
                              <button
                                onClick={() => handleReply(e.id)}
                                style={styles.sendButton}
                                disabled={loading}
                              >
                                {loading ? "Sending..." : "📤 Send Reply"}
                              </button>
                              <button
                                onClick={() => {
                                  setReplyingTo(null);
                                  setReplyText("");
                                }}
                                style={styles.cancelButton}
                                disabled={loading}
                              >
                                ✖️ Cancel
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  title: {
    fontSize: "32px",
    marginBottom: "30px",
    color: "#333",
  },
  noData: {
    fontSize: "18px",
    color: "#666",
    textAlign: "center",
    marginTop: "50px",
  },
  tableContainer: {
    overflowX: "auto",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    borderRadius: "8px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    backgroundColor: "#fff",
  },
  headerRow: {
    backgroundColor: "#4a5568",
    color: "#fff",
  },
  th: {
    padding: "16px",
    textAlign: "left",
    fontWeight: "600",
    fontSize: "14px",
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
  statusBadge: {
    padding: "4px 12px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#fff",
    display: "inline-block",
    textTransform: "capitalize",
  },
  actionButtons: {
    display: "flex",
    gap: "8px",
  },
  replyButton: {
    padding: "8px 16px",
    backgroundColor: "#3182ce",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    transition: "background-color 0.2s",
  },
  deleteButton: {
    padding: "8px 16px",
    backgroundColor: "#e53e3e",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "500",
    transition: "background-color 0.2s",
  },
  replySection: {
    backgroundColor: "#f7fafc",
    padding: "0",
  },
  replyContainer: {
    padding: "24px",
  },
  replyTitle: {
    marginTop: "0",
    marginBottom: "16px",
    color: "#2d3748",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "12px",
    borderRadius: "6px",
    border: "1px solid #cbd5e0",
    fontSize: "14px",
    fontFamily: "inherit",
    resize: "vertical",
    marginBottom: "16px",
  },
  replyActions: {
    display: "flex",
    gap: "12px",
  },
  sendButton: {
    padding: "10px 24px",
    backgroundColor: "#48bb78",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
  cancelButton: {
    padding: "10px 24px",
    backgroundColor: "#718096",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "600",
    transition: "background-color 0.2s",
  },
};