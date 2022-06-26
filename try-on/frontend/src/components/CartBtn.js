import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 15,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartBtn() {
  const state = useSelector((state) => state.manageItems);
  if (state.length === 0) {
    return (
      <IconButton aria-label="cart">
        <ShoppingCartIcon />
      </IconButton>
    );
  } else {
    return (
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={state.length} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    );
  }
}
