import { BooksAnimation } from 'components/LottieComponent';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='home-wrapper'>
    <BooksAnimation />
    <h3>Hi there!</h3>
    <p>This is a little site with lists of books!
      It's built to try out the fisrt API I built in <strong>Express.js. </strong>
      In the header, there are four categories of books, that display paths that I built in the API.
      <br />
      It's also possible <Link to="/books">click here</Link> to get to a long long list of books... There might be some loading time! When you're on that page, you can search for a specific author in the address field. 
      You can also use queries in the address field to find books! The options for this is language and rating rounded to whole and half numbers. Feel free to try it out!
    </p>
    </div>
  )
}
