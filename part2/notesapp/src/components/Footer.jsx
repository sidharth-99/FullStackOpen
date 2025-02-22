const Footer = () => {
    const footerStyle = {
      color: 'green',
      fontStyle: 'italic',
      fontSize: 16,
    }
    //Added Style as an inline style, This is the best way when making components reusable
    return (
      <div style={footerStyle}>
        <br />
        <em>
          Note app, Department of Computer Science, University of Helsinki 2025
        </em>
      </div>
    )
  }
  
  export default Footer