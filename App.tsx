
import React, { Component } from 'react';
import { Platform, StyleSheet, View, ImageBackground } from 'react-native';
import { List, ListItem, Card, CardItem, Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Title, Left, Right, Body } from 'native-base';
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Chart from './Chart';

type Props = {};
export default class App extends Component<Props> {
  render() {

    return (
      <Container>
        <ImageBackground source={require('./src/assets/images/bar2.jpg')} style={{ width: '100%', height: '100%' }}>
          <Header>
            <Left />
            <Body>
              <Title>WODIARY</Title>
            </Body>
            <Right />
          </Header>

          <Content style={styles.background}>
            <Card style={{ marginBottom: 20, marginTop: 20 }}>
              <CardItem header style={{ paddingBottom: 0 }}>
                <Text>Weekly Workouts</Text>
              </CardItem>
              <Chart />
            </Card>

            <Card style={{ marginBottom: 20 }}>
              <CardItem style={{ paddingRight: 0, paddingLeft: 0, paddingBottom: 0, paddingTop: 0 }}>
                <List style={{ width: '100%' }}>
                  <ListItem itemDivider style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>22.2.2019</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>Fran</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>4.55 minutes</Text>
                  </ListItem>
                  <ListItem itemDivider style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>12.1.2019</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>1RM Back Squat</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>90kg</Text>
                  </ListItem>
                  <ListItem itemDivider style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>12.1.2019</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>1RM Back Squat</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>90kg</Text>
                  </ListItem>
                  <ListItem itemDivider style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>12.1.2019</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>1RM Back Squat</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>90kg</Text>
                  </ListItem>
                  <ListItem itemDivider style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text style={{ fontWeight: 'bold' }}>12.1.2019</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>1RM Back Squat</Text>
                  </ListItem>
                  <ListItem style={{ marginLeft: 0, paddingLeft: 20 }}>
                    <Text>90kg</Text>
                  </ListItem>
                </List>

              </CardItem>
            </Card>

          </Content>

          <Footer>
            <FooterTab>
              <Button vertical>
                <Icon name="home" />
              </Button>
              <Button vertical>
                <Icon name="add" />
              </Button>
              <Button vertical>
                <Icon type="MaterialCommunityIcons" name="chart-line-variant" />
              </Button>
              <Button vertical>
                <Icon active name="book" />
              </Button>
              <Button vertical>
                <Icon name="ios-more" />
              </Button>
            </FooterTab>
          </Footer>
        </ImageBackground>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(242, 242, 242,0.3)'
  },
  card: {
    margin: 20
  }
});
