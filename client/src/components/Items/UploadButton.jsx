import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

export default function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={2} className="uploadButtons">
      <Button variant="contained" component="label" color="warning">
        Upload
        <input hidden />
        {/* Post 버튼으로 수정 */}
      </Button>
      <IconButton color="warning" aria-label="upload picture" component="label">
        <input hidden accept="image/*" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
  );
}
