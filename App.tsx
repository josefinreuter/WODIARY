
import React, { Component } from 'react';
import { Platform, StyleSheet, View, ImageBackground } from 'react-native';
import { List, ListItem, Card, CardItem, Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Title, Left, Right, Body } from 'native-base';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <ImageBackground source={require('./assets/images/bar2.jpg')} style={{ width: '100%', height: '100%' }}>
          <Header>
            <Left />
            <Body>
              <Title>WODIARY</Title>
            </Body>
            <Right />
          </Header>

          <Content style={styles.background}>
            <Card>
              <CardItem header bordered>
                <Text>Workout Stats</Text>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text>
                    Test
                  </Text>
                </Body>
              </CardItem>
            </Card>

            <Card >
              <CardItem header bordered bordered>
                <Text>Latest Workouts</Text>
              </CardItem>
              <CardItem>
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
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
