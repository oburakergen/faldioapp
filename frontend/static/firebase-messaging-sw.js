
    importScripts(
      'https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js'
    )
    importScripts(
      'https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js'
    )
    firebase.initializeApp({"apiKey":"AIzaSyD50AjSiME7VRxQRq_xDMR8ZTTVYCRI7S4","authDomain":"faldio.firebaseapp.com","projectId":"faldio","storageBucket":"faldio.appspot.com","messagingSenderId":"995370189429","appId":"1:995370189429:web:346b5390f3604c25932e3c","measurementId":"G-TYS4KJLLYK"})

    // Retrieve an instance of Firebase Messaging so that it can handle background
    // messages.
    const messaging = firebase.messaging()

    // Setup event listeners for actions provided in the config:
    self.addEventListener('notificationclick', function(e) {
      const actions = [{"action":"randomName","url":"randomUrl"}]
      const action = actions.find(x => x.action === e.action)
      const notification = e.notification

      if (!action) return

      if (action.url) {
        clients.openWindow(action.url)
        notification.close()
      }
    })

    