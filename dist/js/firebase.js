import { initializeApp, getApps } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js'
import { getFirestore, getDoc , doc  } from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js'
import { Config } from './config.js'


function initializServices() {
	const isConfigured = getApps().length > 0
	const firebaseApp = initializeApp(Config.firebase)
	const firestore = getFirestore(firebaseApp)
	const auth = getAuth(firebaseApp)
	return { firebaseApp, firestore, auth, isConfigured }
}

const app = initializeApp(Config)

const db = getFirestore()



export async function getPage(id) {
 const Doc = await getDoc(doc(db , 'pages', id))
 return Doc.data()
}

function name(params) {
	
}