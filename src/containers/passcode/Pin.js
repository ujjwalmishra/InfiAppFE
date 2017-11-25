
import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    Image
} from 'react-native';


const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pad: {
        flex: 1,
        margin: 20,
    },
    btn: {
        fontFamily: 'Droid Sans Mono',
        fontSize: 24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 0,
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
    numberCircle : {
        borderRadius: 30,

        width: 60,
        height: 60,
        padding: 10,
        margin: 20,

        backgroundColor: '#fff',
        borderWidth: 2,
        textAlign: 'center',

        fontSize: 22
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

        if(value.length == MAX_LENGTH) return;

        value += String(num);

        this.setState({value});

        if (value.length == MAX_LENGTH) {
            this.props.onEnter(value);
           // this.props.onDone();
        }
    }

    handleRemove() {
        const {value} = this.state;
        this.setState({value: value.substr(0, value.length - 1)});
    }

    renderButton(num) {        

        return (<View ><Text onPress={()=> this.handlePress(num)} style={styles.numberCircle} >{num}</Text></View>);
        
    };

    componentDidMount = () => {
        this.handleClear();
    }

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
                <Text onPress={()=> this.handleClear()} style={styles.btn}>{' .... ..  '}</Text>
                {this.renderButton(0)}
                <Text onPress={()=> this.handleRemove()} style={styles.btn}>{'Delete'}</Text>
            </View>
        </View>);
    }
}