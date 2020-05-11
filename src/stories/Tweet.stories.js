import React from 'react';
import { Tweet } from '../Components/Tweet';

// story context
export default { title: 'Singular Tweet'}
// render 
export const emptyTweet = () => <Tweet />

export const populatedTweet = () => {
  const singleTweet = {
    name: 'Newton',
    handle: '@SirIsaac',
    profile_image: 'https://i.imgur.com/73hZDYK.png',
    text: 'If I have seen further it is by standing on the shoulders of giants',
    date: '10 mins ago'
  }
// spread single tweet props
  return <Tweet {...singleTweet}/>
}