import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";

const AnimatedFab = () => {
  const [visible, setVisible] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const handleClick = () => {
    window.location.href = "tel:+380730000000";
  };

  const handleClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setVisible(true);
    }, 3000);

    return () => clearTimeout(buttonTimer);
  }, []);

  useEffect(() => {
    if (visible) {
      const closeIconTimer = setTimeout(() => {
        setShowCloseIcon(true);
      }, 2000);
      return () => clearTimeout(closeIconTimer);
    } else {
      setShowCloseIcon(false);
    }
  }, [visible]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      style={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}
    >
      <Fab
        aria-label="call"
        onClick={handleClick}
        style={{
          backgroundColor: "var(--gray)",
          width: "50px",
          height: "50px",
          minHeight: "40px",
        }}
      >
        <PhoneIcon style={{ fontSize: "20px", color: "var(--white)" }} />
      </Fab>
      {showCloseIcon && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ position: "absolute", top: "-18px", right: "-18px" }}
        >
          <IconButton aria-label="close" onClick={handleClose}>
            <CloseIcon style={{ fontSize: "16px", color: "var(--gray)" }} />
          </IconButton>
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedFab;
