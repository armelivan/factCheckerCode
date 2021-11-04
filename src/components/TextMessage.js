import PropTypes from 'prop-types'


const TextMessage = ({title}) => {
  return (
    <div className='TextMessage'>
      <h1>{title}</h1>
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
