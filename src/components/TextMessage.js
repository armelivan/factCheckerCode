import PropTypes from 'prop-types'


const TextMessage = (props) => {
  return (
    <div className='TextMessage'>
      <h1>{props.text}</h1>
    </div>
  )
}

TextMessage.defaultProps = {
  title: 'Please enter  your url'
}
TextMessage.propTypes = {
  title: PropTypes.string,
} 

export default TextMessage
