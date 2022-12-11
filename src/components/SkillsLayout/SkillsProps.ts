type SkillsInfo = {
    curses: Array<any>
}

export function extractSkillsInfoProps(userinfo : any) : SkillsInfo {
    return {curses: userinfo.cursus_users ? userinfo.cursus_users : []}
}