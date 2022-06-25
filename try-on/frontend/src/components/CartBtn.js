import * as React from "react";
import Badge from "@mui/material/Badge";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function CartBtn() {
  const length = 1;

  {
    if (length === 0) {
      return (
        <Badge
          sx={{
            m: 2,
          }}
          color="secondary"
        >
          <AiOutlineShoppingCart size={25} />
        </Badge>
      );
    } else {
      return (
        <Badge
          variant="dot"
          badgeContent=" "
          sx={{
            m: 2,
          }}
          color="secondary"
        >
          <AiOutlineShoppingCart size={25} />
        </Badge>
      );
    }
  }
}
