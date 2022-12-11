import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';
import { Props } from '@ui-kitten/components/devsupport/services/props/props.service';
import { ProjectsInfoRow } from './ProjectsInfoRow';

export const ProjectsLayout = (props: Props) => {

    const renderProjects = () => {
        // @ts-ignore
        return props.projectsinfo.projects.map(project => {
            return <ProjectsInfoRow
                key={project.project.slug}
                style={[styles.setting]}
                projectname={project.project.name}
                status={project.status}
                slug={project.project.slug}
                value={project.final_mark} />;
        });
    };

    return (
        <Layout
            style={styles.container}>
            <ScrollView>
                {renderProjects()}
            </ScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 2,
        flexDirection: 'row',
    },
    title: {
        marginVertical: 16,
    },
    setting: {
        padding: 16,
        marginTop: 2
    }
});