import React from 'react';
import Icon from '@material-ui/core/Icon';
import './Tweet.css';

export const Tweet = (props) => {
  const {name, handle, profile_image, text, date} = props;
  return (
    <article className="tweet">
        <header>
          <div><img src={profile_image}/>{name}</div>
          <div><span>{handle}</span></div>
        </header>
        <p>
          {text}
        </p>
        <footer>
          <div>{date}</div>
          <div>
            <a href="#"><Icon>flag</Icon></a>
            <a href="#"><Icon>repeat</Icon></a>
            <a href="#"><Icon>favorite</Icon></a>
          </div>
        </footer>
      </article>
  )
}