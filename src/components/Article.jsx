import styles from '../App.module.css'
import codingImage from '../images/coding.png'
import cookingImage from '../images/cooking.png'
import footballImage from '../images/football.png'
import Moment from 'moment'

const Article = props => {
  return (
    <div class={styles.article}>
      {props.article.topic === 'coding' ? (
        <img className="topic-image" src={codingImage} alt="coding" />
      ) : props.article.topic === 'cooking' ? (
        <img className="topic-image" src={cookingImage} alt="cooking" />
      ) : (
        <img className="topic-image" src={footballImage} alt="football" />
      )}
      <h4>{props.article.title}</h4>
      <p>{props.article.body}</p>
      <div>
        <p className="comment">Comments: {props.article.comment_count}</p>
        <p>
          <span>Created</span>:{' '}
          {Moment(props.article.created_at).format('MMMM Do YYYY')}
        </p>
      </div>
    </div>
  )
}

export default Article
