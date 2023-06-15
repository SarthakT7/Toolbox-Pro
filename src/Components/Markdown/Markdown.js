import React, { useState } from "react";
import {
  Grid,
  TextField,
  Container,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { marked } from "marked";
const Markdown = () => {
  const [inputData, setInputData] = useState("");
  const [outputData, setOutputData] = useState("");

  const handleInputChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let htmlData = marked.parse(inputData);
    setOutputData(htmlData);
  };
  const styles = {
    box: {
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "4px",
      background: "#f9f9f9",
      innerHeight: "3"
    },
  };

  return (
    <>
      <Container>
        <Box textAlign="center" m={2}>
          <Button variant="contained" onClick={handleSubmit}>
            Show Preview
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Write Markdown"
              multiline
              rows={40}
              value={inputData}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box sx={{ height: '100%' }} style={styles.box}>
            <Typography
              contentEditable={false}
              style={styles.typography}
              dangerouslySetInnerHTML={{ __html: outputData }}
            />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Markdown;
