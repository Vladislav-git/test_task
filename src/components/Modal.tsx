import React from "react";

import Typography from "@mui/material/Typography";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { ModalProps } from "../types/types";

const Modal: React.FC<ModalProps> = ({
  modal,
  handleClose,
  selectedUserData,
}) => {
  return (
    <Dialog onClose={handleClose} open={modal} maxWidth={"sm"}>
      <DialogTitle sx={{ m: 0, p: 2 }} style={styles.typographyTitle}>
        {selectedUserData.name}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "black",
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography gutterBottom style={styles.typographyNormal}>
              Телефон:
            </Typography>
            <Typography
              gutterBottom
              style={{
                ...styles.typographyLight,
                marginLeft: 110,
              }}
            >
              {selectedUserData.phone}
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography gutterBottom style={styles.typographyNormal}>
              Почта:
            </Typography>
            <Typography
              gutterBottom
              style={{
                ...styles.typographyLight,
                marginLeft: 130,
              }}
            >
              {selectedUserData.email}
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography gutterBottom style={styles.typographyNormal}>
              Дата приема:
            </Typography>
            <Typography
              gutterBottom
              style={{
                ...styles.typographyLight,
                marginLeft: 80,
              }}
            >
              {selectedUserData.hire_date}
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography gutterBottom style={styles.typographyNormal}>
              Должность:
            </Typography>
            <Typography
              gutterBottom
              style={{
                ...styles.typographyLight,
                marginLeft: 90,
              }}
            >
              {selectedUserData.position_name}
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Typography gutterBottom style={styles.typographyNormal}>
              Подразделение:
            </Typography>
            <Typography
              style={{
                ...styles.typographyLight,
                marginLeft: 60,
              }}
            >
              {selectedUserData.department}
            </Typography>
          </div>
        </div>
        <Typography
          gutterBottom
          style={{
            ...styles.typographyNormal,
            marginTop: 30,
          }}
        >
          Дополнительная информация:
        </Typography>
        <Typography gutterBottom style={styles.typographyLight}>
          {selectedUserData.address}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;

const styles = {
  typographyLight: {
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#8189A3",
    fontFamily: "Proxima Nova",
  },
  typographyNormal: {
    fontWeight: "400",
    fontSize: "18px",
    lineHeight: "24px",
    color: "#262C40",
    fontFamily: "Proxima Nova",
  },
  typographyTitle: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#262C40",
    fontFamily: "Proxima Nova",
  },
};
