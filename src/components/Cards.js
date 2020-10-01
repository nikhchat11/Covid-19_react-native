import React from 'react';
import { View, Text } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const Cards = ({data}) => {

console.log("Main data", data);
    const {confirmed , deaths, recovered , lastUpdate} = data;
    //console.log("confirmed value",confirmed.value);

if(!confirmed){
return <Text>Loading...........</Text>
}
    return (
<View>
   <Card>
    <Card.Title title="Confirmed Cases" subtitle={new Date(lastUpdate).toDateString()} left={LeftContent} />
    <Card.Content>
      <Title>Total No. of Confirmed Cases</Title>
      <Paragraph>{confirmed.value}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>View details</Button>
    </Card.Actions>
  </Card>

  <Card>
    <Card.Title title="Death Cases" subtitle={new Date(lastUpdate).toDateString()} left={LeftContent} />
    <Card.Content>
      <Title>Total No. of Death Cases</Title>
      <Paragraph>{deaths.value}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>View details</Button>
    </Card.Actions>
  </Card>

  <Card>
    <Card.Title title="Recovered Cases" subtitle={new Date(lastUpdate).toDateString()} left={LeftContent} />
    <Card.Content>
      <Title>Total No. of Recovered Cases</Title>
      <Paragraph>{recovered.value}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button>View details</Button>
    </Card.Actions>
  </Card>

        </View>
    )

}


export default Cards;

