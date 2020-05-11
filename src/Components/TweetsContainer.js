import React from 'react';
import { Tweet } from './Tweet';
import './TweetForm.css';

export const TweetsContainer = (props) => {
  const {tweets} = props

  // if tweets here
  if (!tweets) {
    return <p className='error-message'>you don't have any tweets :(</p>;
  }
  // could also do for loop here and output array in <section>, but map preferred
  const renderedTweets = tweets.map((tweet, index) => {
    const {name, handle, profile_image, text, date} = tweet;
    return <Tweet
      //  remember to give keys to each instance of a component in a multi-component container
    key={index}
    name={name}
    handle={handle}
    profile_image={profile_image}
    text={text}
    date={date}
    />
  })

  return <section className='tweets-container'>
    {renderedTweets}
  </section>;
}