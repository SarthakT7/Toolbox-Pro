import { useState } from "react";
import { IconButton, Snackbar, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const CopyToClipboard = (props) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(props.data);
  };

  return (
    <>
        <Tooltip title="Copy">

      <IconButton onClick={handleClick} color="primary" style={props.style}>
        <ContentCopyIcon/>
      </IconButton>
      </Tooltip>
      <Snackbar
        message="Copied to clibboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default CopyToClipboard;
