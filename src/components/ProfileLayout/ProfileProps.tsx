type ProfileInfo = {
    imagelink : string | null,
    displayname : string | null,
    location : string | null,
    correction_point : string | null,
    wallet : string | null,
    pool_year : string | null,
    email: string | null,
    first_name: string | null,
    last_name: string | null,
    phone: string | null,
    pool_month: string | null,
    levels: Array<any>
}

export function extractProfileInfoProps(userinfo : any) : ProfileInfo {
    return {
        imagelink: userinfo.image.link ? userinfo.image.link : `https://eu.ui-avatars.com/api/?name=${userinfo.first_name}+${userinfo.last_name}&size=250`,
        displayname: userinfo.displayname ? userinfo.displayname : "-",
        location: userinfo.location ? userinfo.location : "Unavailable",
        correction_point : userinfo.correction_point ? userinfo.correction_point : 0,
        wallet : userinfo.wallet ? userinfo.wallet : 0,
        pool_year : userinfo.pool_year ? userinfo.pool_year : 0,
        email: userinfo.email ? userinfo.email : "-",
        first_name: userinfo.first_name ? userinfo.first_name : "-",
        last_name: userinfo.last_name ? userinfo.last_name : "-",
        phone: userinfo.phone ? userinfo.phone : "hidden",
        pool_month: userinfo.pool_month ? userinfo.pool_month : "-",
        levels: userinfo.cursus_users ? userinfo.cursus_users : []
    }
}