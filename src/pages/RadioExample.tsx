import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonItemDivider } from '@ionic/react';
import ReusableHeaderExample from "../components/ReusableHeaderExample";

const RadioExample: React.FC = () => {
    const [selected, setSelected] = useState<string>('first');
    return (
        <IonPage>
            <ReusableHeaderExample title={"Radio Button Examples"} />
            <IonContent>
                <IonList>
                    <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                        <IonListHeader>
                            <IonLabel>Name</IonLabel>
                        </IonListHeader>
                        <IonItem>
                            <IonLabel>First</IonLabel>
                            <IonRadio slot="start" value="first" />
                        </IonItem>
                        <IonItem>
                            <IonLabel>Second</IonLabel>
                            <IonRadio slot="start" value="second" />
                        </IonItem>
                        <IonItem>
                            <IonLabel>Third</IonLabel>
                            <IonRadio slot="start" value="third" />
                        </IonItem>
                    </IonRadioGroup>
                    <IonItemDivider>Your Selection</IonItemDivider>
                    <IonItem>{selected ?? '(none selected'}</IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default RadioExample;
