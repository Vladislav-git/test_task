import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import CardActionArea from "@mui/material/CardActionArea";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

import { styled } from "@mui/material/styles";

import { CardsProps } from "../types/types";

const Item = styled(Grid)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Cards: React.FC<CardsProps> = ({ data, handleOpen }) => {
  return (
    <Grid
      container
      style={{ flexDirection: "row", padding: 50, justifyContent: "center" }}
    >
      {data.map((user, i) => (
        <Grid
          key={i}
          item
          xs={3.7}
          style={{
            borderRadius: 16,
            boxShadow: "0px 0px 20px #0000001A",
            margin: 15,
            padding: 13,
          }}
        >
          <CardActionArea
            style={{
              display: "flex",
              flexDirection: "column",
              height: 300,
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
            onClick={() => handleOpen(user)}
          >
            <Item
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <Typography style={styles.typographyTitle}>
                {user.name}
              </Typography>
            </Item>
            <Item
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <PhoneIphoneIcon sx={{ color: "#432EAB" }} />
              <Typography style={{ marginLeft: 5, color: "#8189A3" }}>
                {user.phone}
              </Typography>
            </Item>
            <Item
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
              }}
            >
              <EmailIcon sx={{ color: "#432EAB" }} />
              <Typography style={{ marginLeft: 10, color: "#8189A3" }}>
                {user.email}
              </Typography>
            </Item>
          </CardActionArea>
        </Grid>
      ))}
    </Grid>
  );
};

const styles = {
  typographyTitle: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "30px",
    color: "#262C40",
    fontFamily: "Proxima Nova",
  },
};

export default Cards;
