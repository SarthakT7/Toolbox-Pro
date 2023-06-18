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
  const [isEmpty, setEmpty] = useState(true);
  const [isEmptyFlag, setEmptyFlag] = useState(false);

  const handleInputChange = (event) => {
    const data = event.target.value;
    setInputData(data);

    if (data === "") setEmpty(true);
    else setEmpty(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      if (isEmpty) {
        setEmptyFlag(true);
        return;
      }
      setEmptyFlag(false);
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
              sx={{ height: isValidJSON && !isEmptyFlag ? "100%" : "8%" }}
              style={styles.box}
            >
              {isValidJSON && !isEmptyFlag && (
                <>
                  <CopyToClipboard style={styles.copy} data={outputData} />
                  <Typography>
                    <pre>{outputData}</pre>
                  </Typography>
                </>
              )}
              {!isValidJSON && !isEmptyFlag && (
                <Alert severity="error">
                  JSON format is invalid. Check it and try again!
                </Alert>
              )}
              {isEmptyFlag && (
                <Alert severity="error">No JSON content found. Please enter valid JSON data.</Alert>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Jsonformatter;
