import React, { useState, Fragment } from 'react';
import Icon from '@material-ui/core/Icon';
import './TweetForm.css';

export const TweetForm = (props) => {
  const { addNewTweet } = props
  // useState always returns array with currentState, and function to set state. useState() sets initial state on load
  const [tweetText, setTweetText] = useState('');
  const tweetRemainingLength = 140 - tweetText.length;
  const spanStyle = {color: tweetRemainingLength >=0 ? 'black' : 'red'}

  const submitTweet = event => {
    event.preventDefault()
    // addNewTweet function given as prop to submitTweet in App.js
    if (tweetRemainingLength >= 0 && tweetRemainingLength < 140) {
      addNewTweet(tweetText)
      setTweetText('')
    }
  }

  return (
  <>
    <section hidden className='error-container'>
      <div className='error-message'>
        <Icon>error_outline</Icon>
        <p>error message</p>
        <Icon>error_outline</Icon>
      </div>   
    </section>
    <section className="new-tweet">
      <form onSubmit={submitTweet} method='POST' action='/tweets/'>
          <textarea 
          name="text" 
          id="tweet-text" 
          placeholder='What are you humming about?'
          value={tweetText}
          // what's this doing?
          onChange={(event) => setTweetText(event.target.value)}
          >
          </textarea>
        <footer>
          <button type="submit">Tweet</button>
          <output name="counter" className="counter" style={spanStyle} htmlFor="tweet-text">{tweetRemainingLength}</output>
        </footer>
      </form>
    </section>
  </>
  )
}