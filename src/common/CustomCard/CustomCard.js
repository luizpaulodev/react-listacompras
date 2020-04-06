import React from "react";

import "./CustomCard.css";
import {
  Card,
  CardActionArea,
  CardContent,
  Divider,
  CardActions,
} from "@material-ui/core";

function CustomCard(props) {
  return (
    <div className={props.containerClass}>
      <Card className="card">
        <CardActionArea className="card-action-area">
          <CardContent className="card-content">{props.children}</CardContent>
        </CardActionArea>
        {props.footer && (
          <div>
            <Divider />
            <CardActions className="card-footer">{props.footer}</CardActions>
          </div>
        )}
      </Card>
    </div>
  );
}

export default CustomCard;
