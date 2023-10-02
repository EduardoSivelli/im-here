import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from '../../components/Participant';
import { styles } from "./styles";

export default function Home() {
  const [participants,setParticipants] = useState<string[]>([]); //Listagem dos participantes
  const [participantName, setParticipantName] = useState('') //Nome de um participante
  

  function handleParticipantAdd(){
    if(!participantName.trim()){
      return Alert.alert("Erro", "Digite um nome.")
    }
    
    if(participants.includes(participantName)){
     return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
    }
    
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('')
    
  }
  function handleParticipantRemove(name: string){
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim', 
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name)),
        
      },
      {
        text: 'Não', 
        style: 'cancel'
      }
    ]);
    
  }
  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.eventName}
        placeholder="Nome do Evento"
        placeholderTextColor={"#FFF"}
       />
     <TextInput 
        style={styles.eventDate}
        placeholder="Data do Evento"
        placeholderTextColor={"#6b6b6b"}
      />
      
      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome e Sobrenome do Participante"
          placeholderTextColor={"#808080"}
          onChangeText={setParticipantName}
          value={participantName}
        />

     
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
          key={item}
          name={item} 
          onRemove={() => handleParticipantRemove(item)} 
           />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
  )}
      />
      
      
      
    </View>
  )
}