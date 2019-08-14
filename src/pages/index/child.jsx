import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { isDev, isTest, isUat, isProd } from '../../utils'

class Child extends Component {
  config = {
    navigationBarTitleText: '子孙'
  }

  constructor(props) {
    super(props)
    this.state = {
      name: '222公司11111'
    }
    this.click = this.click.bind(this)
  }
  componentDidShow() {}
  componentDidHide() {}

  click() {
    // console.log('前面BUILD_ENV', process.env.BUILD_ENV)
    // this.props.test(process.env.BUILD_ENV)
    // console.log('后面BUILD_ENV', process.env.BUILD_ENV)
    console.log('isDev', isDev)
    console.log('isTest', isTest)
    console.log('isUat', isUat)
    console.log('isProd', isProd)
  }
  render() {
    return (
      <View className="child" onClick={this.click}>
        <Button>{this.props.btnName}</Button>
        <Text>{this.props.textName}</Text>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}
export default Child
