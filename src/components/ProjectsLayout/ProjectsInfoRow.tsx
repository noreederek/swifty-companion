import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Divider, Layout, LayoutProps, Text } from '@ui-kitten/components';

export interface ProjectsInfoRowProps extends LayoutProps {
    projectname?: string;
    status?: string;
    slug?: string;
    value: string;
}

export const ProjectsInfoRow = (props: ProjectsInfoRowProps): React.ReactElement => {

    const { style, projectname, status, slug, value, ...layoutProps } = props;

    const renderNameElement = (): React.ReactElement => (
        <View>
            <Text
                appearance='hint'
                category='s1'>
                {projectname}
            </Text>
            <Text category='s2'>
                {slug}
            </Text>
            <Text category='s1' >
                {status}
            </Text>
        </View>
    );

    return (
        <React.Fragment>
            <Layout
                level='1'
                {...layoutProps}
                style={[styles.container, style]}>
                {projectname && renderNameElement()}
                <Text category='s1' status={Number(value) > 75 ? "success" : "danger"}>
                    {value}
                </Text>
            </Layout>
            <Divider />
        </React.Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});