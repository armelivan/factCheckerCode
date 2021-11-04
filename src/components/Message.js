const { default: TextMessage } = require("./TextMessage")

const Message = () => {
  const m_values = {
    'default':'Please enter your Url value',
    'loading':'The value is being loaded',
    'valueFound':'The value was founded',
    'noValueFound': 'No value was found'
  }
  return (
    <div className='Message'>
      {/*<TextMessage title ={tt}/>*/}
      <TextMessage />
    </div>
  )
}

export default Message
