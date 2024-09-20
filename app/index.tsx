import { Link } from "expo-router";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Index() {
  const [url, setUrl] = useState<string>('')
  const [custom, setCustom] = useState<string>('')
  const [personalizada, setPersonalizada] = useState<string>('')

  function makeCustomUrl(){
    fetch(`http://ulvis.net/API/write/get?url=${url}?v=&custom=${custom}&private=1&type=json`)
    .then(res => res.json())
    .then(data => setPersonalizada(data.data.url))
  }

  return (
    <View
      style={{
        padding: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Text>
        Insira sua URL (incluindo https://)
      </Text>
      <TextInput
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 30, 
          marginBottom: 12
        }}
        placeholder="Seu link"
        value={url}
        onChangeText={setUrl}
        // onChange={(e) => setUrl(e.target.value)}
      />

      <Text>Insira sua personalização (ex: www.link/personalizacao)</Text>
      <TextInput
        style={{
          backgroundColor: 'white',
          width: '100%',
          height: 30, 
          marginBottom: 12
        }}
        placeholder="Sua personalização de URL"
        value={custom}
        onChangeText={setCustom}
        // onChange={(e) => setCustom(e.target.value)}
      />
      <Button
        title="GERAR"
        onPress={makeCustomUrl}
      />

      {
        personalizada &&
      <Text>
        Sua URL personalizada: {personalizada}
      </Text>
      }
    </View>
  );
}
