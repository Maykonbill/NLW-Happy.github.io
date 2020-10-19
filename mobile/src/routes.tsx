import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanageDetails from './pages/OrphanageDetails';
import OrphanageMap from './pages/OrphanagesMap';
import SelectMapPosition from './pages/CreateOphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOphanage/OrphanageData';
import Header from './Components/Header';


export default function Routes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: "#F2f3f5" } }}>
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanageMap}  
                    
                />
                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails}  
                    options={{
                        headerShown: true,
                        header: () => <Header showCancel={false} title="Orphanage" />
                    }}
                />
                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}  
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no mapa" />
                    }}
                />
                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData}  options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados" />
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}