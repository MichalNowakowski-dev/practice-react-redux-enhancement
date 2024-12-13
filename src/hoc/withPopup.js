import React, { useState } from "react";

const withPopup = (WrappedComponent) => {
  return ({ backgroundColor = "rgba(0, 0, 0, 0.5)", ...props }) => {
    const [isVisible, setIsVisible] = useState(true);

    const closePopup = () => {
      setIsVisible(false);
    };

    return (
      <>
        {isVisible ? (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <div
              style={{
                position: "relative",
                background: "#fff",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            >
              <button
                onClick={closePopup}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "transparent",
                  border: "none",
                  fontSize: "16px",
                  cursor: "pointer",
                }}
              >
                ×
              </button>
              <WrappedComponent {...props} />
            </div>
          </div>
        ) : (
          <WrappedComponent {...props} />
        )}
      </>
    );
  };
};

export default withPopup;
