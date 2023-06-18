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
import xmlFormat from "xml-formatter";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
const XmlFormatter = () => {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");
  const [isValidXML, setValidity] = useState(true);
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
      const xmlData = xmlFormat(inputData);
      setOutputData(xmlData);
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
            Show Formatted XML
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Insert dirty XML"
              multiline
              rows={40}
              value={inputData}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: isValidXML && !isEmptyFlag ? "100%" : "8%" }} style={styles.box}>
              {isValidXML && !isEmptyFlag && (
                <>
                  <CopyToClipboard style={styles.copy} data={outputData} />
                  <Typography>
                    <pre>{outputData}</pre>
                  </Typography>
                </>
              )}
              {!isValidXML && !isEmptyFlag && (
                <Alert severity="error">
                  XML format is invalid. Check it and try again!
                </Alert>
              )}

              {isEmptyFlag && (
                <Alert severity="error">No XML content found. Please enter valid XML data.</Alert>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default XmlFormatter;
