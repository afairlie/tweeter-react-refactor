import React, { useState } from 'react';
import './App.css';
import { Navigation } from './Components/Navigation';
import { Profile } from './Components/Profile';
import { TweetForm } from './Components/TweetForm';
import { Tweet } from './Components/Tweet';
import { TweetsContainer } from './Components/TweetsContainer';

// jsx - build individual components in independent files.
// props are properties given to a component

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

function App() {
  // app watching state change of tweets array, because TweetForm can change tweets, and TweetsContainer needs to be fed tweets
  const [tweets, setTweetData] = useState(initialTweets);

  const addNewTweet = (text) => {
    const newTweet = {
      name: 'Ariane',
      handle: '@a_fairlie',
      profile_image: 'https://i.imgur.com/2WZtOD6.png',
      text,
      date: '0 mins'
    }

    setTweetData([newTweet, ...tweets]);
  }

  return (
    <div className='App'>
     <Navigation />
     <Profile />
     <TweetForm 
      addNewTweet={addNewTweet}
     />
     <TweetsContainer tweets={tweets}/>
    </div>
  );
}

export default App;
