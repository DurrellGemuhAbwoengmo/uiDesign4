import {StyleSheet} from 'react-native';

const styles = StyleSheet.create( {
    container: {
        backgroundColor: '#00815F',
        flex: 1,
    },
    upperContainer: {
        flex: 2,
    },
    lowerContainer: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
    },
    lcHeader: {
        fontSize: 20,
        fontWeight: 'bold', 
        paddingTop: 60,  
    },
    Iconlc: {
        
    },
    lcHeaderView: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    lcContentView: {
        flex: 3,
        flexDirection: 'column',
    },
    articleInfo: {
        flexDirection: 'row'
    },
    articleName: {
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 20,
        marginTop: 20,
    },
    articleAuthor: {
        marginLeft: 20,
        color: '#555753',
    },
    articleImage: {
            width: 70, 
            height: 70, 
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            marginTop: 5,
            marginLeft: 20,
    },
    pageTitle: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },
    searchBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    category: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    pageTitleText: {
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 2,
        color: 'white'
    },
    searchBoxField: {
        width: 300,
        backgroundColor: 'rgba(255,255,255,0.6)',
        borderRadius: 50,
        paddingHorizontal: 20,   
    },
    icon: {
        alignItems: 'center',
    },
    MenuIcon: {
        marginLeft: 10,
        marginTop: 20,
    },
    PopularIcon: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
    },
    TrendingIcon: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
    },
    RecentIcon: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
    },
    margicIcon: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 90,
    },
    pop: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textcolor: {
        color: 'white',
        paddingTop: 10
        
    }
  

});

export default styles;