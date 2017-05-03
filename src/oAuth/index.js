import { Linking } from 'react-native'

const oAuth = {
  bdevelopers: (client_id, callback) => {
    url = `http://localhost:8090/auth/dialog/authorize?client_id=${client_id}&response_type=code&redirect_uri=mangos://authorize/`
    
    Linking.openURL(url)
      .catch(err => console.error('An error occurred', err))

    Linking.addEventListener('url', (event) => {
      const url = event.url
      const code = url.substring(url.indexOf("=") + 1)
      Linking.removeEventListener('url', this._handleOpenURL)    
    })

  },
}

export default oAuth
