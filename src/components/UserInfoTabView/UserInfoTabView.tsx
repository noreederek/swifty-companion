import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Tab, TabView, Text } from '@ui-kitten/components';
import { Props } from '@ui-kitten/components/devsupport/services/props/props.service';
import { ProfileLayout } from '../ProfileLayout/ProfileLayout';
import { extractProfileInfoProps } from '../ProfileLayout/ProfileProps';
import { SkillsLayout } from '../SkillsLayout/SkillsLayout';
import { extractSkillsInfoProps } from '../SkillsLayout/SkillsProps';
import { ProjectsLayout } from '../ProjectsLayout/ProjectsLayout';
import { extractProjectsInfoProps } from '../ProjectsLayout/ProjectsProps';

export const UserInfoTabView = (props: Props) => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    return (
        <TabView
            selectedIndex={selectedIndex}
            onSelect={index => setSelectedIndex(index)}
            style={{ flex: 1 }}>
            <Tab title='Profile'>
                <Layout style={styles.profileContainer}>
                    <ProfileLayout profileinfo={extractProfileInfoProps(props.userinfo)} />
                </Layout>
            </Tab>
            <Tab title='Skills'>
                <Layout style={styles.tabContainer}>
                    <SkillsLayout skillsinfo={extractSkillsInfoProps(props.userinfo)} />
                </Layout>
            </Tab>
            <Tab title='Projects'>
                <Layout style={styles.tabContainer}>
                    <ProjectsLayout projectsinfo={extractProjectsInfoProps(props.userinfo)} />
                </Layout>
            </Tab>
        </TabView>
    );
};

const styles = StyleSheet.create({
    profileContainer: {
        flex: 1
    },
    tabContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});