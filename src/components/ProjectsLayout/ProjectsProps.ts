type ProjectsInfo = {
    projects: Array<any>
}

export function extractProjectsInfoProps(userinfo : any) : ProjectsInfo {
    return {projects: userinfo.projects_users ? userinfo.projects_users : []}
}