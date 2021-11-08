const { default: TextMessage } = require("./TextMessage")

const Message = (props) => {
 return (
    <div className='Message'>
      {/*<TextMessage title ={tt}/>*/}
     {/*<h2>{props.text}</h2>*/}
      <TextMessage text={props.text} />
    </div>
  )
}

export default Message
