import React,{Component} from 'react';
import Cards from './src/components/Cards';
import { View, Text } from 'react-native';
import {fetchdata} from './src/api/api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:{},
    };
  }
async componentDidMount(){
  const fetchedData = await fetchdata();
  console.log("fetched data",fetchedData);
  this.setState({
    data:fetchedData
  })
}
  render() {
    const { data } = this.state;
    console.log("State data",data);
    return (
      <View>
       <Cards  data={data}/>
      </View>
    );
  }
}

export default App;
