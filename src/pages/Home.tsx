// src/pages/Home.tsx

import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonList, IonItem } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home: React.FC = () => {
  const history = useHistory();

  const openChat = () => {
    history.push('/chat');
  };

  return (
    <IonPage className="home-page">
      <IonHeader className="home-header">
        <IonToolbar>
          <IonTitle>Chats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList className="chat-list">
          <IonItem button onClick={openChat} className="chat-item">
            Chat with Alice
          </IonItem>
          <IonItem button onClick={openChat} className="chat-item">
            Chat with Bob
          </IonItem>
        </IonList>
        <IonButton expand="block" onClick={openChat} className="new-chat-button">
          Start New Chat
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
