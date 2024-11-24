import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class App extends Component {
  // sempre que for manipular dados precisamos usar estados(states)
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Iniciar",
      ultimo: null
    };

    this.timer = null;


    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  // função para iniciar a contagem
  iniciar() {
    // condiçao para parar a contagem
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;

      this.setState({ botao: "Iniciar" })
    } else {
      // Começa a contar o timer
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100)

      this.setState({ botao: "Parar" });
    }
  }

  limpar() {
    // parar o timer
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: "Iniciar"
    })
  }
  render() {
    return (
      <View style={styles.container}>

        <Image source={require('./src/cronometro.png')} />
        <Text style={styles.timer}>{this.state.numero.toFixed(2)}</Text>
        {/* View dos botões */}
        <View style={styles.btnArea}>
          {/* Botão para iniciar a contagem */}
          <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          {/* Botão para limpar a contagem */}
          <TouchableOpacity style={styles.btn} onPress={this.limpar}>
            <Text style={styles.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaUltima}>
          <Text style={styles.textoTempo}>
            {this.state.ultimo > 0 ? "Ultimo tempo: " + this.state.ultimo.toFixed(2) + 's' : ""}
            </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#00aeef"
  },
  timer: {
    marginTop: -160,
    color: "#fff",
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#fff",
    alignItems: 'center',
    height: 40,
    margin: 17,
    borderRadius: 10
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  areaUltima:{
    marginTop: 60
  },
  textoTempo:{
    color: "#fff",
    fontSize: 25,
    fontStyle: 'italic'
  }
});