
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import ImageButton from 'react-native-img-button';

const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 60,
        borderRadius: 30,
        width: 60,
        margin:20
    },
    pad: {
        flex: 1,
        margin: 20,
    },
    btn: {
        fontFamily: 'Droid Sans Mono',
        fontSize: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 35,
        textAlign: 'center',
        margin: 10,
    },
    header: {
        fontSize: 30,
        fontWeight: '500',
    },
    pin: {
        fontFamily: 'Droid Sans Mono',
        fontSize: 40,
        fontWeight: '500',
    },  
    container: {
        flex: 1,
    },
    btnC: {
        width: 50,
        height: 50,
    }

});

const MAX_LENGTH = 4;

function makeDots(num) {
    let ret = '';
    while (num > 0) {
        ret += ' __ ';
        num--;
    }
    return ret;
}

export default class Pin extends Component {
    state = {value: ''};

    handleClear() {
        this.setState({value: ''});
    }

    handlePress(num) {
        let {value} = this.state;
        value += String(num);

        this.setState({value});

        if (value.length == MAX_LENGTH) {
            this.props.onSubmit(value);
            this.props.onDone();
        }
    }

    handleRemove() {
        const {value} = this.state;
        this.setState({value: value.substr(0, value.length - 1)});
    }

    renderButton(num) {        
        // return (
        //     <View style={ styles.container }>
        //         <ImageButton
        //           style={ styles.btnC }
        //           appearance={ {
        //             normal: source={{uri: 'http://placehold.it/100x100'}},
        //             highlight: source={{uri: 'http://placehold.it/100x100'}}
        //           } }
        //           onPress={()=> this.handlePress(num)}/>
        //       </View>
        // );
        return (<Image style={styles.image} source={{uri: 'http://placehold.it/60x60'}}/> );
        
    };

    render() {
        const {value} = this.state;
        const marks = value.replace(/./g, '  ●  ');
        const dots = makeDots(MAX_LENGTH - value.length);

        return (<View style={styles.pad} >
         
            <View style={styles.row} >
                <Text style={styles.pin} >{marks}{dots}</Text>
            </View>

            <View style={styles.row} >
                {this.renderButton(1)}
                {this.renderButton(2)}
                {this.renderButton(3)}
            </View>

            <View style={styles.row} >
                {this.renderButton(4)}
                {this.renderButton(5)}
                {this.renderButton(6)}
            </View>

            <View style={styles.row} >
                {this.renderButton(7)}
                {this.renderButton(8)}
                {this.renderButton(9)}
            </View>

            <View style={styles.row} >
                <Text onPress={()=> this.handleClear()} style={styles.btn}>C</Text>
                {this.renderButton(0)}
                <Text onPress={()=> this.handleRemove()} style={styles.btn}>{'<'}</Text>
            </View>
        </View>);
    }
}