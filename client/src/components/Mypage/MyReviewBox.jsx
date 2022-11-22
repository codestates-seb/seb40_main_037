import * as React from 'react';
// 스타일
import styled from 'styled-components';
import './myPageStyle.css';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function MyReviewBox() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const ReviewBox = styled.div`
    width: 100%;
  `;

  return (
    <ReviewBox>
      <List
        className="myReviewList"
        sx={{
          bgcolor: 'background.white',
          margin: '80px auto',
          border: '1px solid gray',
          borderRadius: '30px',
          padding: '20px',
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            My Reivew Lists / 아이콘은 맥주 푸드로 나누면 좋을듯
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <img className="iconImg" src="../../src/assets/icon/beer.png" />
          </ListItemIcon>
          <ListItemText primary="CASS" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <img className="iconImg" src="../../src/assets/icon/chicken.png" />
          </ListItemIcon>
          <ListItemText primary="CHICKEN" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <img className="iconImg" src="../../src/assets/icon/beer.png" />
          </ListItemIcon>
          <ListItemText primary="HITE" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="작성한 코멘트 나올예정 / 클릭시 상세 제품페이지로 이동?" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </ReviewBox>
  );
}
