import { useNavigate } from 'react-router-dom';
import { MixDelete } from '../../util/fetchMix';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function MixDetailDelete() {
  const navigate = useNavigate();
  const onClickDelete = id => {
    MixDelete(id).then(res => {
      navigate('/MixList');
    });
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            이 게시물을 삭제하시겠습니까?
          </Typography>
          <Button onClick={() => onClickDelete(postId)}>삭제하기</Button>
          <Button onClick={() => hideModal(true)}>취소하기</Button>
        </Box>
      </Modal>
    </div>
  );
}

export default MixDetailDelete;
