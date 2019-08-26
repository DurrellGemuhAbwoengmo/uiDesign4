import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import styles from '../pages/HomePageStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomePage = () => {
   // const {mainView} = styles;
const MenuIcon = <Icon name = "currency-eth" size = {30} color="black" marginLeft= {20} marginTop = {20}  />;
const RecentIcon = <Icon name = "clock-outline" size = {60} color="black" marginLeft= {20} marginTop = {20} backgroundColor = "white" />;
const margicIcon = <Icon name = "star-outline" size = {60} color="black" marginLeft= {20} marginTop = {20}  />;
const TrendingIcon = <Icon name = "trending-up" size = {60} color="black" marginLeft= {20} marginTop = {20}  />;
const PopularIcon = <Icon name = "podcast" size = {60} color="black" marginLeft= {20} marginTop = {20}  />;
const Iconuc = <Icon name = "dots-horizontal" size = {60} color="white" marginLeft= {20} marginTop = {20}  />;
const Iconlc = <Icon name = "dots-horizontal" size = {60} color="orange" marginLeft= {20} marginTop = {20}  />;


    return (
        <View style = {styles.container}>
                <View style = {styles.upperContainer}>
                    <View style = {styles.MenuIcon}>
                        <Text>
                            {MenuIcon}
                        </Text>
                    </View>
                    <View style = {styles.pageTitle}>
                        <Text style = {styles.pageTitleText}>
                            Browse
                        </Text>
                        <Text>
                            Find podcast the at will suit your interest
                        </Text>
                    </View>
                    <View style = {styles.searchBox}>
                       <TextInput style = {styles.searchBoxField}
                       placeholder = "Type Keyword" 
                       placeholderTextColor = "#BABDB6"
                       />
                    </View>
                    <View style = {styles.category}>
                        <View>
                            <Text>
                                {PopularIcon}
                            </Text>
                            <Text>
                                Popular
                            </Text>
                        </View>
                        <View>
                            <Text>
                            {TrendingIcon}
                            </Text>
                            <Text>
                                Trending
                            </Text>
                        </View>
                        <View>
                            <Text>
                                {RecentIcon}
                            </Text>
                            <Text>
                                Recent
                            </Text>
                        </View>
                        <View>
                            <Text>
                                {margicIcon}
                            </Text>
                            <Text>
                                margic
                            </Text>
                        </View>
                        
                    </View>
                    <View style = {styles.icon}>
                        <Text>
                            {Iconuc}
                        </Text>
                    </View>
                </View>
                <View style = {styles.lowerContainer}>
                    <View style = {styles.lcHeaderView}>
                        <Text style = {styles.lcHeader}>
                            Handpicked
                        </Text>
                        <Text style = {styles.Iconlc}>
                            {Iconlc}
                        </Text>
                    </View>
                    <View style = {styles.lcContentView}>
                        <View style = {styles.articleInfo}>
                            <View>
                                <Image style = {styles.articleImage}
                                        source = {require('../images/img.jpg')}
                                />
                            </View>
                            <View style = {styles.articleContent}>
                                <Text style = {styles.articleName}>
                                    Finacial freedom
                                </Text>
                                <Text style = {styles.articleAuthor}>
                                    Natasha Rose
                                </Text>
                            </View>
                        </View>
                        <View style = {styles.articleInfo}>
                            <View>
                                <Image style = {styles.articleImage}
                                        source = {require('../images/img.jpg')}
                                />
                            </View>
                            <View style = {styles.articleContent}>
                                <Text style = {styles.articleName}>
                                    Minimalism Lifestyle
                                </Text>
                                <Text style = {styles.articleAuthor}>
                                    Natasha Rose
                                </Text>
                            </View>
                        </View>
                        
                    </View>
                    
                </View>
        </View>
    )
}

export default HomePage;

