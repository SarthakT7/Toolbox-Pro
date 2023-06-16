import React, { useState } from "react";
import {
  Grid,
  TextField,
  Container,
  Button,
  Box,
  Typography,
} from "@mui/material";
import Alert from "@mui/material/Alert";

import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
const Jsonformatter = () => {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");
  const [isValidJSON, setValidity] = useState(true);
  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const jsonData = JSON.parse(inputData);
      setOutputData(JSON.stringify(jsonData, null, 2));
      setValidity(true);
    } catch (error) {
      setValidity(false);
    }
  };
  const styles = {
    box: {
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "4px",
      background: "#f9f9f9",
      innerHeight: "3",
    },
  };

  return (
    <>
      <Container>
        <Box textAlign="center" m={2}>
          <Button variant="contained" onClick={handleSubmit}>
            Show Formatted JSON
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Insert dirty JSON"
              multiline
              rows={40}
              value={inputData}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{ height: isValidJSON ? "100%" : "8%" }}
              style={styles.box}
            >
              {isValidJSON && (
                <>
                <CopyToClipboard style={styles.copy} data={outputData} />
                  <Typography>
                    <pre>{outputData}</pre>
                  </Typography>
                </>
              )}
              {!isValidJSON && (
                <Alert severity="error">
                  JSON format is invalid. Check it and try again!
                </Alert>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Jsonformatter;
