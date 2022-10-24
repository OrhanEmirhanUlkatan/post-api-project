import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const PostDetail = (props) => {
  const { id } = props.match.params;
  const [postDetail, setPostDetail] = useState({});
  // const URL = api_url;
  useEffect(() => {
    axios
      .get(`${URL}${id}`)
      .then((response) => {
        setPostDetail(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "2px",
      transform: "scale(0.8)",
    }}
  />;

  return (
    <React.Fragment>
      <Card
        sx={{
          minWidth: 275,
          backgroundColor: "#aec4c7",
        }}
      >
        <CardContent>
          <Typography sx={{ mb: 1.5, color: "#000000" }} variant="h6">
            ID: {postDetail.id}
          </Typography>
          <Typography
            sx={{ mb: 1.5, fontSize: 16, color: "#000000" }}
            variant="h5"
          >
            TITLE: {postDetail.title}
          </Typography>
          <Typography
            sx={{ mb: 1.5, fontSize: 18, color: "#000000" }}
            variant="h4"
          >
            BODY: {postDetail.body}
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default PostDetail;
