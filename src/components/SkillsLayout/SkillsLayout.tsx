import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { Props } from '@ui-kitten/components/devsupport/services/props/props.service';
import { SkillsInfoRow } from './SkillsInfoRow';

export const SkillsLayout = (props: Props) => {

    const renderSkills = () => {
        let skillsRows = [];
        for (const cursus of props.skillsinfo.curses) {
            skillsRows.push(<Text key={cursus.cursus.name} style={[styles.title]} category='h6'>
                {cursus.cursus.name}
            </Text>);
            for (const skill of cursus.skills) {
                skillsRows.push(
                    <SkillsInfoRow
                        style={[styles.setting]}
                        hint={skill.name}
                        key={cursus.cursus.name + skill.name}
                        value={skill.level} />);
            }
        }
        return skillsRows;
    };

    return (
        <Layout
            style={styles.container}>
            <ScrollView>
                {renderSkills()}
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        flexDirection: 'row',
    },
    title: {
        marginVertical: 16
    },
    setting: {
        padding: 16,
        marginTop: 2
    }
});