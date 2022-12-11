import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Avatar, Layout, Text } from '@ui-kitten/components';
import { ProfileInfoBlock } from './ProfileInfoBlock';
import { Props } from '@ui-kitten/components/devsupport/services/props/props.service';
import { ProfileInfoRow } from './ProfileInfoRow';

export const ProfileLayout = (props: Props) => {

    const renderLevels = () => {
        // @ts-ignore
        return props.profileinfo.levels.map(row => {
            return <ProfileInfoRow
                key={row.cursus.id}
                style={[styles.setting]}
                hint={row.cursus.name + " Level"}
                value={row.level} />;
        });
    };

    return (
        <Layout
            style={styles.container}>
            <View style={styles.profileContainer}>
                <Avatar
                    style={styles.profileAvatar}
                    size='large'
                    source={{ uri: props.profileinfo.imagelink }}
                />
                <View style={styles.profileDetailsContainer}>
                    <Text category='h4'>
                        {props.profileinfo.displayname}
                    </Text>
                    <Text
                        appearance='hint'
                        category='s1'>
                        {props.profileinfo.location}
                    </Text>
                </View>
            </View>
            <View style={styles.ProfileInfoBlockContainer}>
                <ProfileInfoBlock
                    hint='Points'
                    value={`${props.profileinfo.correction_point}`}
                />
                <ProfileInfoBlock
                    hint='Wallet'
                    value={`${props.profileinfo.wallet} ₳`}
                />
                <ProfileInfoBlock
                    hint='Pool Year'
                    value={`${props.profileinfo.pool_year}`}
                />
            </View>
            <Text style={[styles.title]} category='h6'>
                    Levels
                </Text>
            <ScrollView>
                {renderLevels()}
            </ScrollView>
            <Text style={[styles.title]} category='h6'>
                General Information
            </Text>
            <ScrollView>
                <ProfileInfoRow
                    style={[styles.setting]}
                    hint='First Name'
                    value={props.profileinfo.first_name}
                />
                <ProfileInfoRow
                    style={[styles.setting]}
                    hint='Last Name'
                    value={props.profileinfo.last_name}
                />
                <ProfileInfoRow
                    style={[styles.setting]}
                    hint='Email'
                    value={props.profileinfo.email}
                />
                <ProfileInfoRow
                    style={[styles.setting]}
                    hint='Phone'
                    value={props.profileinfo.phone}
                />
                <ProfileInfoRow
                    style={[styles.setting]}
                    hint='Pool Year'
                    value={props.profileinfo.pool_year}
                />
                <ProfileInfoRow
                    style={[styles.setting]}
                    hint='Pool Month'
                    value={props.profileinfo.pool_month}
                />
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        marginVertical: 16
    },
    profileContainer: {
        flexDirection: 'row',
    },
    profileAvatar: {
        marginHorizontal: 8,
    },
    profileDetailsContainer: {
        flex: 1,
        marginHorizontal: 8,
    },
    rateBar: {
        marginTop: 24,
    },
    followButton: {
        marginTop: 24,
    },
    ProfileInfoBlockContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 24,
    },
    profileSectionsDivider: {
        width: 1,
        height: '100%',
        marginHorizontal: 8,
    },
    profileDescription: {
        marginTop: 8,
        marginBottom: 8,
        alignItems: "center",
        justifyContent: "center"
    },
    setting: {
        padding: 16,
        marginTop: 2
    }
});