import {
  StaticParamList,
  createStaticNavigation,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from './screens/home';
import { About } from './screens/about';

const NoRender = () => null;

const BottomTabRoot = createBottomTabNavigator({
  screens: {
    Home: {
      options: {
        header: NoRender,
        tabBarIcon: NoRender,
      },
      screen: Home,
    },
    About: {
      options: {
        header: NoRender,
        tabBarIcon: NoRender,
      },
      screen: About,
    },
  },
});

type BottomTabRootParamList = StaticParamList<typeof BottomTabRoot>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends BottomTabRootParamList {}
  }
}

const Navigation = createStaticNavigation(BottomTabRoot);

export const App = () => <Navigation />;
