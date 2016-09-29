import React from 'react'

const styles = {
  user: {
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    maxWidth: '90%'
  }
}

  export default ({ comment }) => {
  return (
    <div>
      <div style={styles.user}>{comment.user}</div>
      <div style={styles.text}>{comment.text}</div>
    </div>
  )
}

