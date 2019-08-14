import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../store/actions/gun'
import Child from './child'

import './index.scss'

// @connect(
//   ({ counter }) => ({
//     counter
//   }),
//   dispatch => ({
//     add() {
//       dispatch(add())
//     },
//     dec() {
//       dispatch(minus())
//     },
//     asyncAdd() {
//       dispatch(asyncAdd())
//     }
//   })
// )
@connect(
  ({ gunReducer }) => ({
    num: gunReducer.num
  }),
  { add, minus, asyncAdd }
)
class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      name: 'gsp'
    }
    this.test = this.test.bind(this)
  }

  async componentDidMount() {
    await this.setState({
      name: 'gsp1'
    })
    console.log(this.state.name)
  }

  componentDidShow() {}

  componentDidHide() {}

  test(v) {
    console.log('组件fun', v)
  }

  render() {
    return (
      <View className="index">
        <Button className="add_btn" onClick={this.props.add}>
          +
        </Button>
        <Button className="dec_btn" onClick={this.props.minus}>
          -
        </Button>
        <Button className="dec_btn" onClick={this.props.asyncAdd}>
          async
        </Button>
        <View>
          <Text>{this.props.num}</Text>
        </View>
        <View>
          <Text>Hello, World3333</Text>
        </View>
        <Child btnName={'按钮'} textName={'文字'} test={this.test} />
      </View>
    )
  }
}

export default Index
