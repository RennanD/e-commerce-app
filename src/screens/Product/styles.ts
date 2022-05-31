import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  },
  horizontal: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 45,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#fff',
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems:'center',
    justifyContent: 'center'
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  banner: {
    alignItems: 'center'
  },
  dots: {
    marginTop: 24,
    flexDirection: 'row',
    alignItems: 'center'
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: '#CFCFCF'
  },
  activeDot: {
    height: 8,
    width: 28,
    marginHorizontal: 12,
    backgroundColor: '#FF5500',
    borderRadius: 8
  },
  itemsList: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '90%'
  },
  item: {
    backgroundColor: '#fff',
    height: 73,
    width: 73,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22
  },
  selectedItem: {
    borderWidth: 1,
    borderColor: '#FF5500'
  },
  imageBanner: {
    position: 'absolute',
    height: 250,
    opacity: 0.3,
    width: 280,
    zIndex: -1,
    top: 40,
    backgroundColor: '#fff',
    borderRadius: 50
  },
  img: {
    position: 'relative',
  },
  infoContainer: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingBottom: 30
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 12,
    color: '#909090'
  },
  rate: {
    color: '#3F4343',
    fontWeight: '600',
    fontSize: 18,
    marginHorizontal: 4
  },
  votes: {
    fontSize: 12,
    color: '#909090'
  },
  productName: {
    color: '#3F4343',
    fontWeight: '600',
    fontSize: 22,
  },
  productDescription: {
    fontSize: 12,
    color: '#909090',
    marginTop: 10
  },
  price: {
    color: '#FF5500',
    fontWeight: '600',
    fontSize: 20
  },
  colorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonColor: {
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderRadius: 15,
    marginLeft: 4
  },
  colorOption: {
    height: '100%',
    width: '100%',
    borderRadius: 15
  },
  buyButton: {
    height: 48,
    borderRadius: 55,
    marginHorizontal: 20,
    marginTop: 30,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:'#FF5500'
  },
  buyText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18
  }
})