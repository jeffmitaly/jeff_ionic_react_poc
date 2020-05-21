import React from 'react';
import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";

interface ContainerProps {
  title: string;
}

const ReusableHeaderExample: React.FC<ContainerProps> = ({ title }) => {
    if (!title) {
        title = 'No Header Title Provided!';
    }
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>{title}</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default ReusableHeaderExample;
