import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
      <Link to={props.link}>
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
      </Link>
    </div>
  );
}

CustomCard.propTypes = {
  link: PropTypes.string,
  containerClass: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  footer: PropTypes.element,
};

export default CustomCard;
