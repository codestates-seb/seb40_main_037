import * as React from 'react';
// 더미 데이터
import dummy from '../../../data/data.json';
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
        {dummy.users.map(review => {
          return (
            <div>
              {review.reviews &&
                review.reviews.map(item => (
                  <div key={item.id}>
                    <ListItemButton onClick={handleClick}>
                      <ListItemIcon>
                        {item.type === 'beer' ? (
                          <img className="iconImg" src="/assets/icon/beer.png" />
                        ) : (
                          <img className="iconImg" src="/assets/icon/chicken.png" />
                        )}
                      </ListItemIcon>
                      <ListItemText primary={item.name} />
                      {open ? <ExpandMore /> : <ExpandLess />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnEnter={true}>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary={item.comment} />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </div>
                ))}
            </div>
          );
        })}
      </List>
    </ReviewBox>
  );
}
