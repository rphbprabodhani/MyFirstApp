import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// Expo: already included. Bare RN: npm i react-native-vector-icons
// and change this import to 'react-native-vector-icons/MaterialIcons'
import { MaterialIcons } from '@expo/vector-icons';

const user = {
  name: 'Hirushi',
  email: 'rphbprabodhani@nsbm.ac.lk',
  points: 0,
  // Replace with require('./assets/avatar.png') or your own image URL
  avatar: 'https://api.dicebear.com/7.x/avataaars/png?seed=Diluka',
};

export default function ProfileScreen({ onAddPress }) {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />

      {/* App bar */}
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>My Profile</Text>
      </View>

      <View style={styles.body}>
        {/* Avatar with verified tick */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarCircle}>
            <Image source={{ uri: user.avatar }} style={styles.avatarImage} />
          </View>
          <MaterialIcons
            name="check"
            size={44}
            color="#00e000"
            style={styles.tick}
          />
        </View>

        <View style={styles.divider} />

        {/* Name */}
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{user.name}</Text>

        {/* Email */}
        <Text style={[styles.label, styles.section]}>Email</Text>
        <View style={styles.row}>
          <MaterialIcons name="email" size={22} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{user.email}</Text>
        </View>

        {/* Points */}
        <Text style={[styles.label, styles.section]}>Points</Text>
        <View style={styles.row}>
          <MaterialIcons name="star" size={22} color="#000" />
          <Text style={[styles.value, styles.rowText]}>{user.points}</Text>
        </View>
      </View>

      {/* Floating action button */}
      <TouchableOpacity style={styles.fab} activeOpacity={0.8} onPress={onAddPress}>
        <MaterialIcons name="add" size={26} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  appBar: {
    height: 56,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appBarTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  body: {
    paddingHorizontal: 14,
    paddingTop: 12,
  },
  avatarWrapper: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e58aa8',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  avatarImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  tick: {
    position: 'absolute',
    right: -6,
    bottom: -4,
  },
  divider: {
    height: 1.5,
    backgroundColor: '#000',
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
    marginBottom: 6,
  },
  section: {
    marginTop: 22,
  },
  value: {
    fontSize: 15,
    color: '#111',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    marginLeft: 10,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 20,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});