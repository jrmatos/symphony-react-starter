import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getPosts } from '../actions/posts'
import Posts from '../components/Posts'

const mapStateToProps = ({ posts }) => ({ posts })

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPosts }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
