const React = require('react')

class isScrollBottom extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isScrollBottom: false
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll() {
    const windowHeight = 'innerHeight' in window
      ? window.innerHeight
      : document.documentElement.offsetHeight
    const body = document.body
    const html = document.documentElement
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    )

    const windowBottom = windowHeight + window.pageYOffset
    if (windowBottom >= docHeight) {
      this.setState({ isScrollBottom: true })
    } else {
      this.setState({ isScrollBottom: false })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}

const HOC = (composedComponent) => isScrollBottom

module.exports = HOC
