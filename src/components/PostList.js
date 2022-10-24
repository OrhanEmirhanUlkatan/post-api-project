import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

<Box
  component="span"
  sx={{
    display: "inline-block",
    mx: "2px",
    transform: "scale(0.8)",
    flexGrow: 1,
  }}
></Box>;
const PostList = (props) => {
  const [postList, setPostList] = useState([]);
  // const URL = api_url
  useEffect(() => {
    axios.get(URL).then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    <Card>
      {postList.map((baslik) => {
        return (
          <CardContent>
            <Card
              sx={{
                backgroundColor: "#e0f7fa",
              }}
            >
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    JSON Placeholder Post Rest Api {baslik.id}
                  </Typography>
                </Toolbar>
              </AppBar>
              <Typography
                sx={{ mb: 1.5, mx: "2px" }}
                key={baslik.id}
              ></Typography>
              <Typography sx={{ ml: 1.5, mb: 1.5 }}>ID: {baslik.id}</Typography>
              <Typography sx={{ ml: 1.5, mb: 1.5 }}>
                TITLE: {baslik.title}
              </Typography>
              <Typography sx={{ mb: 1.5, fontSize: 16 }}>
                <CardActions>
                  <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    to={`/posts/${baslik.id}`}
                    onClick={() => {
                      alert(
                        "ID:" +
                          baslik.id +
                          " You are redirected to the detail page"
                      );
                    }}
                  >
                    LEARN MORE
                  </Button>
                </CardActions>
              </Typography>
            </Card>
          </CardContent>
        );
      })}
    </Card>
  );
};
export default PostList;
