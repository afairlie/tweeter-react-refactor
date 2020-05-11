import React from 'react';
import { Tweet } from '../Components/Tweet'
import { TweetsContainer } from '../Components/TweetsContainer';

// story context
export default { title: 'Tweet Container'}
// render 
export const emptyContainer = () => <TweetsContainer />

// sample data
const initialTweets = [
  {
    name: 'Newton',
    handle: '@SirIsaac',
    profile_image: 'https://i.imgur.com/73hZDYK.png',
    text: 'If I have seen further it is by standing on the shoulders of giants',
    date: '10 mins ago'
  },
  {
    name: 'Descartes',
    handle: '@rd',
    profile_image: 'https://i.imgur.com/nlhLi3I.png',
    text: 'Je pense , donc je suis',
    date: '11 mins ago'
  }
]
// render
export const populatedContainer = () => <TweetsContainer tweets={initialTweets} />