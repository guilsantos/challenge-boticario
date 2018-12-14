import {
  compose,
  lifecycle,
  withState
} from 'recompose'
import axios from 'axios'

const URL = "products.json"

const enhancer = compose(
  withState('products', 'setProducts', []),
  lifecycle({
    componentDidMount() {
      axios.get(URL)
        .then(res => this.props.setProducts(res.data))
    }
  }),
)

export default enhancer
