import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt="Kim Taehyung"
            src="https://img.favpng.com/15/7/19/kim-taehyung-bts-love-yourself-her-wings-k-pop-png-favpng-6w5G2U9Ykmb4jDL82TaCqwPyX.jpg"
          />
          <Avatar
            alt="Kim Seokjin"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHO3tz3Y96BQKOFAkxCTOZuXW3ZaTf6iNUH-6fa3197cNj8cG"
          />
          <Avatar
            alt="Jung hoseok"
            src="https://media.admagazine.com/photos/6227f92f4ae92b36fda3cf28/1:1/w_2000,h_2000,c_limit/J-Hope.jpg"
          />
          <Avatar
            alt="Park Jimin"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-T9TUiPLxGnUP0raZhWYsbwEcDvir1xMnw7lBb_OhDo7_FguXYSoYg&s"
          />
          <Avatar
            alt="Kim Namjoon"
            src="https://cdn.milenio.com/uploads/media/2021/09/11/kim-namjoon-integrante-bts-celebra_0_0_1200_747.jpg"
          />
          <Avatar
            alt="Min Yoongi"
            src="https://www.allkpop.com/upload/2022/09/content/271813/1664316805-untitled-1.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://pbs.twimg.com/media/Ff5XdonXwAQ5289?format=jpg&name=small"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Jeon_Jungkook_at_the_White_House%2C_31_May_2022.jpg"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://assets.teenvogue.com/photos/62a33c1eaec7083d741607c1/master/pass/BTS_Proof%20Concept%20Photo_Door%20ver._RM%20(3).jpg"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="https://assets.teenvogue.com/photos/62a33c1eaec7083d741607c1/master/pass/BTS_Proof%20Concept%20Photo_Door%20ver._RM%20(3).jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Kim Namjoon"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Hello
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4-T9TUiPLxGnUP0raZhWYsbwEcDvir1xMnw7lBb_OhDo7_FguXYSoYg&s" />
            </ListItemAvatar>
            <ListItemText
              primary="Park Jimin"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBHO3tz3Y96BQKOFAkxCTOZuXW3ZaTf6iNUH-6fa3197cNj8cG" />
            </ListItemAvatar>
            <ListItemText
              primary="Kim Seokjin"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
