import useSession from '$commerce/session/use-session';
import { BasicInputReturnType } from '$styleguide/hooks/types';
import { useStyleClass } from '$styleguide/styleContext';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  DrawerActions,
  useLinkTo,
  useNavigation,
  NavigationContainer,
} from '@react-navigation/native';
import React, { FC, Fragment, useCallback } from 'react';
import {
  Image,
  Linking,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import { useCustomer } from '$commerce/customer';
import useSlotBlock from '$engine/render/hooks/useSlotBlock';
import IconAddresses from './customIcon/library/IconAddresses';
import IconCustomerSupport from './customIcon/library/IconCustomerSupport';
import IconServiceCenters from './customIcon/library/IconServiceCenters';
import IconTutorial from './customIcon/library/IconTutorial';
import IconOrder from './customIcon/library/IconOrder';
import IconPaymentMethods from './customIcon/library/IconPaymentMethods';
import IconLists from './customIcon/library/IconLists';
import IconSettings from './customIcon/library/IconSettings';
import IconUser from './customIcon/library/IconUser';

export const CustomDrawer: FC<{
  inputObject: BasicInputReturnType;
  label?: string;
  placeholder?: string;
}> = (props) => {
  const { inputObject } = props;

  const subSchema = inputObject.getObject();
  const { styles } = useStyleClass(['container'], subSchema.blockClass);
  const linkTo = useLinkTo();
  const { data, isLoading } = useCustomer();
  console.log('customer:', data);
  const navigation = useNavigation();

  const { isSignedIn } = useSession();
  //custom drawer content
  const signOutBlock = useSlotBlock(subSchema.signoutComppnent);


  return (
    <View style={[defaultStyles.container]}>
      <DrawerContentScrollView {...props}>
        <View>
          <View style={[defaultStyles.iconBackContainer]}>
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}
            >
              <Icon name={'arrow-back-outline'} size={30} color={'#dbdbdb'} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[defaultStyles.drawerContent]}>
          {isSignedIn ? (
            <>
              <View style={[defaultStyles.userInfoContainer]}>
                <View style={[defaultStyles.userInfo]}>
                  <IconUser />
                  <View style={[defaultStyles.nameContainer]}>
                    <Text style={[defaultStyles.nameTitle]}>
                      {data?.firstName} {data?.lastName}
                    </Text>
                    <TouchableOpacity onPress={() => { linkTo('/profile/update'); }}>
                      <Text style={[defaultStyles.nameAction]}>Ver más</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { linkTo('/my-addresses'); }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconAddresses />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Mis direcciones
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Lugar donde enviar tus pedidos
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { linkTo('/my-orders'); }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconOrder />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>Mis pedidos</Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Historial y estado de pedidos
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconPaymentMethods />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Mis medios de pago
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Selecciona y administra tus tarjetas
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconLists />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Mis listas de compras
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        administra listas de compras
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { linkTo('/profile/points'); }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconLists />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>Mis puntos</Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Consulta de puntos
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconCustomerSupport />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Atención al cliente
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Resuelve dudas y haz sugerencias
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>

                <TouchableOpacity onPress={() => { linkTo('/services/centers'); }}>

                  <View style={[defaultStyles.itemContainer]}>
                    <IconServiceCenters />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Centro de servicios
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Soporte técnico para tus productos
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>

                <TouchableOpacity onPress={() => { linkTo('/profile/update'); }}>

                  <View style={[defaultStyles.itemContainer]}>
                    <IconSettings />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Ajustes
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Cambia tu contraseña y más
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconTutorial />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>Tutorial</Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Conoce los beneficios de tu app
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconAddresses />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Nuestras tiendas
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Conoce nuestras tiendas
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <>
              <View style={[defaultStyles.userInfoContainer]}>
                <View style={[defaultStyles.userInfo]}>
                  <IconAwesome name={'user-circle'} size={30} color="#C6C6C6" />
                  <View style={[defaultStyles.nameContainer]}>
                    <TouchableOpacity onPress={() => { linkTo('/walkthrough'); }}>
                      <Text style={[defaultStyles.nameTitle]}>
                        Iniciar sesión
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>

              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconCustomerSupport />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Atención al cliente
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Resuelve dudas y haz sugerencias
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>

                <TouchableOpacity onPress={() => { linkTo('/services/centers'); }}>

                  <View style={[defaultStyles.itemContainer]}>
                    <IconServiceCenters />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Centro de servicios
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Soporte técnico para tus productos
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconTutorial />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>Tutorial</Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Conoce los beneficios de tu app
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[defaultStyles.drawerItemContainer]}>
                <TouchableOpacity onPress={() => { }}>
                  <View style={[defaultStyles.itemContainer]}>
                    <IconAddresses />
                    <View style={[defaultStyles.itemInfo]}>
                      <Text style={[defaultStyles.itemTitle]}>
                        Nuestras tiendas
                      </Text>
                      <Text style={[defaultStyles.itemDescription]}>
                        Conoce nuestras tiendas
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
        <View style={[defaultStyles.containerFooter]}>
          <View style={[defaultStyles.textContainer]}>
            <TouchableOpacity onPress={() => { }}>
              <Text style={[defaultStyles.text]}>
                Información legal de la app
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {isSignedIn && signOutBlock}
      </DrawerContentScrollView>
    </View>
  );
};

const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerContent: {
    flex: 1,
  },
  drawerItemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb',
    marginLeft: 40,
    paddingVertical: 20,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  itemInfo: {
    marginLeft: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#37474F',
  },
  itemDescription: {
    fontSize: 10,
    fontFamily: 'Montserrat-SemiBold',
    color: '#707070',
  },
  iconBackContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  userInfoContainer: {
    marginLeft: 40,
    paddingTop: 5,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#707070',
  },
  userInfo: {
    flexDirection: 'row',
    marginTop: 15,
  },
  nameContainer: {
    marginLeft: 15,
    flexDirection: 'column',
  },
  nameTitle: {
    fontSize: 18,
    color: '#37474F',
    fontFamily: 'Montserrat-SemiBold',
  },
  nameAction: {
    fontSize: 12,
    color: '#707070',
  },
  containerFooter: {
    paddingTop: 19,
  },
  textContainer: {
    alignItems: 'flex-end',
    paddingRight: 22,
    paddingBottom: 20,
  },
  logoutContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 22,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    marginLeft: 8,
  },
});

