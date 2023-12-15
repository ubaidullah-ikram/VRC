import React, { useState } from 'react';
import { Box, Button, Grid, InputLabel, TextField } from '@mui/material';
import { DropzoneArea } from 'material-ui-dropzone'; // Install this package: npm install material-ui-dropzone

const FileUpload = ({ cancelUpload }) => {
  const [files, setFiles] = useState([]);
  const [fileDescription, setFileDescription] = useState('');

  const handleFileChange = (newFiles) => {
    setFiles(newFiles);
  };

  const handleFileDescriptionChange = (event) => {
    setFileDescription(event.target.value);
  };

  const handleCancel = () => {
    setFiles([]);
    setFileDescription('');
    cancelUpload(false);
  };

  const handleUpload = () => {
    // Handle file upload logic here
    console.log('Uploaded files:', files);
    console.log('File description:', fileDescription);
    // You can implement your upload logic (e.g., using fetch or Axios to send files to a server)
    // Reset state after successful upload
    setFiles([]);
    setFileDescription('');
  };

  return (
    <Box>
      <DropzoneArea
        acceptedFiles={['image/*', 'application/pdf', 'text/*']}
        filesLimit={1}
        onChange={handleFileChange}
      />
      <div style={{ marginTop: '50px' }}>
        <InputLabel>File Description (200)</InputLabel>
        <TextField
          label="File Description"
          value={fileDescription}
          onChange={handleFileDescriptionChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </div>
      <div style={{ maxWidth: '80%', margin: '0 auto', marginTop: '50px' }}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleUpload}>
              Upload
            </Button>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default FileUpload;
