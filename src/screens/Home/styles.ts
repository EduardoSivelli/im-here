import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  }, 
  eventName: {
    color: '#FDFCFE',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6b6b6b',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    color: '#131016',
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#00FA9A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%', //Utiliza dentro de aspas pois a % é um caracter de texto
    flexDirection: 'row', 
    marginTop: 36, 
    marginBottom: 42,
  }, 
  listEmptyText: {
    color: '#f5f5f5',
    fontSize: 16, 
    textAlign: 'center',
  }
}); 