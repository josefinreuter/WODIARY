
import React, { Component } from 'react';
import { Platform, StyleSheet, View, ImageBackground } from 'react-native';
import { List, ListItem, Card, CardItem, Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Title, Left, Right, Body } from 'native-base';


type Props = {};
export default class App extends Component<Props> {
  render() {
          const data = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]
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
            <Card  style={{ borderRadius: 8, borderMargin: 20, marginLeft: 10, marginRight: 10, marginTop: 15 }}>
              <CardItem header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                <Text>Workout Stats</Text>
              </CardItem>
              <CardItem bordered style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                <Body>
                 
                </Body>
              </CardItem>
            </Card>

            <Card style={{ borderRadius: 8, borderMargin: 20, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
              <CardItem header bordered style={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                <Text>Latest Workouts</Text>
              </CardItem>
              <CardItem bordered style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}>
                <Body>
                  <Text>
                    Test
                  </Text>
                </Body>
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
        backgroundColor: 'rgba(242, 242, 242,.6)'
    },
    card: {
        margin: 20
    }
});
