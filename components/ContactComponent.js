import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { ScrollView } from 'react-native-gesture-handler';




class Contact extends Component {

    constructor (props){
        super(props); {
            this.state = {
                partners: PARTNERS
            };
        }
    }
    
    static navigationOptions = {
        title: 'Contact Us'
    }

    render () {
        return (
            <ScrollView>
                <Card title={'Contact Information'} wrapperStyle={{margin:20}}>
            <Text>1 Nucamp Way</Text>
            <Text>Seattle, WA 98001</Text>
            <Text style={{marginBottom: 10}}>U.S.A.</Text>
            <Text>Phone: 1-206-555-1234</Text>
            <Text>Email: campsites@nucamp.co</Text>
                </Card>
            </ScrollView>

        );
    }
}


export default Contact;